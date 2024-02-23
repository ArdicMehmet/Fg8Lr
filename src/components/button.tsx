import React from 'react'
import PropTypes from 'prop-types'

interface Button{
    className: string,
    name: string,
}

function Button(props : Button) {
  return (
    <button className={props.className}>{props.name}</button>
  )
}

export default Button
