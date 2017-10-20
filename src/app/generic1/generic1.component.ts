import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {navMap} from '../app.config';
import * as _ from "lodash";

@Component({selector: 'app-generic1', templateUrl: './generic1.component.html', styleUrls: ['./generic1.component.css']})

export class Generic1Component implements OnInit {
  pageName : string;
  pageObject : any;
  selectedOption : any;

  constructor(private router : Router, private activatedRoute : ActivatedRoute) {
    this.processNavMap();
    activatedRoute
      .params
      .subscribe(param => {
        param.pageName && (this.pageName = param.pageName);
        this.pageObject = navMap[this.pageName];
        this.pageObject.isMultiOptions && this.prepareMultiOptions();
        this.showPage();
      });
  }
  processNavMap() {    
    _
      .keys(navMap)
      .forEach(function (key) {
        let q = navMap[key];
        if (q.options) {
          q.type = 'options';
        } else if (q.header) {
          q.type = 'header'
        } else if (q.section) {
          q.type = 'section'
        } else {
          q.type = 'table'
        }
      });
  }
  showPage() {
    let options = navMap[this.pageName].options;
    let sub = this.pageObject.sub;
    let commonOptions = this.pageObject.commonOptions;
    sub && commonOptions && sub.forEach(x => {
      let toBeCloned = Object.assign([], x.options, commonOptions);
      if ((!x.options) || (x.options.length == 0)) {
        x.options = _.cloneDeep(toBeCloned);
      }
    });

    let option = options && options.find(x => x.checked);
    option && (this.selectedOption = option);
  }

  ngOnInit() {}

  change(event) {
    let options : any[] = this.pageObject.options;
    options && options.forEach(x => x.checked = false);
    let sub = this.pageObject.sub;
    if (sub) {
      //in html template name captures the index
      let index = +event.source.name;
      sub[index]
        .options
        .forEach(x => x.checked = false); //to reset the already checked radio button
    }
    this.selectedOption = event.value;
    this.selectedOption.checked = true;
    this.selectedOption.pageName = this.pageName;
    this.pageObject.isMultiOptions && this.prepareMultiOptions();
  }

  prepareMultiOptions() {
    navMap['multiOptions'] = [];
    this
      .pageObject
      .sub
      .forEach(x => {
        if (x.options[0].checked) {
          this
          navMap['multiOptions'].push(x.options[0]);
        }
      });
  }
}

// descr1: string; descr2: string; sub2: object; results: responses[] = []; res:
// responses; AllQuestionAns: responses[] = []; UserSelectedAns: Object = {};
// strChecked: boolean = false; show: boolean = false; queryStr: any; spltUrl:
// string; length = 0; header: string; sub6Q1: string; sub6Q: string[] = [];
// this.updateArray(event, this.AllQuestionAns);
// this.SetChangeEvent(event.value, event.value.qx_code); // saby
// this.selectedOption = event.value;   if   (typeof this.GetChangeEvent('q17a')
// != 'undefined' || typeof this.GetChangeEvent('q17b') != 'undefined') {
// if(this.GetChangeEvent('q17a').score > 0 || this.GetChangeEvent('q17b').score
// > 0) {       this.show = true;     } else {       this.show = false;     } }
// } SetChangeEvent(value, id) {   this.UserSelectedAns[id] = value; }
// GetChangeEvent(id) {   return (this.UserSelectedAns[id]); }
// updateArray(event, arr : responses[]) {   let objIndex = arr.findIndex(obj =>
// obj.qx_code == event.value.qx_code);   if (objIndex == -1) {     this.res =
// {       qx_code: event.value.qx_code,       qx_text: event.value.qx_text,
// answer_text: event.value.text,       answer_text_score: event.value.score,
// jumpTo: event.value.jumpTo     };     let pushIndex = this.sortedIndex(arr,
// this.res);     arr.splice(pushIndex, 0, this.res);   } else {
// arr[objIndex].answer_text = event.value.text; arr[objIndex].answer_text_score
// = event.value.score;     arr[objIndex].jumpTo = event.value.jumpTo;
// arr[objIndex].qx_text = event.value.qx_text;   } } sortedIndex(array, value)
// {   let low = 0,     high = array.length;   while (low < high) {     let mid
// = low + high >>> 1;     if (array[mid].qx_code < value.qx_code)       low =
// mid + 1;     else       high = mid;     }   return low; } } deprecated saby
// if (typeof this.sourceObject.sub6 !== 'undefined') { this.header =
// this.sourceObject.header;     for (let entry of this.sourceObject.sub6) {
// this.length = entry.options.length - 1; this.sub6Q1 = entry.options[0].text;
// for (i = 1; i <= this.length; i++) { this.sub6Q[i - 1] =
// entry.options[i].text;       }     }   }   if (typeof
// this.sourceObject.options !== 'undefined') {     for (let option of
// this.sourceObject.options) {       // for first time loding       if
// (option.score == 0) {         this.selectedOption = option;       }       //
// for next loading       let selected = this.GetChangeEvent(option.qx_code);
// if (typeof selected !== 'undefined') {         if (selected.text ===
// option.text) {           option.checked = true;           this.selectedOption
// = selected;         } else {           option.checked = false;         }  } }
//   }   if (typeof this.sourceObject.sub != 'undefined') {     for (let entry
// of this.sourceObject.sub) {       for (let option of entry.options) {
// this.selectedOption = option;         let selected =
// this.GetChangeEvent(option.qx_code);         if (typeof selected !=
// 'undefined') {           if (selected.text == option.text) {
// console.log(selected.qx_code);             console.log(option.text);
// option.checked = true;             this.selectedOption = selected;   } else {
//             option.checked = false;           }         }       }    }   }
// if (typeof this.sourceObject.sub1 != 'undefined') {     for (let entry of
// this.sourceObject.sub1) {       for (let option of entry.options) { let
// selected = this.GetChangeEvent(option.qx_code);         if (typeof selected
// != 'undefined') {           if (selected.text == option.text) {   /*
// console.log(selected.qx_code); console.log(option.text);*/ option.checked =
// true; this.selectedOption = selected;           } else { option.checked =
// false;           }         }       }     }   }   if (typeof
// this.GetChangeEvent('q17a') != 'undefined' || typeof
// this.GetChangeEvent('q17b') != 'undefined') {     if (typeof this.sub2 !=
// 'undefined' && typeof this.sub2[0].options != 'undefined') {       for (let
// option of this.sub2[0].options) {         let selected =
// this.GetChangeEvent(option.qx_code);         if (typeof selected !=
// 'undefined') {           if (selected.text == option.text) { option.checked =
// true;             // bthis.show = true;             if
// (this.GetChangeEvent('q17a').score > 0 || this.GetChangeEvent('q17b').score >
// 0) {               this.show = true;             } this.selectedOption =
// selected;           } else {             option.checked = false; //this.show
// = false;           }         }       }     }   }   if (typeof
// this.sourceObject.sub6 != 'undefined') {     for (let entry of
// this.sourceObject.sub6) {       for (let option of entry.options) {  let
// selected = this.GetChangeEvent(option.qx_code);         if (typeof selected
// != 'undefined') {           if (selected.text == option.text) {
// option.checked = true;             this.selectedOption = selected;       }
// else {             option.checked = false;           }         }  }     }   }
// }