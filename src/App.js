import React from 'react'
import './App.css'
import ChartLine from './Charts/CharLine'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      error: null,      
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.bcb.gov.br/dados/serie/bcdata.sgs.19879/dados?formato=json&dataInicial=01/01/2015&dataFinal=31/12/2019")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({            
            items: result            
          });                
        },
        (error) => {
          this.setState({            
            error
          });
        }
      )
  }


  render() {    
    return <div className="App">    
      <ChartLine values={this.state.items} />      
    </div>
  }

}

export default App
