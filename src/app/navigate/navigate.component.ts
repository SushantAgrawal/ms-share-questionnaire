import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {navMap, transitArray} from '../app.config';

@Component({selector: 'app-navigate', templateUrl: './navigate.component.html', styleUrls: ['./navigate.component.css']})
export class NavigateComponent implements OnInit {
  @Input()selectedOption : any;
  @Input()pageName : string;
  @Input()pageObject : any;

  questionsStack : any[] = [];
  pagesStack : string[] = [];

  constructor(private router : Router) {}

  ngOnInit() {}

  next() {
    let jumpTo;
    let multiOptions = navMap['multiOptions'];
    if (this.selectedOption) {
      jumpTo = this.selectedOption.jumpTo
    } else if (transitArray.includes(this.pageName)) {
      if (multiOptions && multiOptions.length > 0) {
        jumpTo = multiOptions
          .shift()
          .jumpTo;
      } else {
        jumpTo = 'q21';
      }
    } else if (this.pageObject.jumpTo) {
      jumpTo = this.pageObject.jumpTo;
    }
    if (jumpTo) {
      this
        .pagesStack
        .push(this.pageName);
      this
        .router
        .navigate(['generic1', jumpTo]);
    }
  }

  previous() {
    let jumpTo;
    (this.pagesStack.length > 0) && (jumpTo = this.pagesStack.pop());
    jumpTo && this
      .router
      .navigate(['generic1', jumpTo]);
  }
}