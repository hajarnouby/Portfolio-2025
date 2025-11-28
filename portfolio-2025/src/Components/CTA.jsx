import React, { Component } from 'react';
import './CTA.css'
import arrow from '../Assets/icons/arrow.svg'
const Cta = (props) => {
    return (  
            <div className='fnt1 st1 cta row'>
                <h4 className='txt2 txt4'>{props.title}</h4>
                <p className='txt2 txt4'>{props.value}</p>
                <img className='ico' src={arrow} alt="arrow" />
            </div>

    );
}
 
export default Cta;