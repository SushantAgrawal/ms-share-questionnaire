import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MsShareService } from '../ms-share.service';
import { navMap, transitArray, pagesStack } from '../app.config';
import * as _ from "lodash";
import 'hammerjs';

@Component({ selector: 'app-navigate', templateUrl: './navigate.component.html', styleUrls: ['./navigate.component.css'] })
export class NavigateComponent implements OnInit {
  @Input() selectedOption: any;
  @Input() pageName: string;
  @Input() pageObject: any;

  pointer: number = 0;
  shiftOption: any;

  constructor(private router: Router, private location: Location, private msShareService: MsShareService) { }

  ngOnInit() { }

  next() {
    navMap['saveData'] = [];
    let jumpTo;
    let sex = this.msShareService.get('queryParams').Gender || 'male';
    if (this.pageObject.isMultiOptions && this.pageObject.screenPage == 3) {
      _.forEach(screen, function (value) {
        navMap['multiOptions'] = _.concat(navMap['multiOptions'], value);
      });

    }
    let multiOptions = navMap['multiOptions'];
    if (transitArray.includes(this.pageName)) {
      if (this.pageObject.isMultiOptions && this.pageObject.screenPage != null) {
        jumpTo = this.pageObject.jumpTo;
      }

      if (!jumpTo) {
        if (multiOptions && multiOptions.length > 0) {
          this.shiftOption = multiOptions.shift();
          jumpTo =
            this.shiftOption.jumpTo;
        } else {
          if (this.pointer < (pagesStack.length - 1)) {
            this
              .location
              .forward();
            this.pointer++;
          } else {
            jumpTo = 'q21';
          }
        }
      }
    } else if (this.selectedOption) {
      let isFunc = _.isFunction(this.selectedOption.jumpTo);
      jumpTo = isFunc
        ? this
          .selectedOption
          .jumpTo(sex)
        : this.selectedOption.jumpTo;
    } else if (this.pageObject.jumpTo) { //default one when no options are selected
      let isFunc = _.isFunction(this.pageObject.jumpTo);
      jumpTo = isFunc
        ? this
          .pageObject
          .jumpTo(sex)
        : this.pageObject.jumpTo;
    }

    if (jumpTo) {
      if (!pagesStack.includes(this.pageName)) {
        pagesStack
          .push(this.pageName);
      }
      this.pointer = pagesStack.length - 1;
      this.saveData();
      this
        .router
        .navigate(['generic1', jumpTo]);
    }
  }

  previous() {
    let page = this.pageName;
    if (transitArray.includes(page)) {
      _.forEach(screen, function (value) {
        // navMap['multiOptions'].splice(0, 0, _.find(value, ['jumpTo', page]));
        value.forEach(x => {
          if (x.jumpTo == page) {
            this
            navMap['multiOptions'].splice(0, 0, x);
          }
        });
      });
    }

    if (this.pointer > 0) {
      this.pointer--;
    }
    // let pageIndex = pagesStack.indexOf(this.pageName); //_.findIndex(pagesStack, this.pageName);
    // let previousPage = (pageIndex ==-1)?pagesStack[pagesStack.length - 1]:pagesStack[pageIndex - 1];
    let previousPage = _.last(pagesStack);
    pagesStack.pop();
    this
      .router
      .navigate(['generic1', previousPage]);

    /*
    this
      .location
      .back();*/
  }

  saveData() {

    let objData: any;
    let options = this.pageObject.options;
    let scale = this.pageObject.scale;
    let sub = this.pageObject.sub;
    let relapses = this.pageObject.relapses;
    let patientConcerns = this.pageObject.patientConcerns;
    let answer_options: any[] = [];
    let answer_options_score: any[] = [];
    let answer_text: any[] = [];
    let answer_text_score: any[] = [];

    options && options.forEach(y => {
      answer_options.push(y.text);
      answer_options_score.push(y.score);
      if (y.checked) {
        answer_text.push(y.text);
        answer_text_score.push(y.score);
      }
    })
    options && this.populateData(this.pageObject.qx_code, this.pageObject.text, answer_options, answer_options_score, answer_text, answer_text_score);


    sub && sub.forEach(x => {
      answer_options = [];
      answer_options_score = [];
      answer_text = [];
      answer_text_score = [];
      x.options.forEach(y => {
        answer_options.push(y.text);
        answer_options_score.push(y.score);
        if (y.checked) {
          answer_text.push(y.text);
          answer_text_score.push(y.score);
        }
      })
      this.populateData(x.qx_code, x.text, answer_options, answer_options_score, answer_text, answer_text_score);
    });
  }

  populateData(qx_code: any, text: any, answer_options: any[], answer_options_score: any[], answer_text: any[], answer_text_score: any[]) {
    let objData: any;
    objData = {
      "qx_code": qx_code,
      "qx_text": text,
      "answer_options": answer_options,
      "answer_options_score": answer_options_score,
      "answer_text": answer_text,
      "answer_text_score": answer_text_score,
      "section": this.pageObject.section,
      "edss": this.pageObject.edss
    };
    navMap['saveData'].push(objData);
  }
}