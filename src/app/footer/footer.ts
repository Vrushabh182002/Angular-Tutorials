import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  // Primitive Data Types in TypeScript in Angular 
  name:String = "VS"; //text values
  age:number = 22; // Integer and float values
  married:boolean = false; // True / False values
  Phno:bigint = 123n; // Very large integers
  rich = undefined; // Unintialized value
  donation = null; // Intentional Absence of value
  sym = Symbol('id'); // Unique Identifiers
}
