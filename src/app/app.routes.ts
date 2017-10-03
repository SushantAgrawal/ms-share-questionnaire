import {RouterModule, Routes} from '@angular/router';
// import {}
import {WelcomeaComponent} from './welcomea/welcomea.component';
import {WelcomebComponent} from './welcomeb/welcomeb.component';
import {WelcomecComponent} from './welcomec/welcomec.component';
import {Generic1Component} from './generic1/generic1.component';
import {Q1aComponent} from './q1a/q1a.component';
import {Q3Component} from './q3/q3.component';
import {Question1Component} from './question1/question1.component';
import {Question2Component} from './question2/question2.component';
import { Question4Component } from './question4/question4.component';
import { Question3Component } from './question3/question3.component';
import { ScreeningQuestionsComponent } from './screening-questions/screening-questions.component';
//ScreeningQuestionsComponent

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
      path: 'generic1/:sourceName', pathMatch:'full',
      component: Generic1Component
    },
    {
      path: 'q1a',
      component: Q1aComponent
    },
    {
      path: 'q3',
      component: Q3Component
    }, {
      path: 'q1b',
      component: Question2Component
    }, {
      path: 'q1c',
      component: Question3Component
    }, {
      path: 'q2',
      component: Question4Component
    }, {
      path: 'q3',
      component: ScreeningQuestionsComponent
    }
  ];