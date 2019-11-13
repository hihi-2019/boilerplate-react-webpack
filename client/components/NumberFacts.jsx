import React from 'react'
import { getNumberFact } from '../api/numberFacts'

class NumberFacts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: null,
      numberFact: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      number: String(e.target.value)
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    getNumberFact(this.state.number).then(randomFact => {
      this.setState({
        numberFact: randomFact
      })
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='number'>Enter a number</label>
          <input
            type='number'
            name='number'
            onChange={this.handleChange}
          />
          <input type='submit' />
        </form>
        {this.state.numberFact && <h1>{this.state.numberFact}</h1>}
      </>
    )
  }
}

export default NumberFacts