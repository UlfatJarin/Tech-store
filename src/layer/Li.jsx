import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({to, className, liitem}) => {
  return (
    <Link to={to}>
    <li className={`font-bold ${className}`}> {liitem}</li>
    </Link>
  )
}

export default Li