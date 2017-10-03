import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdRadioModule, MdButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MdRadioModule, MdButtonModule
  ],
  exports: [
    MdRadioModule, MdButtonModule
  ],
  declarations: []
})
export class AngularMaterialModule {}