import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contador_App';
  numero =10;
  base =5;
  acumular(valor:number){
    this.numero+=valor;
  }

}

