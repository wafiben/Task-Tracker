import React from 'react';
import Button from './Button';

import PropTypes from 'prop-types';

const Header = ({title}) => {
   const onClick=()=>alert('ola')
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button 
            color="green" 
            text="Add"
            handleClick={onClick}/>
            
        </header>
    )
}
Header.defaultProps = {
    title: "Task Tracker"
  };
  Header.propTypes ={title:PropTypes.string.isRequired}

export default Header;
