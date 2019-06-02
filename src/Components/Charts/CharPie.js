import React from 'react'
import './Pie.css'
import { PieChart, Pie, ResponsiveContainer, Tooltip } from 'recharts'


function CharPie({values}) {        
    
    const mapMoney = values.map(item => {
        return {
            ...item,
            name: `${item.Especie} de R$${item.Denominacao.replace('.',',')}`
        }
    })    

    return (        
        <div style={{ width: '100%', height: 500 }}>
            <h1>Quantidade de Cédulas e Moedas em Circulação </h1>
          <ResponsiveContainer>
            <PieChart>
              <Pie isAnimationActive={true} dataKey="Quantidade" data={mapMoney} fill="#8884d8" label />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      );
}

export default CharPie