import React from 'react'
import '../../css/buttons.css'

const STYLES = ['btn--solid', 'btn--outline']
const SIZE = ['btn--medium', 'btn--small']

export const Button = ({children, type, onClick, buttonStyle, buttonSize, href}) =>{
    const checkButtonStyle = STYLES.includes(buttonStyle)? buttonStyle : STYLES[0];
    const checkButtonSize = SIZE.includes(buttonSize)? buttonSize : SIZE[0];

    return(
       <button
        className={`btn ${checkButtonSize} ${checkButtonStyle}`}
        onClick={onClick} 
        type={type} 
        >
           <a href={href}>{children}</a>
       </button>
    )
}


