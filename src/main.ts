import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { interval, map } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Pipes</h1>
    <h3> CurrencyPipe </h3>
    <p>Le prix est : {{ price | currency: 'USD '}}</p>
    <h3> Decimal Pipe </h3>
    <p> La valeur est : {{ value | number:'1.2-2' }} </p>

    <h3> PercentPipe </h3>
    <p>Le taux est : {{ rate | percent}}</p>

    <h3> KeyValuePipe</h3>

    <ul>
      <li *ngFor="let item of User | keyvalue">
        {{item.key}}: {{item.value}}
      </li>
    </ul>

    <h3> SlicePipe </h3>

    <p *ngFor="let name of names | slice:0:5"> - {{name}} </p>


  `,
})
export class App {
  name = 'Angular';

  price: number = 300 ;

  value: number  = 7.70

  rate: number = 21



  User = {
    name: 'John Doe',
    age: 17,
    address: 'Le Cap'
  }


  names = ['John', 'Joe', 'Jonathan', 'Jarod']



}

bootstrapApplication(App);
