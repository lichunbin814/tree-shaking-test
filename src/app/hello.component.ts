import { Component, Input } from '@angular/core';
import { TestComponentService } from './test-component.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
  providers: [TestComponentService],
})
export class HelloComponent {
  @Input() name: string;
}
