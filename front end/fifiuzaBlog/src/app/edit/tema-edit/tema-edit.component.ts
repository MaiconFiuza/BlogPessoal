import { ActivatedRoute, Router } from '@angular/router';
import { TemaService } from './../../service/tema.service';
import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/model/Tema';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  tema: Tema = new Tema()

  constructor(private temaService: TemaService,
              private router: Router,
              private route: ActivatedRoute
              ) { }

  //Método que é executado logo que o programa inicia
  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
      alert('Sua Sessão expirou, faça o login novamente')
    }
    let id = this.route.snapshot.params['id']
    this.findByIdTema(id)
  }

  findByIdTema(id:number){
    this.temaService.getByIdTema(id).subscribe((resp: Tema) => {
      this.tema=resp
    })
  }

  atualizar(){
    this.temaService.putTema(this.tema).subscribe((resp:Tema)=>{
      this.tema = resp
      alert('Tema atualizado com sucesso!')
      this.router.navigate(['/tema'])
    })
  }


}
