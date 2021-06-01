import { Postagem } from "./Postagem"
import { Tema } from "./Tema"

export class User{
    public id:number
    public nome:string
    public usuario: string
    public senha:string
    public foto:string
    public tipo:string
    public postagem:Postagem[]
}