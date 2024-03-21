import { ConsultaCepService } from './../service/consulta-cep.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router,
    private ConsultaCepService: ConsultaCepService
  ) { }

  ngOnInit(): void {}

  consultaCEP(ev: any, form: NgForm) {
    const cep = ev.target.value;
    if(cep !== '') {
      this.ConsultaCepService.getConsultaCep(cep).subscribe(resultado => {
        console.log(resultado);
        this.populandoEndereco(resultado, form);
      })
    }
    return
  }

  populandoEndereco(dados: any, form: NgForm) {
    form.form.patchValue ({
      endereco: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    })
  }

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
