import { Component, OnInit } from '@angular/core';
import { DadosContatosService } from 'src/app/services/dados-contatos.service';
import { Pessoa } from 'src/app/models/pessoa.model';
import { Guid } from 'guid-typescript';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-listagens-contatos',
  templateUrl: './listagens-contatos.page.html',
  styleUrls: ['./listagens-contatos.page.scss'],
})
export class ListagensContatosPage implements OnInit {
  private pessoa: Pessoa 
  public pessoaForm: FormGroup
  public arrayPessoa: any
  public dadosContatos : any

  constructor(
    private objContatos : DadosContatosService,
    private FormBuilder : FormBuilder,
    private pessoaService : DadosContatosService) {
    this.dadosContatos = objContatos.enviarContatos()
   }

   ngOnInit(){
    this.pessoa = {id: Guid.createEmpty(), nome:"", sobrenome:"", tipo:"", numero:"", email:""}
 
    this.pessoaForm = this.FormBuilder.group
    ({
       id : [this.pessoa.id],
       nome : [this.pessoa.nome, Validators.required],
       sobrenome : [this.pessoa.sobrenome, Validators.required],
       tipo : [this.pessoa.tipo, Validators.required],
       numero : [this.pessoa.numero, Validators.required],
       email : [this.pessoa.email, Validators.required]
    })
    
    this.pessoaService.listarTodos().then(arrayPessoa => {this.arrayPessoa = arrayPessoa})
   }
 
   enviar(){
     if (this.pessoaForm.valid){
       this.pessoaService.inserir(this.pessoaForm.value)
     }
   }

}
