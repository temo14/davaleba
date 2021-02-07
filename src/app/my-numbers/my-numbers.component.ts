import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-numbers',
  templateUrl: './my-numbers.component.html',
  styleUrls: ['./my-numbers.component.css']
})
export class MyNumbersComponent implements OnInit {
changenum: number =1;
  constructor() { }

  ngOnInit(): void {
  }
changenum1(){
  this.changenum=this.changenum+1
}
changenum2(){
  this.changenum=this.changenum-1
}
}
