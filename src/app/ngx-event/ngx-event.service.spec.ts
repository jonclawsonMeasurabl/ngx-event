import { expect } from 'chai'
import { NgxEventService } from './mx-event.service'

describe('MxEventService', () => {
  const spy = <any>{}
  before(done => {
    const event = new MxEventService()
    event.on('A', (x, y) => spy.A = x + y)
    event.on('B', () => spy.B = 'Hi')
    event.trigger('A', 'a', 'b')
    event.trigger('B')
    done()
  })

  it('should trigger the correct event', done => {
    expect(spy.A).to.equal('ab')
    expect(spy.B).to.equal('Hi')
    done()
  })
})
