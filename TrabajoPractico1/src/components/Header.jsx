import React from 'react'
import {Titulo} from '../constants/constants'
import "../css/header.css"

const Header = () => {
  
    return (
    <div className='header'>
        <br />
        <h1 className='titulo'>{Titulo}</h1>
        <br />
        <br />
        <hr />
    </div>
  )
}

export default Header