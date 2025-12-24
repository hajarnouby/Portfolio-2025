import React, { Component, useEffect, useState } from 'react';
import { supabase } from '../Supabase';
const TestAPI = () => {

            const[Project_Details,setProject_Details] = useState([
                {
                    After_img: "",
                    Before_img: "",
                    Description_1: "",
                    Description_2: "",
                    GitHub: "",
                    Images: "",
                    Tools: "",
                    Website_Link: "",
                    category: [],
                    code_img: "",
                    cover_img: "",
                    created_at: "",
                    date: "",
                    id: "",
                    title: ""
                }
            ]);

        useEffect(()=>{
          async  function callGetApi(){
                // console.log("111");
                const res = await supabase.from("Project_Details").select("*");
                
                setProject_Details(res.data)
                // console.log(res.data[0].title);

            }
            callGetApi();
        },[]);

    return ( 
        <> 
        shbj
        <p className=''>
            {Project_Details[0].images.map((img2)=>{
                <div>

                    return <h1>{img2.alt}</h1> 
                    <img src={img2.url} alt={img2.alt} />

                </div>
            }) 
            }
            
        </p>
        </>
     );
}
 
export default TestAPI;