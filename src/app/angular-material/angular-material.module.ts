import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdRadioModule, MdButtonModule,MatSelectModule,MatCheckboxModule,MatInputModule} from '@angular/material';
import {MatDialogModule,MatProgressSpinnerModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,MatProgressSpinnerModule, MdRadioModule, MdButtonModule,MatDialogModule,MatSelectModule,BrowserAnimationsModule,MatInputModule,MatCheckboxModule
  ],
  exports: [
    MdRadioModule, MdButtonModule,MatProgressSpinnerModule,MatDialogModule,MatSelectModule,BrowserAnimationsModule,MatInputModule,MatCheckboxModule
  ],
  declarations: []
})
export class AngularMaterialModule {}