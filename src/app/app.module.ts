import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MsShareService} from './ms-share.service';
import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {Question1Component} from './question1/question1.component';
import {Question2Component} from './question2/question2.component';
import {ROUTES} from './app.routes';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdRadioModule,MdCardModule,MdListModule,MatRadioModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import { Question4Component } from './question4/question4.component';
import { Question3Component } from './question3/question3.component';
import { ScreeningQuestionsComponent } from './screening-questions/screening-questions.component';

@NgModule({
  declarations: [
    AppComponent, WelcomeComponent, Question1Component, Question2Component, Question3Component, Question4Component, ScreeningQuestionsComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(ROUTES, {useHash: true}),MatRadioModule,MdButtonModule,MdGridListModule, MdCheckboxModule,MdRadioModule,MdCardModule,MdListModule
  ],
  providers: [MsShareService],
  bootstrap: [AppComponent]
})
export class AppModule {}