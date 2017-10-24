import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {MsShareService} from '../ms-share.service';
import {navMap, transitArray} from '../app.config';
import * as _ from "lodash";

@Component({selector: 'app-navigate', templateUrl: './navigate.component.html', styleUrls: ['./navigate.component.css']})
export class NavigateComponent implements OnInit {
  @Input()selectedOption : any;
  @Input()pageName : string;
  @Input()pageObject : any;

  pagesStack : string[] = [];
  pointer : number = 0;

  constructor(private router : Router, private location : Location, private msShareService:MsShareService) {}

  ngOnInit() {}

  next() {
    let jumpTo;
    let multiOptions = navMap['multiOptions'];
    if (transitArray.includes(this.pageName)) {
      if (multiOptions && multiOptions.length > 0) {
        jumpTo = multiOptions
          .shift()
          .jumpTo;
      } else {
        if (this.pointer < (this.pagesStack.length - 1)) {
          this
            .location
            .forward();
          this.pointer++;
        } else {
          jumpTo = 'q21';
        }
      }
    } else if (this.selectedOption) {
      jumpTo = this.selectedOption.jumpTo
    } else if (this.pageObject.jumpTo) { //default one when no options are selected
      let sex = this.msShareService.get('queryParams').sex || 'male';
      let isFunc = _.isFunction(this.pageObject.jumpTo);
      jumpTo = isFunc
        ? this
          .pageObject
          .jumpTo(sex)
        : this.pageObject.jumpTo;
    }
    if (jumpTo) {
      this
        .pagesStack
        .push(this.pageName);
      this.pointer = this.pagesStack.length - 1;
      this
        .router
        .navigate(['generic1', jumpTo]);
    }
  }

  previous() {
    // let jumpTo; (this.pagesStack.length > 0) && (jumpTo = this.pagesStack.pop());
    // jumpTo && this   .router   .navigate(['generic1', jumpTo]);
    if (this.pointer > 0) {
      this.pointer--;
    }
    this
      .location
      .back();
  }
}