import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrimeraApp';
}

function sumar (a:number,b:number){
  return a+b;
}

const sumarFlecha = (a:number,b:number):number => {
  return a+b;
}

function multiplicar (numero:number, otroNumero?:number, base:number=2):number {
  return numero*base;
}


const result = multiplicar(3,4,5)

console.log(result)