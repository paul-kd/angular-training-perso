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
    <p> La valeur est : {{ value | number:'2.4 -4' }} </p>
  `,
})
export class App {
  name = 'Angular';

  price: string | number = 300 ;

  value: number | string = 7.70
}

bootstrapApplication(App);
