import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {Question1Component} from './question1/question1.component';
import {Question2Component} from './question2/question2.component';

export const ROUTES : Routes = [
    {
      path: '',
      redirectTo: 'welcome',
      pathMatch: 'full'
    }, {
      path: 'welcome',
      component: WelcomeComponent
    }, {
      path: 'q1a',
      component: Question1Component
    }, {
      path: 'q1b',
      component: Question2Component
    }, {
      path: 'q1c',
      component: Question2Component
    }, {
      path: 'q3',
      component: Question2Component
    }
  ];