import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrimeraApp';
}



let hablidades: string[] = ['regate', 'pase', 'remate']

interface Person {

  nombre:string;
  hp:number;
  habilidades: string[];
  puebloNatal?:string
}

const personaje: Person = {

  nombre:'Strider',
  hp:100,
  habilidades: ['regate', 'pase', 'remate']
}

personaje.puebloNatal='Matanzas'


console.table(personaje)