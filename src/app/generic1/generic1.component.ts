import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { navMap } from '../app.config';
import { responses } from '../responses'

@Component({ selector: 'app-generic1', templateUrl: './generic1.component.html', styleUrls: ['./generic1.component.css'] })

export class Generic1Component implements OnInit {
  sourceName: string;
  selectedOption: any;
  sourceObject: any;
  descr1: string;
  descr2: string;
  results: responses[] = [];
  res: responses;
  q3ResultSet: responses[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {

    route
      .params
      .subscribe(param => {
        param.sourceName && (this.sourceName = param.sourceName);
        this.doInit();
      });
  }

  doInit() {
    this.sourceObject = navMap[this.sourceName];
    this.descr1 = this.sourceObject.descr1;
    this.descr2 = this.sourceObject.descr2;
  }

  ngOnInit() { }

  next() {

    if (this.selectedOption.options) {
      this
        .router
        .navigate(['generic1', this.selectedOption.jumpTo]);
    } else if (this.selectedOption.sub) {
      this
        .router
        .navigate(['generic1', this.selectedOption.jumpTo]);
    }

  }

  change(event) {
    // saby

    if (this.router.url.includes('q3')) {
      let objIndex = this.results.findIndex(obj => obj.qx_code == event.value.qx_code);
      if (objIndex == -1) {
        this.res = {
          qx_code: event.value.qx_code, qx_text: event.value.qx_text, answer_text: event.value.text,
          answer_text_score: event.value.score, jumpTo: event.value.jumpTo
        };        
       let pushIndex=  this.sortedIndex(this.results,this.res);
        // '0',event.value.qx_text,event.value.text,event.value.score];// new responses('0',event.value.qx_text,event.value.text,event.value.score);   
        //this.results.push(this.res);
        this.results.splice(pushIndex, 0, this.res);
      } else {
        this.results[objIndex].answer_text = event.value.text;
        this.results[objIndex].answer_text_score = event.value.score;
        this.results[objIndex].jumpTo = event.value.jumpTo;
        this.results[objIndex].qx_code = event.value.qx_text;
      }
    } else {

    }
    // saby
    this.selectedOption = event.value;
    //this.selectedOption.push(event.value);
  }

  sortedIndex(array, value) {
    var low = 0,
      high = array.length;

    while (low < high) {
      var mid = low + high >>> 1;
      if (array[mid].qx_code < value.qx_code) low = mid + 1;
      else high = mid;
    }
    return low;
  }


}
