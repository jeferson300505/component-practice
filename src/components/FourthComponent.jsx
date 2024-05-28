import React from 'react'

export const FourthComponent = () => {

  const buttonOnClick = (e) =>{
    alert("Hola soy un evento click")
  }
  
  const handleDoubleClicked =  (e)=>{
      alert("Haz hecho doble clicl al botun")
  }

  const handleMouseEnter = (e)=>{
    console.log("Haz entrado a la caja con el mouse")
  }

  const handleMouseLeave = (e)=>{
    console.log("Haz salido de la caja del mouse")
  }

  const handleMouse = (e, actio)=>{
    alert(`haz ${actio} la caja!!`)
  }

  const handleMouseCl = (e, actio)=>{
    console.log(`haz ${actio} la caja!!`)
  }

  const insideInput = (e)=>{
    console.log("Estas dentro del input")
  }

  const outsInput = (e)=>{
    console.log("Estas fuera del input")
  }

  return (
    <div>
      <div>
          <button onClick={()=>{
              console.log("Soy un evento click")
            }}>haz Click
          </button>
      </div>
       
      <div>
        <button onClick={buttonOnClick}>Aqui tambien haz Click</button>
      </div>
      <div>
        <button onDoubleClick={handleDoubleClicked}>Haz doble click</button>
      </div>
      <hr />
      <div id='box'>
        <div id='box1' onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave} >
          <p>Pasa el mouse por emcima !!</p>
        </div>
        <div id='box2' onMouseEnter={e =>handleMouse(e,"entrado a")}  onMouseLeave={e =>handleMouse(e,"salido de ")} >
          <p>Pasa el mouse por emcima !!</p>
        </div>
        <div id='box3' onMouseEnter={e => handleMouseCl(e,"entra a")}  onMouseLeave={e => handleMouseCl(e,"salido de")} >
          <p>Pasa el mouse por emcima !!</p>
        </div>
      </div>
      <div>
        <input type="text" 
          onFocus={insideInput}
          
          className="mt-4" placeholder='Escribe tu nombre:'/>
      </div>
    </div>
    
  )
}
