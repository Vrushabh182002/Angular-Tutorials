import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  
// defining a datatype to a variable
// Syntax variable_name:datatype=value;

  number:number = 100;
  fullName:String = "Vrushabh Somani"

}