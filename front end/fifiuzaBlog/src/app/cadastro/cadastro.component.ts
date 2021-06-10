import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User = new User()
  confirmaSenha: string
  tipoUsuario: string

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confirmaSenha = event.target.value
  }

  tipoUser(event:any){
    this.tipoUsuario = event.target.value
  }

  cadastro(){
    this.user.tipo=this.tipoUsuario

    if(this.user.senha != this.confirmaSenha){
      alert('As senhas não estão batendo')
    }
    else{
      this.authService.cadastro(this.user).subscribe((resp:User)=>{
        this.user =resp
        this.router.navigate(['/login'])
        alert('Usuario cadastrado com sucesso')
      })
    }

  }



}
