import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  standalone:true,
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {
  
  show:boolean=false;
  month:string="mar";
  cities:string[]=["Ahmedabad","Gandhinagar", "Chennai", "Mumbai", "Delhi", "Pune", "Bangalore", "Kochi"];
  students:any[]=[
    {name:'VS',age:23,grade:'S'},
    {name:'DS',age:19,grade:'A'},
    {name:'RS',age:46,grade:'A+'},
    {name:'HS',age:49,grade:'A'}
  ];

  ShowP(){
    this.show=true;
  }

  HideP(){
    this.show=false;
  }
}
