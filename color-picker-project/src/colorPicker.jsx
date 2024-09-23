import React,{useState} from "react"
function ColorPicker() {  // Capitalize the function name
    const [color,setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value)
    }
    return (
      <div className="color-picker-container" style={{backgroundColor:color}}>
        <h1>Pick A Color</h1>
        <p>Selected color:{color}</p>
        <div> 
            <label>
                <p>select color:</p>
                <input type="color" value={color} onChange={handleColorChange}/>
            </label>
        </div>
      </div>
    )
  }
  
  export default ColorPicker  // Only one default export
  