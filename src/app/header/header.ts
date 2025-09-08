import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})

export class Header {  
// defining a datatype to a variable
// Syntax 
// variable_name:datatype=value;
  fullName:String = "Vrushabh Somani";
  age:number = 22;

  demoName:String="VS";
  demoImg='https://images.unsplash.com/photo-1755398105315-a124a12152da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  increaseAge(){
    this.age+=1;
  }

  decreaseAge(){
    this.age-=1;
  }
}