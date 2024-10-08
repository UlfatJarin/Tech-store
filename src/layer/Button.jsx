import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({to, btntext, className}) => {
  return (
   <Link to={to}>
   <button className={`rounded-[50px] border-2 border-blue-800 ${className}`}>{btntext}</button>
   </Link>
  )
}

export default Button