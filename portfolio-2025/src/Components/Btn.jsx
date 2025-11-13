import React, { Component } from 'react';
import './Btn.css'
const Btn = (props) => {
    return ( 
        <button className='fnt2 st1'>{props.title}</button>
     );
}
 
export default Btn;