import { Component, Input } from '@angular/core';
import { NgxEventService } from './ngx-event/ngx-event.service';

@Component({
  selector: 'hello',
  template: `
  <h1>Hello {{name}}!</h1>
  <button (click)="alert()">trigger event</button>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;

  constructor (
    private eventService: NgxEventService
  ) {

  }

  alert () {
    this.eventService.trigger('alert', 'Hello Angular Event!')
  }
}
