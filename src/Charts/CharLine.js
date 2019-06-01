import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Chart.css'

function ChartLine(props) {

    return (
        <div className="Chart">
            <h1>Comprometimento de renda das famílias com amortização da dívida com o Sistema Financeiro Nacional - Com ajuste sazonal</h1>
            <LineChart
                width={1200}
                height={300}
                data={props.values}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="data" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="valor" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    )
}

export default ChartLine