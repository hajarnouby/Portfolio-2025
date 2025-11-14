import React, { Component } from 'react';
import './Project.css'
import TVOS from '../Assets/videos/TVOS.mp4'
import Fav from './Fav';
import Nav from '../Components/Nav';
import Txt from '../Components/Txt';
import fig from '../Assets/images/fig.svg'
import star from '../Assets/images/star.svg'
import Footer from '../Components/Footer';

const Project = () => {
    return ( 
        <>
        <Fav />
        <Nav />
         <video className='proj' src={TVOS} autoPlay loop muted></video>
         <div className='page row'>
            <Txt title="TV OS"/>
         </div>
         <div className='page row sppp'>
            <div className='col'>
            <h3 className='fnt1 st1 sp88'>Description</h3>
            <p className='fnt1 para'>Our TV OS is a next-generation entertainment ecosystem that merges advanced technology with the timeless beauty of Ancient Egyptian design. Inspired by the symbols, geometry, and visual identity of Egypt’s legendary civilization, the system is crafted to feel both futuristic and deeply rooted in cultural heritage. The logo embodies this vision — echoing the precision of hieroglyphics, the elegance of carved stone, and the strength of pharaonic symbolism.<br></br>
This operating system is built for seamless performance, offering a fluid and intuitive navigation experience that responds instantly to the user’s needs. Every animation, transition, and interaction is designed to feel natural and effortless, while maintaining the refined visual harmony of its Egyptian-inspired aesthetic. Whether browsing channels, launching apps, or exploring personalized recommendations, users are guided through an interface that prioritizes clarity, speed, and simplicity.</p>
                        <h3 className='fnt1 st1 sp88'>To Design This I Used</h3>
                        <img className='tool' src={fig} alt="FIGMA" />

            </div>
            <div className='col'>
            <h3 className='fnt1 st1 sp88'>Time Spent</h3>
            <h4 className='redish fnt1'>48 HR</h4>
            </div>
                <img className='star' src={star} alt="image" />

         </div>
         <Footer />
        </>
     );
}
 
export default Project;