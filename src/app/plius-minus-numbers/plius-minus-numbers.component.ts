import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plius-minus-numbers',
  templateUrl: './plius-minus-numbers.component.html',
  styleUrls: ['./plius-minus-numbers.component.css']
})
export class PliusMinusNumbersComponent implements OnInit {
  numberCount: number = 1;
  constructor() { }

  ngOnInit(): void {
  }
damateba(){
  this.numberCount=this.numberCount +=1; 
}
gamokleba(){
  this.numberCount=this.numberCount -=1;
}
}
