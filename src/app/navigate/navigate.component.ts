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
    let option,jumpTo;
    if (transitArray.includes(this.pageName)) {
      if (navMap['multiOptions'] && navMap['multiOptions'].length > 0) {
        option = navMap['multiOptions'].shift();
      } else {
        option = {
          pageName: 'q3',
          jumpTo: 'q21'
        }
      }
    }
    if(option){
      jumpTo = option.jumpTo;
    } else{
      jumpTo = this.selectedOption.jumpTo
    }
    this.pagesStack.push(this.pageName);
    this.router.navigate(['generic1',jumpTo]);    
  }

  previous() {
    let jumpTo;
    (this.pagesStack.length > 0) && (jumpTo = this.pagesStack.pop());
    jumpTo && this
      .router
      .navigate(['generic1', jumpTo]);
  }
}