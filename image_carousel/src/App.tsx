import { useState } from 'react'
import './App.css'

function App() {

  const [index, setIndex] = useState(0)
  const img_array = [
    'yosemite',
    'lake louise',
    'zurmatt',
  ]

  const handleChangeNext = () => {
    if (index + 2 > img_array.length) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const handleChangeLast = () => {
    if (index <= 0) {
      setIndex(img_array.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  return (
    <>
      <h1>Image Carousel</h1>
      <p>{img_array[index]}</p>
      <div className='image-container'>
        <img src={`./src/assets/${img_array[index]}.jpg`} />
      </div>
      <div className='button-container'>
        <button onClick={handleChangeLast}>Previous</button>
        <button onClick={handleChangeNext}>Next</button>
      </div>
    </>
  )
}

export default App
