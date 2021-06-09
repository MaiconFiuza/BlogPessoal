import { environment } from './../../environments/environment.prod';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}

   login(userLogin: UserLogin): Observable<UserLogin>{
      return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar',userLogin)
   }

   cadastro(user: User): Observable<User>{
      return this.http.post<User>('http://localhost:8080/usuarios/cadastrar',user)
   }

   logado(){
     let ok: boolean = false

     if(environment.token !=''){
       ok=true
     }
     return ok
   }

}
