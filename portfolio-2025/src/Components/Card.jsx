import React, { Component } from 'react';
import './Card.css'
import Btn from './Btn';
const Card = (props) => {
    return ( 
        <div className='col card'>
            <h3 className='fnt1 st1'>{props.title}</h3>
            <p className='fnt1 wd1'>{props.placeholder}</p>
            <Btn title="Take a Closer Look"/>
        </div>
     );
}
 
export default Card;