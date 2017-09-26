import {RouterModule, Routes} from '@angular/router';
import {WelcomeaComponent} from './welcomea/welcomea.component';
import {WelcomebComponent} from './welcomeb/welcomeb.component';
import {WelcomecComponent} from './welcomec/welcomec.component';
import {Question1Component} from './question1/question1.component';
import {Question2Component} from './question2/question2.component';
import { Question4Component } from './question4/question4.component';
import { Question3Component } from './question3/question3.component';

export const ROUTES : Routes = [
    {
      path: '',
      redirectTo: 'welcome',
      pathMatch: 'full'
    }, {
      path: 'welcomea',
      component: WelcomeaComponent
    }, {
      path: 'welcomeb',
      component: WelcomebComponent
    }, {
      path: 'welcomec',
      component: WelcomecComponent
    },
    
    {
      path: 'question1',
      component: Question1Component
    }, {
      path: 'q1b',
      component: Question2Component
    }, {
      path: 'q1c',
      component: Question3Component
    }, {
      path: 'q2',
      component: Question4Component
    }
  ];