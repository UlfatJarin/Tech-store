import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({to, btntext, className}) => {
  return (
   <Link to={to}>
   <button className={`py-2 px-6 rounded-[50px]  border-2 hover:bg-color-3rd border-color-3rd text-color-3rd hover:text-whitec font-Poppins font-semibold text-sm text-center ${className}`}>{btntext}</button>
   </Link>
  )
}

export default Button