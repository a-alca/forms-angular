import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {
  @Input() mensagem = ''; // Input para passar mensagem para dentro do componente de cadastro e validar mensagens de erro no form

  constructor() {}
  ngOnInit(): void {}
}
