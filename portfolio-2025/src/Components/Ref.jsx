import React, { Component } from 'react';
import './Ref.css'
const Ref = (props) => {
    return ( 
            <>
            <div className='ref'>
            <h4 className='fnt1 st1'>Reference</h4>
            <p className='fnt1'>{props.a1}</p>
            <p className='fnt1'>{props.a2}</p>
            <p className='fnt1'>{props.a3}</p>
            <p className='fnt1'>{props.a4}</p>
            </div>
            </>
     );
}
 
export default Ref;