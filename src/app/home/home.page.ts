import { Component, OnInit } from '@angular/core';

// imports
import { Pessoa } from '../models/pessoa.model';
import { Guid } from 'guid-typescript';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosContatosService } from '../services/dados-contatos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  private pessoa: Pessoa 
  public pessoaForm: FormGroup
  public arrayPessoa: any

  constructor(
    private FormBuilder : FormBuilder,
    private pessoaService : DadosContatosService
  ) {}

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
  }

  enviar(){
    if (this.pessoaForm.valid){
      this.pessoaService.inserir(this.pessoaForm.value)
    }
  }



}
