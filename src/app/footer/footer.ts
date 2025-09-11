import { LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements OnInit,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,DoCheck,OnDestroy {

  // Primitive Data Types in TypeScript in Angular 
  name: string = "VrusHABH SoMani"; //text values
  age:number = 22; // Integer and float values
  married:boolean = false; // True / False values
  Phno:bigint = 123n; // Very large integers
  rich = undefined; // Unintialized value
  donation = null; // Intentional Absence of value
  sym = Symbol('id'); // Unique Identifiers

  listNum =[1,2,3,4,5,6,7,8,9,10,11,12,13];

  constructor(){
    console.log("Constructor called.");
  }

  ngOnInit(): void {
      console.log("ngOnInit called.");
      // to trigger api calls
      // to subscribe
  }

  ngAfterContentInit(): void {
      console.log("After Content Init called.");
  }

  ngAfterContentChecked(): void {
      console.log("After Content Checked called.");
  }

  ngAfterViewInit(): void {
      console.log("After View Init called.");
      // to deal with ViewChild
      // to subscribe
  }

  ngAfterViewChecked(): void {
      console.log("After View Checked called.");
  }

  ngDoCheck(): void {
      console.log("Do Check called.");
  }

  ngOnDestroy(): void {
      console.log("Destructor called.");
      // to unsubscribe
      // restrict use from navigating
  }
}
