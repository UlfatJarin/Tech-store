import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({to, className, liitem}) => {
  return (
    <Link to={to}>
    <li className={`font-semibold text-[14px] text-center text-blackc font-Poppins  ${className}`}> {liitem}</li>
    </Link>
  )
}

export default Li