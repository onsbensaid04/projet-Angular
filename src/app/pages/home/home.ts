import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  //attributs
  title: String;
  state:boolean
  //constructor
  constructor() {
    this.title='HOME 4DAS10';
    this.state =true;
  }
  change():void{
    this.title='HOME 4DAS9';
    this.state=false;
  }  //methods
  ngOnInit():void{}
}
