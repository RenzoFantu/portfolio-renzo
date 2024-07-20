"use client";
import React from "react";



const ClientButton = ({text}) => {
    const handleClick = () => {
        alert ('Go boton clickeado')
    }
  return (

    <div>
    <button  className="bg-cyan-300 text-black rounded-md py-2 px-2 mx-2 hover:bg-green-400" onClick={handleClick}>{text}</button>
    </div>
  )
}

export default ClientButton
