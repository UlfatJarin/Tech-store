import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({to ,src ,className}) => {
  return (
    <Link to={to}>
    <picture>
        <img className={`object-cover ${className}`} src={src} alt={src} />
    </picture>
    </Link>
  )
}

export default Image