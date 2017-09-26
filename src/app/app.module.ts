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
  MdButtonModule,
  MdCheckboxModule,
  MdRadioModule,
  MdCardModule,
  MdListModule,
  MdGridListModule
} from '@angular/material';
import {Question4Component} from './question4/question4.component';
import {Question3Component} from './question3/question3.component';
import { WelcomeaComponent } from './welcomea/welcomea.component';
import { WelcomebComponent } from './welcomeb/welcomeb.component';
import { WelcomecComponent } from './welcomec/welcomec.component';

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
    WelcomecComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(ROUTES, {useHash: true}),HttpModule,
    MdButtonModule,
    MdGridListModule,
    MdCheckboxModule,
    MdRadioModule,
    MdCardModule,
    MdListModule
  ],
  providers: [MsShareService],
  bootstrap: [AppComponent]
})
export class AppModule {}