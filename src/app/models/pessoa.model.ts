// Import 
import { Guid } from 'guid-typescript'

export interface Pessoa {
    id: Guid
    marca: string
    nome: string
    cor: string
    tamanho: string
    tipo: string
    preco: string
    quantidade: string
}