import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
//import { interval, map } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Pipes</h1>
    <h3> CurrencyPipe </h3>
    <p>Le prix est : {{ price | currency: 'USD '}}</p>
    <h3> DecimalPipe </h3>
    <p> La valeur est : {{ value | number:'1.2-4' }} </p>

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

    <h3> TitleCasePipe </h3>

    <p> {{text | titlecase }}</p>


  `,
})
export class App {
  name = 'Angular';

  price: number = 300 ;

  value: number  = 3.1415926535897

  rate: number = 21



  User = {
    name: 'John Doe',
    age: 17,
    address: 'Le Cap'
  }


  names = ['John', 'Joe', 'Jonathan', 'Jarod', 'Allen', 'Ron', 'Robert', 'Mike']


  text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'



}

bootstrapApplication(App);
