import { Component } from '@angular/core';

@Component({
  selector: 'kauppfbi-blogs-root',
  template: `<kauppfbi-blogs-simple-greeter [name]="name"></kauppfbi-blogs-simple-greeter>`,
})
export class AppComponent {
  name = 'Duke';
}
