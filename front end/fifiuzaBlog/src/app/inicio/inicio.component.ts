import { User } from './../model/User';
import { Tema } from './../model/Tema';
import { TemaService } from './../service/tema.service';
import { PostagemService } from './../service/postagem.service';
import { Postagem } from './../model/Postagem';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  user: User = new User()
  idUser = environment.id

  constructor(private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService) { }

  ngOnInit(){
    if(environment.token ==''){
       this.router.navigate([('/login')])
    }
    this.getAllTemas()
  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }

  findbyIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp:Tema)=>{
       this.tema=resp;
    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp:Postagem[])=>{
      this.listaPostagens = resp
    })
  }

  publicar(){
    //Essa parte acredito que seja a responsável pela realização da chave estrângeira
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    //Essas duas linhas são para o relacionamento com o cliente
    this.user.id=this.idUser
    this.postagem.usuario=this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp:Postagem)=>{
      this.postagem=resp
      alert('Postagem realizada com sucesso!')
      this.postagem= new Postagem()
    })

  }

}
