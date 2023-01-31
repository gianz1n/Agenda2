import { Injectable } from '@angular/core';
// imports
import { Pessoa } from '../models/pessoa.model';
import { Guid } from 'guid-typescript';
import { Storage } from '@ionic/storage-angular';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DadosContatosService {

  private todosContatos= []

  constructor(
    private storage: Storage
  ) { }

  // CREATE
  enviarContatos(){
    return this.todosContatos
  }

  async filtrarContatosId(id:string){
    return JSON.parse(await this.storage.get(id))
  }

  recebeDados(contatosRecebidos : any){
    contatosRecebidos.id = this.todosContatos.length + 1
    this.todosContatos.push(contatosRecebidos)
  }

  // DELETE
  deletaDados(id : string){
    // this.todosContatos.splice(this.todosContatos.indexOf(contatosRecebidos), 1)
    this.storage.remove(id)
  }

  // INSERT
  inserir(argumento : Pessoa){
    argumento.id = Guid.create()
    this.storage.set(argumento.id.toString(), JSON.stringify(argumento))
  }

  // READ
  async listarTodos(){

    let arrayPessoa: Pessoa []= [];

    await this.storage.forEach((value: string) =>
    {const pessoa: Pessoa = JSON.parse(value); arrayPessoa.push(pessoa)})

    return arrayPessoa

  }

  // UPDATE
  atualizarContatoId(id : string, contatosRecebidos : Pessoa){
    contatosRecebidos.id = Guid.parse(id)
    this.storage.set(contatosRecebidos.id.toString(), JSON.stringify(contatosRecebidos))
  }
}
