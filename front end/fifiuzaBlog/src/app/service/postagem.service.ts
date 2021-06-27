import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http:HttpClient) { }

  token={
    headers: new HttpHeaders().set('Authorization',environment.token)
  }

  getAllPostagens():Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://fifiuzablog.herokuapp.com/postagens',this.token)
  }

  postPostagem(postagem:Postagem):Observable<Postagem>{
    return this.http.post<Postagem>('https://fifiuzablog.herokuapp.com/postagens',postagem,this.token)//Esse finalzinho de código é o que é mandado para o endpoint, nesse caso o token e e a psotagem
  }

}
