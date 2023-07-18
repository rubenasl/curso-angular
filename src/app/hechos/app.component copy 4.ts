import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrimeraApp';
}

interface producto {
  desc:string;
  precio:number;
}

const movil:producto={
  desc:'iphone',
  precio:300
}
const tablet:producto={
  desc: 'ipad',
  precio:480
}

function calcular(prductos:producto[]):[number, number] {
  let total=0;
  prductos.forEach((producto:producto)=>{
    total+=producto.precio;


  }
  
  
  )
  return [total,total*0.15];
}

const articulos = [movil,tablet];

const [total,isv] =calcular(articulos);

console.log(isv);
console.log(total);