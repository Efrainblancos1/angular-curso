import {Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
  <h1>{{title}}</h1>
  <h3><strong>La base es: {{base}}</strong></h3>
  <button (click)="acumular(+base); " >+{{base}}</button>
  <span>{{numero}}</span>
  <button (click)="acumular(-base); " >-{{base}}</button>
  `
})

export class contadorComponent{
  //codigo Typescript
  title = 'Contador App';
  numero:number=0;

  acumular(numeroAcumular:number){
    this.numero+=numeroAcumular;

  }
  base:number=5;
}
