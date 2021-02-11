import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-candidates',
  templateUrl: './jobs-candidates.component.html',
  styleUrls: ['./jobs-candidates.component.css']
})
export class JobsCandidatesComponent implements OnInit {
candidatesArray: string[]=['nino','nini','ana'];
shoNothing:boolean=true;
showNino:boolean=false;
showMegi:boolean=false;


  constructor() { }

  ngOnInit(): void {
  }

}
