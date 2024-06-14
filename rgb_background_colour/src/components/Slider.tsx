import './Slider.css'

export default function Slider(
    {label, handleChange, colour} :
    {label:any, handleChange:any, colour:any}) {

  return (
    <>
      <div className='inputbox'>
        <p>{label}</p>
        <br></br>
        <input type="range"
                min="0"
                max="255"
                onChange={handleChange}
                value={colour} />
      </div>
    </>
    )
};
