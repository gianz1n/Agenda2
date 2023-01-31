// Import 
import { Guid } from 'guid-typescript'

export interface Pessoa {
    id: Guid
    nome: string
    sobrenome: string
    tipo: string
    numero: string
    email: string
}