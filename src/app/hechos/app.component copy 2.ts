import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrimeraApp';
}


interface SuperHeroe {
  nombre: string;
  edad: number;
  direccion :Direccion;
  mostrarDireccion: ()=> string;
}
interface Direccion{
  calle: string;
  pais: string;
  ciudad:string;
}


const superHeroe:SuperHeroe = {
  nombre: 'Spiderman',
  edad : 30,
  direccion : {
    calle : 'Amargura',
    pais : 'Cuba',
    ciudad: 'Matanzas'
  },
  mostrarDireccion() {
    return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
  }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);
