import React, { Component } from 'react';
import './Home.css';
import Nav from '../Components/Nav';
import bg from '../Assets/images/bg.svg'
import sign from '../Assets/images/sign.svg'
import show from '../Assets/videos/Showreel.mp4'
import be from '../Assets/icons/behan.svg'
import drib from '../Assets/icons/drib.svg'
import up from '../Assets/icons/up.svg'
import Card from '../Components/Card';
import ux from '../Assets/videos/ux.mp4'
import gra from '../Assets/videos/gra.mp4'
import bk from '../Assets/images/bckg.svg'
import one from '../Assets/images/one.svg'
import two from '../Assets/images/two.svg'
import three from '../Assets/images/three.svg'
import four from '../Assets/images/four.svg'
import five from '../Assets/videos/five.mp4'
import six from '../Assets/videos/six.mp4'
import seven from '../Assets/images/seven.svg'
import eight from '../Assets/images/eight.svg'
import star from '../Assets/images/star.svg'
import Cta from './../Components/CTA';
import Txt from '../Components/Txt';
import Bcta from '../Components/Blogcta';
import Book from '../Components/Book';

const Home = () => {
    return ( 
        <body>
            <img className='img1' src={bk} alt="background" />
            <div className='page pp3'>
            <Nav />
            <h1 className='fnt1 st2'>PORT <br></br> FOLIO</h1>
            <img className='sign' src={sign} alt="signature" />
            {/* <img className='img1' src={bg} alt="background" /> */}
            
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
            <div className='page sec2 con'>
                <h2 className='fnt1 st2 rot'>I CREATE</h2>
                <div className='col wd2'>
                <div className='row conte'>
                <Card title="“UX/ UI DESIGN”" placeholder="I research, make wireframes, design and add prototype to revive my design. My mission as a ux/ui designer is to make your vision come to life. This is what I’m passionate about." />
                <video className='vd2' src={ux} autoPlay loop muted></video>

                </div>
                <div className='row conte'>
                <video className='vd2 vd3' src={gra} autoPlay loop muted></video>
                <div className='c2'>

                <Card title="“GRAPHIC DESIGN”" placeholder="When it comes to graphic design. I design to not only to apply your vision but to make you stand out in the market. I make it a priority to make the personality of your brand shine and stand out!" />
                </div>

                </div>
                </div>
            </div>
                <div className='page qut'>
                    <div className='sp3'>
                    <h4 className='txt1 fnt2 st1'>I create digital experiences that blend design and emotion</h4>
                    <h4 className='txt2 fnt2 st1'> — from intuitive UX interfaces and bold visual identities to dynamic 3D visuals and motion storytelling in After Effects. My work brings ideas to life with movement, depth, and a touch of imagination.</h4>
                    </div>
                </div>
            <div className='col cen sp4'>
                <h2 className='fnt1 st3 txt3'>PROJ<span class="stroke">ECT</span></h2>
                <p className='fnt1 p4'>“As a UX/UI designer i use Figma and many adobe applications like aftereffects, illustrator, Photoshop And blender to bring my vision to light!”</p>
            </div>
            <div className='images'>
                <div className='row comp'>
                <img className='one' src={one} alt="image" />
                <img className='two' src={two} alt="image" />
                <img className='three' src={three} alt="image" />
                </div>
                <div className='row comp sp5'>
                <img className='four' src={four} alt="image" />
                <video className='vd5' src={five} autoPlay loop muted></video>
                    <div className='col'>
                <video className='vd4' src={six} autoPlay loop muted></video>
                <img className='seven' src={seven} alt="image" />
                    </div>
                </div>
                <img className='eight' src={eight} alt="image" />
                <div className='page row ct'>
                <img className='star' src={star} alt="image" />
                <Cta title="Go Deeper" />
                </div>
            </div>
             <div className='page sp4'>
                <div className='high'>
                <Txt title="BLOGS"/>
                </div>
                    <Bcta title="Designing Emotion: The Heart Behind Every Interface" value="I dive into how empathy shapes every click and scroll — because great design isn’t just functional, it feels right." />
                    <Bcta title="Designing Emotion: The Heart Behind Every Interface" value="I dive into how empathy shapes every click and scroll — because great design isn’t just functional, it feels right." />
                    <Bcta title="Designing Emotion: The Heart Behind Every Interface" value="I dive into how empathy shapes every click and scroll — because great design isn’t just functional, it feels right." />
             </div>
             <div className='page ctaa'>
                <Cta title="Books I Read And to Be Read" />
                    <div className='col books'>
                        <div className='book1'>
                        <Book title="REFACTORING UI" value="By Adam Wathan & Steve Schoger" />
                        </div>
                        <div className='book1 book2'>
                        <Book title="SHOW YOUR WORK" value="By Austin Kleon" />
                        </div>
                         <div className='book1 book3'>
                        <Book title="THE DESIGN OF EVERYDAY THINGS" value="By Don" />
                        </div>
                                                <div className='book1'>
                        <Book title="STEAL LIKE A ARTIST" value="By Austin Kleon" />
                        </div>
                    </div>

             </div>

                <hr className='hrr' />

        </body>

     );
}
 
export default Home;