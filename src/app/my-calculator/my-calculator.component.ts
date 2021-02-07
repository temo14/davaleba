import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-calculator',
  templateUrl: './my-calculator.component.html',
  styleUrls: ['./my-calculator.component.css']
})
export class MyCalculatorComponent implements OnInit {
  firstNumber: number=0;
  secondNumber: number=0;
  resultText:string='შედეგი';
  constructor() { }

  ngOnInit(): void {
  }
  calculateNumbers(){
    var numberSum= this.firstNumber + this.secondNumber;
    var numberMultiply= this.firstNumber * this.secondNumber;

    this.resultText = "Sum is: "+ numberSum + ' ,multiply is:'+ numberMultiply;

  }

}
