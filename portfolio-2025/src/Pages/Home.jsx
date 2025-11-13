import React, { Component } from 'react';
import './Home.css';
import Nav from '../Components/Nav';
import bg from '../Assets/images/bg.svg'
import sign from '../Assets/images/sign.svg'
import show from '../Assets/videos/Showreel.mp4'
import be from '../Assets/icons/behan.svg'
import drib from '../Assets/icons/drib.svg'
import up from '../Assets/icons/up.svg'
const Home = () => {
    return ( 
        <body>
            <div className='page'>
            <Nav />
            <h1 className='fnt1 st2'>PORT <br></br> FOLIO</h1>
            <img className='sign' src={sign} alt="signature" />
            <div className='row div2'>
            <div className='cen sp1'>
            <hr />
                <img className='soci' src={be} alt="behance" />
                <img className='soci' src={drib} alt="dribbble" />
                <img className='soci' src={up} alt="upwork" />
            </div>
            <div className='col'>
                <p className='st1 fnt2'>SHOWREEL 2025</p>
                <video className='vd1' src={show} autoPlay loop muted></video>
            </div>
            </div>
            </div>
        


        </body>

     );
}
 
export default Home;