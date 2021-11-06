import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SimpleGreeterModule } from '@kauppfbi-blogs/greeter';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SimpleGreeterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
