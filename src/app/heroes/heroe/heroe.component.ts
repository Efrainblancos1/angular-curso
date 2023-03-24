import {Component} from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})

export class heroeComponent{
  nombre:string = 'Ironman';
  edad:number = 45;

  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }
  obtenerNombre():string{
    return `${this.nombre} - ${this.edad }`;
  }
  cambiarNombre(){
    this.nombre='Spiderman';
  }
  cambiarEdad(){
    this.edad=23;
  }
}


