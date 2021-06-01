
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
      return this.http.post<UserLogin>('https://fifiuzablog.herokuapp.com/usuarios/logar',userLogin)
   }

   cadastro(user: User): Observable<User>{
      return this.http.post<User>('https://fifiuzablog.herokuapp.com/usuarios/cadastrar',user)
   }

}
