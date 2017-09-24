import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {navigationMap} from '../app.config';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  doRouting(){
    this.router.navigate([navigationMap['q1:a:0']]);
  }
}
