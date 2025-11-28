import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import logo from '../Assets/images/logo.svg'
import './Home.css'
import './Projects.css'
import Nav from './../Components/Nav';
import bk from '../Assets/images/bckg.svg'
import five from '../Assets/videos/five.mp4'
import pro2 from '../Assets/images/pro2.svg'
import pro3 from '../Assets/images/pro3.svg'
import slide from '../Assets/images/slide.svg'
import Footer from '../Components/Footer';

const Projects = () => {
    return (  
        <>
        <Helmet>
        <title>Design Projects</title>
        <link rel="icon" type="image/x-icon" href={logo}></link>
        <meta name="description" content="UX/UI design,graphic design and front end develpment using html css, javascript and react js" />
        <meta property="og:title" content="Projects" />
        <meta property="og:image" content="/images/about.png" />
      </Helmet>
         <Nav />
                    <img className='img1' src={bk} alt="background" />
                <div className='col cen sp4'>
                <h2 className='fnt1 st3 txt3'>PROJ<span class="stroke">ECT</span></h2>
                <p className='fnt1 p4'>“As a UX/UI designer i use Figma and many adobe applications like aftereffects, illustrator, Photoshop And blender to bring my vision to light!”</p>
            </div>
            <div className='projects col page cen'>
                <Link to="/projects/project1">
                <video className='proj' src={five} autoPlay loop muted></video>
        </Link>
        <div className='row projects'>
                <img className='projs' src={pro2} alt="project2" />
                <img className='projs' src={pro3} alt="project3" />
        </div>
            </div>
            <img className='center cen sp88' src={slide} alt="" />
            <Footer />
        </>
    );
}
 
export default Projects;