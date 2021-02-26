import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-bank-clients',
  templateUrl: './bank-clients.component.html',
  styleUrls: ['./bank-clients.component.css']
})
export class BankClientsComponent implements OnInit {
  errorText: string = "";
  showError: boolean = false;
  genders: string[] = ["Male","Female"];

  clientForm = new FormGroup({
    idControl: new FormControl('') ,
    nameControl: new FormControl(''),
    LastNameControl: new FormControl(''),
    AgeControl: new FormControl(''),
    GenderControl: new FormControl(''),
    depositControl: new FormControl('')

    });
  ClientsArr: any = [
    {id: 1,name:"nika", LastName:"baindurashvili", Age:25, Gender:"male", Deposit : 3000},
    {id: 2,name:"temo", LastName:"magradze", Age:20, Gender:"male", Deposit : 200},
    {id: 3,name:"irina", LastName:"onashvili", Age:24, Gender:"female",Deposit : 560 },
    {id: 4,name:"mari", LastName:"kasradze", Age:26, Gender:"female", Deposit : 2000},
  ]
  constructor() { }

  ngOnInit(): void {
    this.clientForm.patchValue({
      idControl: 5
    });
  }
  wereQartulad(name: string)
  {
    let result = true;
    var Arr = ["ა","ბ","გ","დ","ე","ვ","ზ","თ","ი","კ","ლ","მ","ნ","ო","პ","ჟ","რ","ს","ტ","უ","ფ","ქ","ღ","ყ","შ","ჩ","ც","ძ","წ","ჭ","ხ","ჯ","ჰ"];
  var letters = name.split('');
  
  for(let i = 0; i< letters.length; i++)
  {
    if(Arr.indexOf(letters[i]) == -1)
    {
      result = false;
      break;
    }
  }
  return result;
  }
  saveClient(){
    var formValues = this.clientForm.value;
    var clientId = formValues.idControl;
    var clientName = formValues.nameControl;
    var clientlastName = formValues.LastNameControl;
    var clientAge = formValues.AgeControl;
    var clientGender = formValues.GenderControl;
    var clientdeposit = formValues.depositControl



if(this.wereQartulad(clientName) == false && clientName.length < 10)
{
  this.showError = true;
  this.errorText = "კლიენტის სახელი უნდა შეიცავდეს მხოლოდ ქართულ ასოებს"
}
else if (this.wereQartulad(clientlastName) == false && clientlastName.length > 4 || clientlastName.length < 10)
{
  this.showError = true;
  this.errorText = "გვარი უნდა იყოს ქართულად და იყოს 4 ზე მეტი 10 ზე ნაკლები "
}
else if(clientAge < 18)
{
  this.showError = true;
  this.errorText = "კლიენტის ასაკი უნდა იყოს 18 ზე მეტი"
}

else{
    this.showError = false;
    this.errorText = ""
}
  }}
