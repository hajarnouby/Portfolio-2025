import React, { Component, useState } from 'react';
import { supabase } from '../Supabase';
import './Form.css'
import Btn from './Btn';
const Form = () => {
    const [Name,setName] = useState("");
    const [Email,setEmail] = useState("");
    const [Idea,setIdea] = useState("");
    const [Budget,setBudget] = useState("");
    
    async function sendMsg(){
        const res = await supabase.from("Get_In_touch").insert({"Name":Name,"Email":Email});

    }


    return ( 
        <>
        <form onSubmit={sendMsg}>
            <label>Your First Name</label>
            <input onChange={(i)=> {setName(i.target.value)}} className='fnt1' type="text" placeholder='Your Name' />
            <br />
            <label>Email Address</label>
            <input className='fnt1' type="email" placeholder='Email Address' />
            <br />
            <label>Your Idea</label>
            <textarea className='fnt1' type="text" placeholder='Tell Me Everything' />
            <br />
            <label>your Budget [add  your currency ex.50k $]</label>
            <input className='fnt1' type="text" placeholder='Budget' />
            <br />
            <Btn title="Submit" /> 
        </form>
        </>
        
        // <p className='fnt1 pp80'>{props.name}</p>
        // <div className='bor'>
        // {/* <p className='fnt1 pp81'></p> */}
        // <input type={props.namep} />


     );
}
 
export default Form;