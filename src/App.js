import React from 'react'
import './App.css'
import ChartLine from './Components/Charts/CharLine'
import Pie from './Components/Charts/CharPie'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      error: null,      
      itemsLine: [],
      itemsPie: []
    };
  }

  componentDidMount() {

    fetch("https://api.bcb.gov.br/dados/serie/bcdata.sgs.19879/dados?formato=json&dataInicial=01/01/2015&dataFinal=31/12/2019")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({            
            itemsLine: result            
          });                
        },
        (error) => {
          this.setState({            
            error
          });
        } 
      )

      fetch("https://olinda.bcb.gov.br/olinda/servico/mecir_dinheiro_em_circulacao/versao/v1/odata/informacoes_diarias?$top=13&$orderby=Data%20desc&$format=json&$select=Data,Quantidade,Valor,Denominacao,Especie")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({            
            itemsPie: result.value            
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
      <ChartLine values={this.state.itemsLine} />      
      <Pie values={this.state.itemsPie}/>
    </div>
  }

}

export default App
