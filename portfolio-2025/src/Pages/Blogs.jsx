import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import logo from '../Assets/images/logo.svg'
import './Blogs.css'
import Txt from '../Components/Txt';
import Nav from '../Components/Nav';
import search from '../Assets/icons/search.svg'
import filter from '../Assets/icons/filter.svg'
import Blog from '../Components/Blog';
import Pagei from '../Components/Pagination';
const Blogs = () => {
    return ( 
        <>
        <Helmet>
        <title>Design Blogs</title>
        <link rel="icon" type="image/x-icon" href={logo}></link>
        <meta name="description" content="UX/UI design,graphic design and front end develpment using html css, javascript and react js" />
        <meta property="og:title" content="Blogs" />
        <meta property="og:image" content="/images/about.png" />
      </Helmet>
        <Nav />
        <div className='cen'>
            <div className='high cnt'>
                <Txt title="BLOGS"/>
        </div>
        </div>
        <div className='page'>
        <div className='row helper'>
            <div className='row cen sear'>
                <img src={search} alt="search" />
            <p className='fnt2 st1 greyish'>Search</p>
            </div>
            <div className='row cen'>
                <p className='st1 fnt2 blckish'>Filter</p>
                <img src={filter} alt="filter" />
            </div>
        </div>
        </div>
        <div className='row cen'>
            <Blog title="Designing Emotion: The Heart Behind Every Interface" value="I dive into how empathy shapes every click and scroll — because great design isn’t just functional, it feels right." />
            <Blog title="Designing Emotion: The Heart Behind Every Interface" value="I dive into how empathy shapes every click and scroll — because great design isn’t just functional, it feels right." />
        </div>
                <div className='row cen'>
            <Blog title="Designing Emotion: The Heart Behind Every Interface" value="I dive into how empathy shapes every click and scroll — because great design isn’t just functional, it feels right." />
            <Blog title="Designing Emotion: The Heart Behind Every Interface" value="I dive into how empathy shapes every click and scroll — because great design isn’t just functional, it feels right." />
        </div>
                <div className='row cen'>
            <Blog title="Designing Emotion: The Heart Behind Every Interface" value="I dive into how empathy shapes every click and scroll — because great design isn’t just functional, it feels right." />
            <Blog title="Designing Emotion: The Heart Behind Every Interface" value="I dive into how empathy shapes every click and scroll — because great design isn’t just functional, it feels right." />
        </div>
                <div className='row cen'>
            <Blog title="Designing Emotion: The Heart Behind Every Interface" value="I dive into how empathy shapes every click and scroll — because great design isn’t just functional, it feels right." />
            <Blog title="Designing Emotion: The Heart Behind Every Interface" value="I dive into how empathy shapes every click and scroll — because great design isn’t just functional, it feels right." />
        </div>
        <Pagei />
        </>
     );
}
 
export default Blogs;