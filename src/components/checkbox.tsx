import React from 'react'
import PropTypes from 'prop-types'

interface Checkbox{
    classNameForInput: string,
    labelName: string,
    classNameForLabel: string,
    inputName: string,
}

function Checkbox(props : Checkbox) {
  return (
    <div className="mb-6 flex items-center">
        <input type="checkbox" name={props.inputName} id={props.inputName} className = {`w-4 h-4 me-2 ${props.classNameForInput}`}/>
        <label htmlFor={props.inputName} className={`text-left text-xl font-semibold text-base ${props.classNameForLabel}`}>{props.labelName}</label>
    </div>
  )
}

export default Checkbox