import React, { Component } from 'react';
import './Blog.css'
import blogex from '../Assets/images/imgex.svg'
const Blog = (props) => {
    return ( 
        <>
            <div className='blog-card'>
                <img src={blogex} alt="thumbnail" />
                <h3 className='blogti fnt1 st0'>{props.title}</h3>
                <p className='fnt1 w88'></p>
            </div>
        </>
     );
}
 
export default Blog;