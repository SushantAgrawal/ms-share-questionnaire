import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { navMap } from '../app.config';
import { responses } from '../responses'

@Component({ selector: 'app-navigate', templateUrl: './navigate.component.html', styleUrls: ['./navigate.component.css'] })
export class NavigateComponent implements OnInit {
  // @Input()sourceName : string;
  // debugger;
  @Input() selectedOption: any;
  //saby
  @Input() resultSet: any;


  // saby
  constructor(private router: Router) { }

  ngOnInit() { }

  next() {
    let NextJumpTo: any;
    NextJumpTo = this.getNextJump();
    // console.log('navigate component input:', this.resultSet);
    /* this.selectedOption.jumpTo && this
       .router
       .navigate(['generic1', this.selectedOption.jumpTo]);*/
    NextJumpTo && this
      .router
      .navigate(['generic1', NextJumpTo])
  }
  getNextJump() {
    let NextJumpTo: any;
    let index: any;
    index=0;

    if (this.resultSet.length != 0) {
      for (let entry of this.resultSet) {
        if (typeof entry.jumpTo != 'undefined') {
          if (this.GetIndexOfQx(entry.jumpTo) == -1) {
            NextJumpTo = entry.jumpTo;
             index = index + 1;
            break;
          }
        }
       
      }
      this.resultSet.splice(0, index);
    } else {
      NextJumpTo = this.selectedOption.jumpTo;
    }

    /*for (let entry of this.resultSet) {
      if (entry.qx_code.includes("q3") && typeof entry.jumpTo != 'undefined') {
        if (this.GetIndexOfQx(entry.jumpTo) == -1) {
          NextJumpTo = entry.jumpTo;
          break;
        }
      }
    }*/

    return NextJumpTo;
  }
  GetIndexOfQx(qx_code: any) {
    let objIndex = this.resultSet.findIndex(obj => obj.qx_code == qx_code);
    return objIndex
  }


}
