import React from 'react'
import { getCharmander } from '../api/poke'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      charmander: {
        abilities: [],
        moves: [],
        sprites: {}

      },
    }
  }
  componentDidMount() {

    // var isHidden = null
    // if(1 > 2) {
    //   isHidden = "1"
    // } else {
    //   isHidden = "2"
    // }

    // var isHidden = (1 > 2 ? "1" : "2")

    getCharmander()
      .then(charmander => {
        // console.log(charmander)
        this.setState({
          charmander: charmander,
        })
      })
  }

  render() {
    const charmander = this.state.charmander
    const abilities = this.state.charmander.abilities
    const moves = this.state.charmander.moves
    const img = this.state.charmander.sprites

    return (
      <React.Fragment>
        <h1>React development has begun!</h1>
        {charmander && (
          <section>
                     <div>
              {<img src={img.front_default}></img>}
              
            </div>
              <h3>{charmander.name}</h3>
            <ul> 
              
              <li>
              {abilities.map(abilityItem => {
                return (<li>{abilityItem.ability.name} - {abilityItem.is_hidden ? "hidden" : "not hidden"}</li>) 
              })}
              
              {moves.map(moveName => {
                // console.log(abilityItem.is_hidden)
                return (<li>{moveName.move.name}</li>) 
              })}
              </li>
            </ul>
   
          </section>

        )
        }
      </React.Fragment>
    )
  }
}


export default App
