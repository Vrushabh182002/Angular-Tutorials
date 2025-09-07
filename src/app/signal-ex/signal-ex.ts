import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})
export class SignalEx {

  // Declaring a normal variable
  name="Vrushabh Somani";

  // Declaring a signal
  courseName= signal<String>("Angular 19");
  courseDuration= signal<number>(100);
  courseLength= signal("20 Videos/Lectures");

  // Declaring a computed signal
  courseDetails = computed(()=> this.courseName() + " - " + this.courseDuration() + " Hours.");

  constructor(){

    // Printing a normal vairaible
    console.log("Current Name : "+this.name);

    // Printing a signal variable
    console.log("Current Course Name : "+this.courseName());

    setTimeout(()=>{

      // Changing value of a normal variable 
      this.name="VS";
      console.log("Changed Name : "+this.name);
      
      // Changing value of a signal variable 
      this.courseName.set("Angular 20");
      console.log("Changed Course Name : "+this.courseName());
      
    },2000);
  }
}