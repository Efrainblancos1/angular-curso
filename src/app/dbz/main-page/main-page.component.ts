import { Component } from '@angular/core';
import {Personaje} from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})



export class MainPageComponent {
  nuevo:Personaje={
    nombre: '',
    poder: 0
  }

  personajes:Personaje[]=[
    {
      nombre:'Gohan',
      poder: 12000
    },
    {
      nombre: 'Trunks',
      poder: 12500
    }
  ];

  agregar(){
    if (this.nuevo.nombre.trim().length === 0) { return;}
    console.log(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo={
      nombre: '',
      poder: 0
    }


  }
  cambiarNombre(event:any){
    console.log(event.target.value)
  }

}
