import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleGreeterComponent } from './simple-greeter.component';



@NgModule({
  declarations: [
    SimpleGreeterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SimpleGreeterComponent
  ]
})
export class SimpleGreeterModule { }
