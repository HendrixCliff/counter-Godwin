import React, { useState } from 'react'
import ChevronDown from './svgComponents/chevronDown'
import ChevronUp from './svgComponents/ChevronUp'
import Reset from './svgComponents/Reset'
import useCounterStatus from './hooks/useCounterStatus'
import {Link} from 'react-router-dom'



 export default function CounterOne() {
 const [census, increment, decrement, reset, setValue] = useCounterStatus()
 const [newCount, setNewCount ] = useState("")

 

   function handleChange(event) {
     setNewCount(event.target.value)
     event.target.value = newCount
   }
   function handleClick(event) {
    setValue(newCount)
    setNewCount("");
  }
    return(
    <main>
      <div className="container">
        
       <section>
          <div  className="count">
            <h2 className='text'>Count</h2> 
            <Link to="/">
             {" "}
            <p className="link-home">Back to Hompage</p>{" "}
           </Link>   
          </div>
          <div>
            <span>{census}</span>
          </div>
        </section>
      </div>
      
        <section>
          <div className="closure">
            <div className='wrap'>
                <div className="design-btn">
                  <button className="button" onClick={increment}><ChevronUp/></button>
                  <button className="button" onClick={decrement}><ChevronDown/></button>
                </div>
                <input type='number' value={newCount} onChange={handleChange}/>
              <div className="design-btn"> 
                  <button className="button"onClick={reset}><Reset /></button>
                  <button className="button"onClick={handleClick}>Load value</button>
              </div>
            </div>
           </div>
        </section>
    </main>)
 }