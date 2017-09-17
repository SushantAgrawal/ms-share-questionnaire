import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MsShareService} from './ms-share.service';
import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {Question1Component} from './question1/question1.component';
import {Question2Component} from './question2/question2.component';
import {ROUTES} from './app.routes';

@NgModule({
  declarations: [
    AppComponent, WelcomeComponent, Question1Component, Question2Component
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [MsShareService],
  bootstrap: [AppComponent]
})
export class AppModule {}