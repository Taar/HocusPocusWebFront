import test from 'tape-catch'

import mq from 'mithril-query'
import App from '../app'

test('App', assert => {
  assert.plan(1)
  assert.timeoutAfter(1000)

  const output = mq(App)
  assert.equal(
    output.has('.hello'),
    true,
    'App be a div with the class of hello'
  )
})
