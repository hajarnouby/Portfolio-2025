import React, { Component } from 'react';
import './Bloginfo.css'
const Bloginfo = (props) => {
    return ( 
        <>
        <h5 className='st0 fnt1 w55'>{props.title}</h5>
        <div className='col cen blog-info'>
            <h4 className='st1 fnt1'>{props.h1}</h4>
            <p className='fnt1'>{props.para}</p> 
            <h4 className='st1 fnt1'>{props.h2}</h4>
            <p className='fnt1'>{props.para2}</p> 
            <h4 className='st1 fnt1'>{props.h3}</h4>
            <p className='fnt1'>{props.para3}</p> 
        </div>
        </>
     );
}
 
export default Bloginfo;