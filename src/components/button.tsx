import React, { MouseEventHandler } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

type ButtonType = "submit" | "reset" | "button" | undefined;

interface Button{
    className: string,
    name: string,
    type: ButtonType,
}

function Button(props : Button) {

  let navigate = useNavigate();
  
  function redirectControl(type:ButtonType){
    if(type=='button'){
      navigate(`/${props.name.toLowerCase()}`);
    }
  }
  return (
    <button type={props.type} onClick={()=>{redirectControl(props.type)}} className={props.className}>{props.name}</button>
  )
}

export default Button
