import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'kauppfbi-blogs-fancy-greeter',
  template: `
    <p>Nice to meet you, {{ name }}!</p>
    <p>Today is the {{ time }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FancyGreeterComponent implements OnInit {
  time = '';
  @Input() name!: string;

  ngOnInit(): void {
    this.time = moment().format('DD.MM.YYYY');
  }
}
