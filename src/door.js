import { h, Component } from 'preact'
/** @jsx h */

import linkState from 'linkstate'
import { Button, Input, Grid } from './styled.js'

const HocusPocus = Button.extend`
  grid-column-start: 2;
  grid-column-end: 2;
  justify-self: center;
  margin: .5em;
`

const Password = Input.extend`
  grid-column-start: 2;
  grid-column-end: 2;
  justify-self: center;
  margin: 0em;
`

class Door extends Component {
  constructor () {
    super()

    this.state = {
      password: ''
    }
  }

  render (_, { password }) {
    return (
      <Grid>
        <Password type="password" value={password}
            onInput={linkState(this, 'password')} />
        <HocusPocus primary>Hocus Pocus</HocusPocus>
      </Grid>
    )
  }
}

export default Door
