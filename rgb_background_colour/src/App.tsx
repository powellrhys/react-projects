import { useState } from 'react'
import Slider from './components/Slider';
import './App.css'

function App() {
  const [codes, setCodes] = useState([255, 255, 255])

  const handleChange = (index : any) => (event : any) => {
    const newCodes = [...codes]
    newCodes[index] = event.target.value
    setCodes(newCodes)
  };

  const rgb_string = `rgb(${codes[0]},${codes[1]},${codes[2]})`;

  return (
    <>
      <h1>RGB Background Colour Picker</h1>
      <div className="box" style={{backgroundColor: rgb_string}}></div>
      <p><b>Background Color:</b> {rgb_string}</p>
      <Slider label="R" handleChange={handleChange(0)} colour={codes[0]} />
      <Slider label="G" handleChange={handleChange(1)} colour={codes[1]} />
      <Slider label="B" handleChange={handleChange(2)} colour={codes[2]} />
    </>
    )
};

export default App
