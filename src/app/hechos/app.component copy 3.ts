import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrimeraApp';
}

interface Reproductor{
  Volumen:number;
  segundo:number;
  cancion:string;
  detalles: Detalles
}

interface Detalles{
  autor:string;
  anno:number;
}

const reproductor:Reproductor = {
  Volumen: 90,
  segundo:40,
  cancion:'para que no te vayas',
  detalles:{
    autor:'Morat',
    anno:2021
  }
}


const {Volumen,segundo,detalles:{autor}}= reproductor;

console.log(Volumen);
console.log(segundo);
console.log(autor);

const dbz: string[] =['Goku','Vegeta','Gohan'];

const [p1,p2,p3]=dbz;

console.log(p2);