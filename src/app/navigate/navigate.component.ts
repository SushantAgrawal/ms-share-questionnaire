import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {navMap, transitArray} from '../app.config';

@Component({selector: 'app-navigate', templateUrl: './navigate.component.html', styleUrls: ['./navigate.component.css']})
export class NavigateComponent implements OnInit {
  @Input()selectedOption : any;
  @Input()pageName : string;
  @Input()pageObject : any;

  questionsStack : any[] = [];

  constructor(private router : Router) {}

  ngOnInit() {}

  next() {
    if (transitArray.includes(this.pageName)) {
      if (navMap['multiOptions'] && navMap['multiOptions'].length > 0) {
        this.selectedOption = navMap['multiOptions'].shift();
      } else {
        this.selectedOption = {
          pageName: 'q3',
          jumpTo: 'q21'
        };
      }
    }

    let jumpTo = this.selectedOption && this.selectedOption.jumpTo;
    this.selectedOption && this
      .questionsStack
      .push(this.selectedOption);
    jumpTo && this
      .router
      .navigate(['generic1', jumpTo]);
  }

  previous() {
    let option;
    (this.questionsStack.length > 0) && (option = this.questionsStack.pop());
    option && (this.selectedOption = option);
    let jumpTo = option && option.pageName;
    jumpTo && this
      .router
      .navigate(['generic1', jumpTo]);
  }
}