import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosContatosService } from 'src/app/services/dados-contatos.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript'
import { Pessoa } from 'src/app/models/pessoa.model';
import { Storage } from '@ionic/storage-angular';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-detalhes-contatos',
  templateUrl: './detalhes-contatos.page.html',
  styleUrls: ['./detalhes-contatos.page.scss'],
})
export class DetalhesContatosPage implements OnInit {
  [x: string]: any;

  // Validação
  public pessoa1 : Pessoa
  public pessoaForm: FormGroup
  public arrayPessoa: any

  // criando metodos

  public contatosSelecionado : any
  public modoDeEdicao = false 
  handlerMessage: string;
  roleMessage: string;

  constructor(
    private objcontatos : DadosContatosService,
    private route : ActivatedRoute, 
    private alertController: AlertController,
    private formularioBuilder : FormBuilder,
    private pessoaService: DadosContatosService) { }

    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Alerta!',
        subHeader: "Excluir Contato",
        message: "Você irá excluir este contato",
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              this.handlerMessage = 'Alert canceled';
            },
          },
          {
            text: 'OK',
            role: 'confirm',
            handler: () => {
              this.handlerMessage = 'Alert confirmed';

              this.deletar()
              window.history.back()
            },
          },
        ],
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      this.roleMessage = `Dismissed with role: ${role}`;
    }
  

  ngOnInit() {

    this.pessoa1 = {id: Guid.createEmpty(), nome: "", sobrenome: "", numero: "", email: "", tipo: ""}

    // validação
    this.pessoaForm = this.formularioBuilder.group({
      id: [this.pessoa1.id],
      nome: [this.pessoa1.nome, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])],
      sobrenome: [this.pessoa1.sobrenome, Validators.compose([Validators.required, Validators.maxLength(40)])],
      tipo: [this.pessoa1.tipo, Validators.required],
      numero: [this.pessoa1.numero, Validators.compose([Validators.required, Validators.minLength(14)])],
      email: [this.pessoa1.email, Validators.compose([Validators.required, Validators.email, Validators.maxLength(25)])]
    })

    // captar ID

    const id : string = String(this.route.snapshot.paramMap.get('id'))

    // item 03

    if (id != 'add'){
      this.objcontatos.filtrarContatosId(id).then(array => this.pessoa1 = array)

    }else{
      this.modoDeEdicao = true
    }
  
  }

  iniciarEdicao(){
    this.modoDeEdicao = true 
  }

  
  encerrarEdicao(){

    const id : string = String(this.route.snapshot.paramMap.get('id'))
    if (id != 'add'){
      if (this.pessoaForm.valid){
      this.objcontatos.atualizarContatoId(id, this.pessoaForm.value)
      this.modoDeEdicao = false
      }   
    }
     else {
      if (this.pessoaForm.valid){
        this.objcontatos.inserir(this.pessoaForm.value)
        this.modoDeEdicao = false 
      }
     }
  }


  confirmardelete(){
    this.presentAlert()
  }

  deletar(){
    const id : string = String(this.route.snapshot.paramMap.get('id'))
    this.objcontatos.deletaDados(id)
  }

  enviar(){
    if (this.pessoaForm.valid){
      this.pessoaService.inserir(this.pessoaForm.value)
    }
  }

}
