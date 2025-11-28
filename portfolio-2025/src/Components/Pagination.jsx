import React, { Component } from 'react';
import './Pagination.css'
import next from '../Assets/icons/next.svg'
const Pagei = () => {
    return (  
        <div className='pagei row cen'>
            <div className='sele'><p className='fnt2 st1'>1</p></div>
            <div><p className='fnt2 st1'>2</p></div>
            <div><p className='fnt2 st1'>3</p></div>
            <div><p className='fnt2 st1'>4</p></div>
            <img src={next} alt="next" />
        </div>
    );
}
 
export default Pagei;