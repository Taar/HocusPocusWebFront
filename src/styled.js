import styled from 'styled-components'

const colors = {
  bestPlace1: 'rgb(62,66,78)',
  v: 'rgb(136,98,75)',
  jetzt: 'rgb(205,137,74)',
  juukeSons: 'rgb(220,176,115)',
  gargoyle: 'rgb(228,217,189)'
}

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${colors.v};
  background: ${colors.gargoyle};
  border: none;
  border-radius: 3px;
  max-width: 16em;
`

const Button = styled.button`
  background: ${props => props.primary ? colors.bestPlace1 : 'white'};
  color: ${props => props.primary ? 'white' : colors.bestPlace1 };
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${colors.bestPlace1};
  border-radius: 3px;
  max-width: 9em;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: .25em auto .25em;
`

export {
  Button, Input, Grid, colors
}
