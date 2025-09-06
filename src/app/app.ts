import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  NAME = "VS";

  handleClick(){
    alert("Clicked!!!");
  }

  greet(){
    console.log("Good Morning, VS");
    this.greetAgain();
  }

  greetAgain(){
    console.log("Good Morning, DS")
  }
}