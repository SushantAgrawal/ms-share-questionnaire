import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {MsShareService} from './ms-share.service';
import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {Question1Component} from './question1/question1.component';
import {Question2Component} from './question2/question2.component';
import {ROUTES} from './app.routes';
import {
  // MdButtonModule,
  MdCheckboxModule,
  MdRadioModule,
  MdCardModule,
  MdListModule,
  MdGridListModule,MatCardModule
} from '@angular/material';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import { ScreeningQuestionsComponent } from './screening-questions/screening-questions.component';
import {Question4Component} from './question4/question4.component';
import {Question3Component} from './question3/question3.component';
import { WelcomeaComponent } from './welcomea/welcomea.component';
import { WelcomebComponent } from './welcomeb/welcomeb.component';
import { WelcomecComponent } from './welcomec/welcomec.component';
import { Generic1Component } from './generic1/generic1.component';
import { Q1aComponent } from './q1a/q1a.component';
import { Q1bComponent } from './q1b/q1b.component';
import { Q3Component } from './q3/q3.component';
import { NavigateComponent } from './navigate/navigate.component';
// import { Generic1Component } from './generic1/generic1.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    Question1Component,
    Question2Component,
    Question3Component,
    Question4Component,
    WelcomeaComponent,
    WelcomebComponent,
    WelcomecComponent,
    // GenericaComponent,
    Q1aComponent,
    Q1bComponent,
    Q3Component,
    Generic1Component,
    NavigateComponent,
    ScreeningQuestionsComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(ROUTES, {useHash: true}),HttpModule,
    // MdButtonModule,
    MdGridListModule,
    MdCheckboxModule,
    MdRadioModule,
    MdCardModule,
    MdListModule,
    AngularMaterialModule,
    MatCardModule
  ],
  providers: [MsShareService],
  bootstrap: [AppComponent]
})
export class AppModule {}
