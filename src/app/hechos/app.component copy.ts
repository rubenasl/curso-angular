import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrimeraApp';
}


interface PersonajeRandom {
  nombre:string;
  hp:number;
  mostrarHP:() => void;
}

function curar(personaje:PersonajeRandom,curarX:number): void {
  personaje.hp+=curarX;
  console.log(personaje);
}



const nuevoPersonaje:PersonajeRandom = {
  nombre:'Ruben',
  hp: 50,
  mostrarHP() {
    console.log('Puntos de vida: ', this.hp)
  }
}

curar(nuevoPersonaje,20)

nuevoPersonaje.mostrarHP();