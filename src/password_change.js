import { h, Component } from 'preact'
/** @jsx h */

import linkState from 'linkstate'
import { Button, Input, Grid } from './styled.js'

const Change = Button.extend`
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
  margin-bottom: .25em;

  &:last-of-type {
    margin-bottom: 0;
  }
`

class PasswordChange extends Component {
  constructor () {
    super()

    this.state = {
      oldPassword: '',
      newPassword: '',
      reEnterPassword: '',
    }
  }

  render (_, { oldPassword, newPassword, reEnterPassword }) {
    return (
      <Grid>
        <Password type="password" value={oldPassword}
            placeholder="Current Password"
            onInput={linkState(this, 'oldPassword')} />
        <Password type="password" value={newPassword}
            placeholder="New Password eg. hunter2"
            onInput={linkState(this, 'newPassword')} />
        <Password type="password" value={reEnterPassword}
            placeholder="Re-enter Password"
            onInput={linkState(this, 'reEnterPassword')} />
        <Change primary>Change</Change>
      </Grid>
    )
  }
}

export default PasswordChange
