import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {navMap} from '../app.config';
import {MsShareService} from '../ms-share.service';
@Component({selector: 'app-q1a', templateUrl: './q1a.component.html', styleUrls: ['./q1a.component.css']})
export class Q1aComponent implements OnInit {
  selectedOption:any;
  source:string;
  constructor(private msShareService : MsShareService, private router : Router) {}
  ngOnInit() {
    this.source="q1b";
  }
  next() {
    this
    .router
    .navigate([this.selectedOption.jumpTo]);
  }

  rb(event, i) {
    this.selectedOption = event.value;    
    console.log(i);
  }

}
