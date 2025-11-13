import React, { Component } from 'react';
import './Card.css'
import Btn from './Btn';
const Card = () => {
    return ( 
        <div className='col card'>
            <h3 className='fnt1 st1'>“UX/ UI DESIGN”</h3>
            <p className='fnt1 wd1'>I research, make wireframes, design and add prototype to revive my design. My mission as a ux/ui designer is to make your vision come to life. This is what I’m passionate about.</p>
            <Btn title="Take a Closer Look"/>
        </div>
     );
}
 
export default Card;