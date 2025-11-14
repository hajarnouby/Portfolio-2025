import React, { Component } from 'react';
import './Book.css'
const Book = (props) => {
    return ( 
        <div className='row book1'>
            <p className='fnt2 st1 p91'>{props.title}</p>
            <p className='fnt1 p90'>{props.value}</p>
        </div>
     );
}
 
export default Book;