import { Component, OnInit, VERSION } from '@angular/core';
import { NgxEventService } from './ngx-event/ngx-event.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular Event Service' 

  constructor (
    private eventService: NgxEventService
  ) {

  }

  ngOnInit () {
    this.eventService.on('alert', this.alert)
  }

  alert(message: string) {
    alert(message)
  }

}
