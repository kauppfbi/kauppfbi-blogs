import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyGreeterComponent } from './fancy-greeter.component';



@NgModule({
  declarations: [
    FancyGreeterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FancyGreeterComponent
  ]
})
export class FancyGreeterModule { }
