import React from "react";
import { getPokemon } from "../api/pokemon";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonDetails: null
    };

    this.refresh = this.refresh.bind(this)
  }

  componentDidMount() {
    this.refresh()
  }

  refresh() {
    getPokemon()
    .then(pokemonDetails => {
      this.setState({
        pokemonDetails: pokemonDetails
      });
    });
  }
    


  render() {
    const pokemonDetails = this.state.pokemonDetails
    // console.log(pokemonDetails.sprites.front_default);
    return (
      <>
        <h1>Find out how much a Pokemon weights! Whahoo!</h1>

        <button onClick={this.refresh}>All Pokemon</button>
        {pokemonDetails ? (
          <section>
            <p>
              {pokemonDetails.name} weights {pokemonDetails.weight}.
            </p>
            <p>{pokemonDetails.name}'s moves are:</p>
            {/* <ul>
              {pokemonDetails.moves}
            </ul> */}
            {console.log(pokemonDetails.sprites.front_default)}
            <img
              src={pokemonDetails.sprites.front_default}
              alt="Hopefully a pokemon picture"
            />
          </section>
        ) : null}
      </>
    );
  }
}

export default App;
