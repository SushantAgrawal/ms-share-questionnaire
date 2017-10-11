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
  AllQuestionAns: responses[] = [];

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
      this.updateArray(event,this.results);      
    }
     this.updateArray(event,this.AllQuestionAns); 
    // saby
    this.selectedOption = event.value;
    //this.selectedOption.push(event.value);
  }

  updateArray(event,arr: responses[])
  {
    let objIndex = arr.findIndex(obj => obj.qx_code == event.value.qx_code);
      if (objIndex == -1) {
        this.res = {
          qx_code: event.value.qx_code, qx_text: event.value.qx_text, answer_text: event.value.text,
          answer_text_score: event.value.score, jumpTo: event.value.jumpTo
        };        
       let pushIndex=  this.sortedIndex(arr,this.res);        
        arr.splice(pushIndex, 0, this.res);
      } else {
        arr[objIndex].answer_text = event.value.text;
        arr[objIndex].answer_text_score = event.value.score;
        arr[objIndex].jumpTo = event.value.jumpTo;
        arr[objIndex].qx_text = event.value.qx_text;
      }
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
