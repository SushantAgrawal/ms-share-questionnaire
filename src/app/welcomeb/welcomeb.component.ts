import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navMap, transitArray, pagesStack } from '../app.config';
import { MsShareService } from '../ms-share.service';
import * as _ from "lodash";

@Component({
  selector: 'app-welcomeb',
  templateUrl: './welcomeb.component.html',
  styleUrls: ['./welcomeb.component.css']
})
export class WelcomebComponent implements OnInit {
  patientId: any;

  //responses: any[] = [];
  // pageObj: any;
  constructor(private router: Router, private msShareService: MsShareService) {
    this.patientId = this.msShareService.get('queryParams').patientid || '82043';//82043
  }

  ngOnInit() {
    /*
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
              options.forEach(x => {
                if (x.text == obj.answer_text) {
                  x.checked = true;
                }
              })
            }
    
            let commonOptions = pageObj.commonOptions;
            sub  && sub.forEach(y => {
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
            let obj = _.find(navMap, ['qx_code', value.qx_code]);
            if (obj) {         
              obj.options.forEach(x => {
                if(x.text== value.answer_text)
                  {
                    x.checked=true;
                  }
              })
    
            }        
          });
        })
    */
  }

  next() {
    let pageObj: any;
    let key: any = 'q1a';
    let sex = this.msShareService.get('queryParams').Gender || 'male';
    let dataAvalable: boolean = true;
    let pageJump: any;
    pagesStack.push(key);
    let shiftOption: any;
    navMap['multiOptions'] = [];
    while (key && dataAvalable) {
      let selectedOption: any;
      let jumpTo: any;
      let options = navMap[key].options;
      pageObj = navMap[key];
      let scale = navMap[key].scale;
      let sub = pageObj.sub;
      let relapses = pageObj.relapses;
      let patientConcerns = pageObj.patientConcerns;
      let commonOptions = pageObj.commonOptions;

      if (transitArray.includes(key)) {
        // screening section check
        // fill up screen array
        if (pageObj.screenPage != null) {
          screen[pageObj.screenPage] = [];
          sub
            .forEach(x => {
              if (x.options[0].checked) {
                this
                screen[pageObj.screenPage].push(x.options[0]);
              }
            });
          jumpTo = pageObj.jumpTo;
        }
        if (pageObj.isMultiOptions && pageObj.screenPage == 3) {
          _.forEach(screen, function (value) {
            navMap['multiOptions'] = _.concat(navMap['multiOptions'], value);
          });
        }
        let multiOptions = navMap['multiOptions'];

        if (!jumpTo) {
          if (multiOptions && multiOptions.length > 0) {
            selectedOption = options && options.find(x => x.checked);
            sub && sub.forEach(y => {
              y.options.forEach(x => {
                if (x.checked)
                  selectedOption = x;
              })
            });
            if (!selectedOption) {
              dataAvalable = false;
            } else {
              shiftOption = multiOptions.shift();
              jumpTo = shiftOption.jumpTo;
            }


          } else {
            dataAvalable = false;
            pageJump = "q3.1";
          }
        }
        // Check jumpto has data  
      } else {
        selectedOption = options && options.find(x => x.checked);
        sub && sub.forEach(y => {
          y.options.forEach(x => {
            if (x.checked)
              selectedOption = x;
          })
        });
        if (selectedOption) {
          jumpTo = selectedOption.jumpTo;
        } else {
          dataAvalable = false;
        }
      }
      let isFunc = _.isFunction(jumpTo);
      jumpTo = isFunc
        ? jumpTo(sex)
        : jumpTo;
      pageJump = dataAvalable ? jumpTo : key;
      key = jumpTo;

      if (dataAvalable)
        pagesStack.push(key);

    }
    this.router.navigate(['generic1', pageJump]);
  }
}
