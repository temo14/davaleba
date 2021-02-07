import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-component',
  templateUrl: './select-component.component.html',
  styleUrls: ['./select-component.component.css']
})
export class SelectComponentComponent implements OnInit {
selectValues: number[]=[];
show: boolean=false;
selectedValue:string='';
  constructor() { }

  ngOnInit(): void {
    for(let i=0; i<20; i++){
      this.selectValues.push(i);
    }
  }
valueChange(event : any){
this.selectedValue=event.target.value;
console.log(event.target.value);
this.show=true

}
}
