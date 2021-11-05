import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'kauppfbi-blogs-simple-greeter',
  template: ` <p>Nice to meet you, {{ name }}!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleGreeterComponent {
  @Input() name!: string;
}
