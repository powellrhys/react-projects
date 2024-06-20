import { Chart, registerables } from 'chart.js';
import {Bar, Line} from 'react-chartjs-2'
import barData from './data/data.json'
import './App.css'

function App() {
  Chart.register(...registerables);

  return (
    <>
    <h1>Bar Chart</h1>
    <div className='charts'>
      <Bar data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: barData.map(data => ({['label']: data.name, ['data']: data.data}))
        }}/>
    </div>
    <h1>Line Chart</h1>
    <div className='charts'>
      <Line data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: barData.map(data => ({['label']: data.name, ['data']: data.data}))
        }}/>
    </div>
    </>
  )
}

export default App
