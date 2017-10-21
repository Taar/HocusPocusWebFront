import { h } from 'preact'
/** @jsx h */

import { Link as StaticLink } from 'preact-router'
import { Match } from 'preact-router/match'
import styled from 'styled-components'
import { Button, colors } from './styled.js'

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: center;
`

const NavItem = ({ path, ...props }) => (
  <Match path={path || props.href}>
    { ({ matches }) => (<Link primary={matches} {...props}/>) }
  </Match>
)

const Link = Button.withComponent(StaticLink).extend`
  align-self: center;
  margin: 0;
  margin-bottom: 1em;
  border-radius: 0;

  @media (max-width: 350px) {
    font-size: .75em
  }

  &:first-of-type {
    border-radius: .3em 0em 0em .3em;
  }

  &:last-of-type {
    border-radius: 0em .3em .3em 0em;
    border: 0;
    border-width: 2px 2px 2px 0px;
    border-color: ${colors.bestPlace1};
    border-style: solid;
  }
`

const OpeningBracket = styled.div`
  width: 1em;
  font-size: 1.5em;
  font-weight: bold;
  color: ${colors.jetzt};

  @media (max-width: 350px) {
    font-size: 1.15em
  }

  &:before {
    content: '<'
  }
`

const ClosingBracket = styled.div`
  width: 1em;
  font-size: 1.5em;
  font-weight: bold;
  color: ${colors.jetzt};
  margin-left: .25em;

  @media (max-width: 350px) {
    font-size: 1.15em
  }

  &:after {
    content: '/>'
  }
`

const Nav = () => (
  <NavContainer>
    <OpeningBracket/>
    <NavItem href="/">Door</NavItem>
    <NavItem href="/password_change">Change Password</NavItem>
    <ClosingBracket/>
  </NavContainer>
)

export default Nav
