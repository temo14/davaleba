import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-names',
  templateUrl: './my-names.component.html',
  styleUrls: ['./my-names.component.css']
})
export class MyNamesComponent implements OnInit {
names: string []=["irina","temo",'nino',"gio"]
newName: string="";
constructor() { }

  ngOnInit(): void {
  }
addName(){
  this.names[0]=this.newName;
}
}
