import React, { Component } from 'react';

import './Contact.css'
import Form from '../Components/Form';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Txt from '../Components/Txt';
import art from '../Assets/images/art.svg'
const Contact = () => {
    return ( 
        <>
        <Nav />
        <Txt title="LET'S "/>
        <Txt title="COLLAB! "/>
        <div className='sio row cen page getin'>
            <img src={art} alt="art" />
        <Form />

        </div>
        <Footer />
        </>
     );
}
 
export default Contact;