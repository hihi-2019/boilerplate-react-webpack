import React, { Component } from 'react'
import superagent from 'superagent'

const loadingGif = 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      dogs: []
    }

    this.refreshDogs = this.refreshDogs.bind(this)
  }

  componentDidMount() {
    this.refreshDogs()
  }

  refreshDogs() {
    this.setState({
      dogs: []
    })
    superagent.get('/api/dogs')
    .then(res => {
      this.setState({
        dogs: res.body
      })
    })
  }
  
  render() {
    return (
      <>
      <h1>Dogs!</h1>
      <div className="buttons">
        <button onClick={this.refreshDogs}>Get New Dogs</button>
      </div>
      <div className="dogs">
        { this.state.dogs ?
          Object.keys(this.state.dogs).map(key => {
            return (<img key={key} src={this.state.dogs[key]}></img>)
          }) :
          <img src={loadingGif} />
        }
      </div>
      </>
    )
  }

}

export default App
