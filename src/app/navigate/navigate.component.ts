import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {navMap} from '../app.config';
@Component({selector: 'app-navigate', templateUrl: './navigate.component.html', styleUrls: ['./navigate.component.css']})
export class NavigateComponent implements OnInit {
  // @Input()sourceName : string;
  debugger;
  @Input()selectedOption : any;
  @Input()resultSet: any;
  constructor(private router : Router) {}

  ngOnInit() {}

  next() {
    debugger;
     console.log('navigate component input:', this.resultSet);
    this.selectedOption.jumpTo && this
      .router
      .navigate(['generic1', this.selectedOption.jumpTo]);
  }
}
