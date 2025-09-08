import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  NAME = "VS";

  user = { name:"Vrushabh Somani", age:22};

  // Normal Function.
  handleClick(){
    alert("Clicked!!!");
  }

  // Function to change the object / property value.
  increaseAge(){
    this.user.age+=1;
  }

  // Function called and calling another function
  greet(){
    console.log("Good Morning, VS");
    this.greetAgain();
  }

  // The function called by the previous function.
  greetAgain(){
    console.log("Good Morning, DS")
  }
}