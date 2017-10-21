import { h, render } from 'preact'
/** @jsx h */

import Router from 'preact-router'

import Door from './door.js'
import PasswordChange from './password_change.js'
import Nav from './nav.js'

const App = () => (
  <div>
    <Nav/>
    <Router>
      <Door path='/' />
      <PasswordChange path='/password_change' />
    </Router>
  </div>
)

render(<App/>, document.body)
