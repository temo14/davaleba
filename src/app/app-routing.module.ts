import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankClientsComponent } from './bank-clients/bank-clients.component';
import { HomeComponent } from './home/home.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyJobsComponent } from './my-jobs/my-jobs.component';
import { PliusMinusNumbersComponent } from './plius-minus-numbers/plius-minus-numbers.component';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
  {path:'second-page',component:SecondPageComponent},
  {path:'home',component:HomeComponent},
  {path:'clients',component:BankClientsComponent},
  {path:'plusminus',component:PliusMinusNumbersComponent},
  {path:'gallery',component:MyImageComponent},
  {path:'jobs',component:MyJobsComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
