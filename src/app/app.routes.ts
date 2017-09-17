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
      path: 'question1',
      component: Question1Component
    }, {
      path: 'question2',
      component: Question2Component
    }
  ];