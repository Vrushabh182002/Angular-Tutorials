import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective {
  changeClass = signal<string>("");

  changeBG(name:string){
    this.changeClass.set(name);
  }
}
