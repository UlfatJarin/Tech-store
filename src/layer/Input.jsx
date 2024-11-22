import React from 'react'

const Input = ({labeltext, inputtext ,placeholder, type,id ,className}) => {
  return (
    <div className={`max-w-[565px] ${className}`} >
        <lebel className="p4 !font-semibold capitalize ">{labeltext} </lebel><br/>
        <input className={`w-full mt-3 p5 !text-sm capitalize text-bg-secondary p-4 border border-[#A2A6B0] rounded-[4px] `} id={id} type={type} placeholder={placeholder}>{inputtext}</input>
    </div>
  )
}

export default Input