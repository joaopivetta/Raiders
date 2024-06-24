import { AutorizacaoService } from '../_service/autorizacao.service'
import { Component, OnInit, Injectable } from '@angular/core';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{

  constructor(private autorizacaoService:AutorizacaoService) {  }

  descricaoLogin = () =>
    this.autorizacaoService.statusLogin() ? "Login Realizado" : "Login";
  ngOnInit(): void {
   }
   
  clickLogin(){
    
    if (this.autorizacaoService.statusLogin()) {
      this.autorizacaoService.deslogar();
    }else{
      this.autorizacaoService.autorizar()
      
    }
  }
  

}
