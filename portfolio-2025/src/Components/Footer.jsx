import React, { Component } from 'react';
import './Footer.css'
import fnal from '../Assets/videos/Final.mp4'
import blogo from '../Assets/images/biglogo.svg'
import sco from '../Assets/images/sociwh.svg'
import dot from '../Assets/images/reddot.svg'
import end from '../Assets/images/THEEND.svg'
const Footer = () => {
    return (  
        <>
        <footer className='page row footerr'>
            <div className='footss col'>
                <img className='logored ops' src={blogo} alt="Logo" />
                <img className='ssc ops' src={sco} alt="Socails" />
                <p className='email fnt1 ops'>hajarnoubyart@gmail.com</p>
                <div className='row gyt'>
                    <div className='row ops cen'>
                    <img className='dot' src={dot} alt="red dot" />
                    <p className='ftt'>Home</p>
                    </div>
                                        <div className='row ops cen'>
                    <img className='dot' src={dot} alt="red dot" />
                    <p className='ftt'>Projects</p>
                    </div>
                                        <div className='row ops cen'>
                    <img className='dot' src={dot} alt="red dot" />
                    <p className='ftt'>About Me</p>
                    </div>
                                        <div className='row ops cen'>
                    <img className='dot' src={dot} alt="red dot" />
                    <p className='ftt'>Why Me?</p>
                    </div>
                                        <div className='row ops cen'>
                    <img className='dot' src={dot} alt="red dot" />
                    <p className='ftt'>Get In Touch</p>
                    </div>
                </div>
                <p className='ops opt ftt'>@2025. All Right Reserved to Hajar Nouby</p>
            </div>
                        <div className='foots'>
            <video className='fvd' src={fnal} autoPlay loop muted></video>
            </div>
        </footer>
            <div className='redd'>
                        {/* <h1 className='end'>THE END</h1> */}
                        <img className='end' src={end} alt="THEEND" />
            </div>
            </>
    );
}
 
export default Footer;