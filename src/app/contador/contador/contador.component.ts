import { Component } from '@angular/core';


@Component({
    selector:'app-contador',
    template: `
    <h1>{{title}}</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>

    <button (click)="acumular(-base)"  >-5</button>

    <span>{{numero}}</span>

    <button (click)="acumular(base)">+5</button>`
})
export class ContadorComponent {
    title = 'Contador_App';
    numero =10;
    base =5;
    acumular(valor:number){
      this.numero+=valor;
    }
}