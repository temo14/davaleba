import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers-check',
  templateUrl: './numbers-check.component.html',
  styleUrls: ['./numbers-check.component.css']
})
export class NumbersCheckComponent implements OnInit {

firstNumber:number=0;
secondNumber:number=0;
resultText:string="აქ გამოჩნდება რიცხვის";
  constructor() { }

  ngOnInit(): void {
  }
  compareNumbers(){
    if(this.firstNumber > this.secondNumber)
    {
      this.resultText = "პირველი რიცხვი მეტია";
    }
    else if(this.firstNumber < this.secondNumber)
    {
      this.resultText = "პირველი რიცხვი ნაკლებია";
    }
    else{
      this.resultText = "რიცხვები ტოლია";
    }
  }
}
