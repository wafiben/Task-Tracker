import React from 'react'
import PropTypes from 'prop-types';

function Button({color,text,handleClick}) {
    return (
        <button 
        style={{backgroundColor:color}}  
        onClick={handleClick}
        className="btn">{text}</button>
    )
}
Button.defaultProps = {
    color:'steelblue',

}
Button.prototype={
    text:PropTypes.string,
    color:PropTypes.string,
    handleClick:PropTypes.func.isRequired
}

export default Button;

