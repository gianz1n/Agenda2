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
    this.pessoa = {id: Guid.createEmpty(), marca: "", nome: "", cor: "", tamanho: "", tipo: "", preco:"", quantidade:""}
 
    this.pessoaForm = this.FormBuilder.group
    ({
      id: [this.pessoa.id],
      marca: [this.pessoa.marca, Validators.required],
      nome: [this.pessoa.nome, Validators.required],
      cor: [this.pessoa.cor, Validators.required],
      tamanho: [this.pessoa.tamanho, Validators.required],
      tipo: [this.pessoa.tipo, Validators.required],
      preco: [this.pessoa.preco, Validators.required],
      quantidade: [this.pessoa.quantidade, Validators.required],
    })
    
    this.pessoaService.listarTodos().then(arrayPessoa => {this.arrayPessoa = arrayPessoa})
   }
 
   enviar(){
     if (this.pessoaForm.valid){
       this.pessoaService.inserir(this.pessoaForm.value)
     }
   }

}
