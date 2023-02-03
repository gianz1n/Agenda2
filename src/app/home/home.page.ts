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
  }

  enviar(){
    if (this.pessoaForm.valid){
      this.pessoaService.inserir(this.pessoaForm.value)
    }
  }



}
