import { Component, OnInit } from '@angular/core';
import { navMap } from './app.config';
import { MsShareService } from './ms-share.service';
import * as _ from "lodash";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  patientId: any;
  isHide:boolean;
  constructor(private msShareService: MsShareService) {
    this.patientId = this.msShareService.get('queryParams').patientid || '82043';//82043
    this.isHide=false;
  }
  ngOnInit() {

    let pageObj: any;
    _.forEach(navMap, function (value, key) {
      pageObj = navMap[key];
      let sub = pageObj.sub;
      let relapses = pageObj.relapses;
      let patientConcerns = pageObj.patientConcerns;
      let commonOptions = pageObj.commonOptions;
      sub && commonOptions && sub.forEach(x => {
        let toBeCloned = Object.assign([], x.options, commonOptions);
        if ((!x.options) || (x.options.length == 0)) {
          x.options = _.cloneDeep(toBeCloned);
        }
      });
    });
    this.msShareService.httpGet('questionaires', [
      {
        name: 'pom_id',
        value: this.patientId
      }
    ]);
    this.msShareService.filterOn('questionaires').subscribe(d => {
  
      let responses = d.data.questionaires['0'].responses;

      _.forEach(navMap, function (value, key) {
        let options = navMap[key].options;
        pageObj = navMap[key];
        let sub = pageObj.sub;
        let obj = _.find(responses, ['qx_code', value.qx_code]);
        if (obj) {
          options && options.forEach(x => {
            if (x.text == obj.answer_text) {
              x.checked = true;
            }
          })
        }

        let commonOptions = pageObj.commonOptions;
        sub && sub.forEach(y => {
          obj = _.find(responses, ['qx_code', y.qx_code]);
          if (obj) {
            y.options.forEach(x => {
              if (x.text == obj.answer_text) {
                x.checked = true;
              }
            })
          }
        });
      })
      /*
      _.forEach(this.responses, function (value, key) {
        debugger;
        let obj = _.find(navMap, ['qx_code', value.qx_code]);
        if (obj) {         
          obj.options.forEach(x => {
            if(x.text== value.answer_text)
              {
                x.checked=true;
              }
          })

        } 
      });*/
      this.isHide=true;
    })

  }

}
