import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MyCompComponent } from './my-comp/my-comp.component';
import { NumbersCheckComponent } from './numbers-check/numbers-check.component';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';
import { MyNumbersComponent } from './my-numbers/my-numbers.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { PliusMinusNumbersComponent } from './plius-minus-numbers/plius-minus-numbers.component';
import { MyNamesComponent } from './my-names/my-names.component';
import { NewCalculatorComponent } from './new-calculator/new-calculator.component';
import { SelectComponentComponent } from './select-component/select-component.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyJobsComponent } from './my-jobs/my-jobs.component';
import { JobsCandidatesComponent } from './jobs-candidates/jobs-candidates.component';
import { JobsVacanciesComponent } from './jobs-vacancies/jobs-vacancies.component';
import { BankClientsComponent } from './bank-clients/bank-clients.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MyCompComponent,
    NumbersCheckComponent,
    MyCalculatorComponent,
    MyNumbersComponent,
    SecondPageComponent,
    PliusMinusNumbersComponent,
    MyNamesComponent,
    NewCalculatorComponent,
    SelectComponentComponent,
    MyImageComponent,
    MyJobsComponent,
    JobsCandidatesComponent,
    JobsVacanciesComponent,
    BankClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
