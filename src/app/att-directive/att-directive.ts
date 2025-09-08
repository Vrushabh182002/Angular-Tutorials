import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective {
  changeClass = signal<string>("");
  changeColor:boolean=false;

  changeBG(name:string){
    this.changeClass.set(name);
  }

  changeCC(){
    this.changeColor = !this.changeColor;
  }
}
