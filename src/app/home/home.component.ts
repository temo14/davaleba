import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  inputText : string = "temo";
  showDiv: boolean = true;


  isLoggedIn: boolean = true;
  isLoggedout: boolean=false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
