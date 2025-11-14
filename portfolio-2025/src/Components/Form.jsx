import React, { Component } from 'react';
import './Form.css'
const Form = (props) => {
    return ( 
    <div className='col form'>
        <p className='fnt1 pp80'>{props.title}</p>
        <div className='bor'>
        <p className='fnt1 pp81'>{props.value}</p>

        </div>
    </div>

     );
}
 
export default Form;