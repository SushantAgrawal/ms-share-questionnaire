import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {navMap} from '../app.config';
@Component({selector: 'app-generic1', templateUrl: './generic1.component.html', styleUrls: ['./generic1.component.css']})
export class Generic1Component implements OnInit {
  sourceName : string;
  selectedOption : any;
  sourceObject : any;
  descr1 : string;
  descr2 : string;
  constructor(private router : Router, private route : ActivatedRoute) {
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

  ngOnInit() {}

  next() {
    if(this.selectedOption.options){
      this
      .router
      .navigate(['generic1', this.selectedOption.jumpTo]);
    } else if(this.selectedOption.sub){
      this
      .router
      .navigate(['generic1', this.selectedOption.jumpTo]);
    }
    
  }

  change(event) {
    this.selectedOption = event.value;
  }
}
