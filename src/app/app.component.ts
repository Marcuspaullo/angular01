import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  nome = 'Marcus Paullo'; 
  dataAtual = new Date();


  valorA: number = 0;
  valorB: number = 0;
  resultado: number = 0

  somar(): void {
    this.resultado = this.valorA + this.valorB 

  }
  subtrair(): void {
    this.resultado = this.valorA - this.valorB
  }
  



}

