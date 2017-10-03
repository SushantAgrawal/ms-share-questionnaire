import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {navMap} from '../app.config';
@Component({
  selector: 'app-welcomea',
  templateUrl: './welcomea.component.html',
  styleUrls: ['./welcomea.component.css']
})
export class WelcomeaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  next(){
    this.router.navigate(['generic1','q1a']);
  }
}
