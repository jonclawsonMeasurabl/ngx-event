import { Injectable } from '@angular/core'
import { Observable, Observer, pipe } from 'rxjs'
import { filter, share  } from 'rxjs/operators'
import { NgxEvent } from './ngx-event.model'

/**
 * MxEventService
 * An event callback service
 * Example Usage:
 * const event = new MxEventService()
 * event.on(1, (x, y) => console.log(x, y))
 * event.on(2, () => console.log('Hey!'))
 * event.trigger(1, 'a', 'b')
 * event.trigger(2)
 */

@Injectable({
  providedIn: 'root'
})
export class NgxEventService {
  private observable: Observable<any>;
  private observer: Observer<any>;

  constructor () {
    this.observable = Observable.create((observer: Observer<any>) => {
      this.observer = observer
    }).pipe(share())
  }

  public trigger (eventName: string, ...args: any[]) {
    const mxEvent = <NgxEvent>{
      args,
      name: eventName,
    }
    this.observer.next(mxEvent)
  }

  public on (eventName: string, eventFunction: Function) {
    this.observable.pipe(
      filter((e: NgxEvent) => e.name === eventName)
      ).subscribe(e => {
        eventFunction(...e.args)
        })
  }

}