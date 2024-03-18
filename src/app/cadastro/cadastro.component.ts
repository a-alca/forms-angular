import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}

  cadastrar(form : NgForm){
    console.log(form);
    if(form.valid){
      this.router.navigate(['./sucesso']);
      console.log('Formulário enviado');
    }else{
      console.log('Formulário inválido');
    }
  }

}
