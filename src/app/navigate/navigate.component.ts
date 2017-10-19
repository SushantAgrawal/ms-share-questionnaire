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

// this.spltUrl = this.router.url.split('/')[this.router.url.split('/').length
// - 1]; let NextJumpTo: any; let objIndex = this.quetionNo.findIndex(obj => obj
// == this.spltUrl); if (objIndex != -1) {   NextJumpTo = this.getNextJump(); }
// else {   NextJumpTo =this.selectedOption.jumpTo; } if (typeof NextJumpTo !=
// 'undefined') {   let prevIndex = this.previousUrl.findIndex(obj => obj ==
// this.spltUrl);   if (prevIndex == -1) { this.previousUrl.push(this.spltUrl);
// } } NextJumpTo && this   .router .navigate(['generic1', NextJumpTo]) let
// previousJump = this.previousUrl[this.previousUrl.length - 1] this.previousUrl
// = this.previousUrl.splice(0, this.previousUrl.length - 1); this.spltUrl =
// this.router.url.split('/')[this.router.url.split('/').length - 1]; let
// objIndex = this.quetionNo.findIndex(obj => obj == this.spltUrl); if (objIndex
// > 0) {   let index1 = this.AllQuestionAns.findIndex(o => o.jumpTo ==
// this.spltUrl);   this.res = this.AllQuestionAns[index1];
// this.updateArray(this.res, this.resultSet) } previousJump && this   .router
// .navigate(['generic1', previousJump]) getNextJump() {   let NextJumpTo: any;
// let index: any;   index = 0;   if (this.resultSet.length != 0) {     for (let
// entry of this.resultSet) { index = index + 1;       if (typeof entry.jumpTo
// != 'undefined') {         if (this.GetIndexOfQx(entry.jumpTo) == -1) {
// NextJumpTo = entry.jumpTo;           break;         }       }     } //
// this.res = this.resultSet[index];     this.resultSet.splice(0, index);  }
// else { NextJumpTo = this.selectedOption.jumpTo;   }   NextJumpTo = NextJumpTo
// ? NextJumpTo : (this.navMap["q3"]["jumpTo"]);   return NextJumpTo; }
// GetIndexOfQx(qx_code: any) {   let objIndex = this.resultSet.findIndex(obj =>
// obj.qx_code == qx_code);   return objIndex } updateArray(value: responses,
// arr: responses[]) {   let objIndex = arr.findIndex(obj => obj.qx_code ==
// value.qx_code);   if (objIndex == -1) {   this.res = {       qx_code:
// value.qx_code, qx_text: value.qx_text, answer_text: value.answer_text,
// answer_text_score: value.answer_text_score, jumpTo: value.jumpTo     }; let
// pushIndex = this.sortedIndex(arr, this.res);    arr.splice(pushIndex, 0,
// this.res);   } else { arr[objIndex].answer_text = value.answer_text;
// arr[objIndex].answer_text_score = value.answer_text_score;
// arr[objIndex].jumpTo = value.jumpTo;     arr[objIndex].qx_text =
// value.qx_text;   } } sortedIndex(array, value) {   var low = 0,     high =
// array.length;   while (low < high) {     var mid = low + high >>> 1;     if
// (array[mid].qx_code < value.qx_code) low = mid + 1;     else high = mid;   }
// return low; }