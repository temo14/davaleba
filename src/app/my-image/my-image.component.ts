import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})
export class MyImageComponent implements OnInit {
  imgSource:string='assets/111.jpg';
  newImage:string="";
  selectValues:string[]=['assets/111.jpg','assets/444.jpg','assets/download.jpg'];

  constructor() { }

  ngOnInit(): void {
  }
changeImage(){
  this.imgSource=this.newImage;
}
changeImageSelect(event : any){
  this.imgSource = event.target.value;
}
}
