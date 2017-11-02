import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { navMap } from '../app.config';
import { MsShareService } from '../ms-share.service';
import * as _ from "lodash";
import 'hammerjs';

@Component({ selector: 'app-generic1', templateUrl: './generic1.component.html', styleUrls: ['./generic1.component.css'] })

export class Generic1Component implements OnInit {
  pageName: string;
  pageObject: any;
  selectedOption: any;
  showTicks = true;
  thumbLabel = true;
  autoTicks = false;
  ddlCount: any[] = [];
  ddlYearsOption: any[] = [];
  ddlMonthOption: any[] = [];
  showTextBox = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private msShareService: MsShareService) {
    this.tweakNavMap();
    activatedRoute
      .params
      .subscribe(param => {
        param.pageName && (this.pageName = param.pageName);
        this.pageObject = navMap[this.pageName];
        this.pageObject.isMultiOptions && this.prepareMultiOptions();
        this.showPage();
      });
  }
  tweakNavMap() {
    _
      .keys(navMap)
      .forEach(function (key) {
        let q = navMap[key];
        if (q.patientConcerns) {
          q.type = 'patientConcerns'
        } else if (q.options) {
          q.type = 'options';
        } else if (q.header) {
          q.type = 'header'
        } else if (q.section) {
          q.type = 'section'
        } else if (q.scale) {
          q.type = 'scale'
        } else if (q.relapses) {
          q.type = 'relapses'
        } else {
          q.type = 'table'
        }
      });
  }
  showPage() {
    this.showTextBox = false;
    let options = navMap[this.pageName].options;
    let scale = navMap[this.pageName].scale;
    let sub = this.pageObject.sub;
    let relapses = this.pageObject.relapses;
    let patientConcerns = this.pageObject.patientConcerns;
    let commonOptions = this.pageObject.commonOptions;
    sub && commonOptions && sub.forEach(x => {
      let toBeCloned = Object.assign([], x.options, commonOptions);
      if ((!x.options) || (x.options.length == 0)) {
        x.options = _.cloneDeep(toBeCloned);
      }
    });
    this.selectedOption = options && options.find(x => x.checked);

    if (patientConcerns) {
      options
        .forEach(x => {
          if (x.TextBox) {
            this.showTextBox = x.checked;
          }
        });     
    }
    this.ddlCount = relapses ? _.range(this.pageObject.value) : 0;
    let d = new Date();
    let year = d.getFullYear();
    //let
    this.ddlYearsOption = _.range(2012, 2018, 1);
    this.ddlMonthOption = _.range(1, 13);
  }

  ngOnInit() { 
   /*  debugger;
    this.msShareService.httpGet('allQuestionnaire', [
      {
        name: 'pom_id',
        value: '82043'
      }
    ]);

this.msShareService.filterOn('allQuestionnaire').subscribe(d => {
        console.log(d);
      })  */
  }

  change(event) {
    let options: any[] = this.pageObject.options;
    options && options.forEach(x => x.checked = false);
    let sub = this.pageObject.sub;
    if (sub) {
      //in html template name captures the index
      let index = +event.source.name;
      sub[index]
        .options
        .forEach(x => x.checked = false); //to reset the already checked radio button
    }
    let scale: any = this.pageObject.scale;
    let relapses = this.pageObject.relapses;
    //scale && scale.forEach(x => x.checked = false);       

    this.selectedOption = (scale || relapses) ? event : event.value;
    this.selectedOption.checked = true;
    this.selectedOption.pageName = this.pageName;
    this.ddlCount = relapses ? _.range(event.value) : 0;
    //debugger;
    if (scale || relapses) {
      navMap[this.pageName].value = event.value;
      this.selectedOption.jumpTo = navMap[this.pageName].jumpTo;
    }
    this.pageObject.isMultiOptions && this.prepareMultiOptions();//isMultiOptions true means q3 
  }
  changeDDl(event, id, placeholder) {
    // this.selectedOption.jumpTo = navMap[this.pageName].jumpTo;
    if (placeholder == "Year") this.pageObject.relapsesYear[id] = event.value;
    if (placeholder == "Month") this.pageObject.relapsesMonth[id] = event.value;
  }
  changeCheckBox(event) {
    //debugger;
    let options = navMap[this.pageName].options;

    let TextBox = event.source.value.TextBox;
    if (TextBox) {
      this.showTextBox = event.checked;
    }
  }

  prepareMultiOptions() {
    navMap['multiOptions'] = [];
    screen[this.pageObject.screenPage] = [];
    this
      .pageObject
      .sub
      .forEach(x => {
        if (x.options[0].checked) {
          this
          screen[this.pageObject.screenPage].push(x.options[0]);
        }
      });
  }
  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 1;
}