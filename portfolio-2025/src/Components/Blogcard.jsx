import React, { Component } from 'react';
import './Blogcard.css'
import blogex from '../Assets/images/imgex.svg'
import Cta from './CTA';
const Blog = (props) => {
    return ( 
        <>
            <div className='blog-card'>
                <img src={blogex} alt="thumbnail" />
                <h3 className='blogti fnt1 st0'>{props.title}</h3>
                <p className='fnt1 w88'>{props.value}</p>
                <Cta value="Read Blog" />
            </div>
        </>
     );
}
 
export default Blog;