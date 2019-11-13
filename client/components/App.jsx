import React from 'react'
import request from 'superagent'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      cats: []
    }
  }

  componentDidMount(){
    this.getCats()
  }

  getCats(){
    request.get('/cats')
    .then(cats => {
      console.log(cats.body.all)
      this.setState({
        cats: cats.body.all
      })
    })
  }


 

  render() {
    return(
      <>
      <h1>FUN CAT FACTS AHEAD</h1>
      {this.state.cats ? (
        <section>
          {this.state.cats.map((fact, i) => {
          return <div><h1>CAT FACT: {i+1} </h1><p>{fact.text}</p><h4>UPVOTES: {fact.upvotes}</h4><br></br><br></br></div>
        })}
        </section>
        
      ) :  <img src="https://gph.is/1XRTmuh"/>}
      
      </>
    )
    
  }
}

export default App
