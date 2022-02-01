import React from "react";
import   './Card_module.css'
const Card = props =>{
  console.log('classes',props)
    return(
      <div className={` card ${props.inputClass}`}>{props.children}</div>
    )
}
export default Card