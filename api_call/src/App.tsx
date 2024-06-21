import { useState, useEffect } from 'react'
import { Chart, registerables } from 'chart.js';
import {Line} from 'react-chartjs-2'
import './App.css'

function App() {
  Chart.register(...registerables);
  const [posts, setPosts] = useState({} as any);
  useEffect(() => {
     fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
        .then((response) => response.json())
        .then((data) => {

            const sortedData = data.data.sort(function(a: any, b: any) {
              return a['ID Year'] - b['ID Year']
            })

            const output_data = {
              ['labels']: sortedData.map((data: any) => data['ID Year']),
              ['population']: sortedData.map((data: any) => data['Population'])
             }

           setPosts(output_data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);

  return (
    <>
      <h1>API Call</h1>
      <div className='charts'>
        <Line data={{
            labels: posts.labels,
            datasets: [{
              label: 'US Population',
              data: posts.population
            }]
          }}/>
      </div>
    </>
  )
}

export default App
