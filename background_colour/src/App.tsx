import { useState } from 'react'
import './App.css'

function App() {
  const [colour, setColour] = useState('red');

  const handleChange = (event) => {
    setColour(event.target.value);
  }

  return (
    <>
      <div className="box" style={{backgroundColor: colour}}></div>
        <p>Background Color</p>
      <div className='inputbox'>
        <input type='text' onChange={handleChange} value={colour} />
      </div>
    </>
    )
}

export default App
