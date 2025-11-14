import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from '../src/Pages/Error';
import Home from '../src/Pages/Homepage';
import Projects from './Pages/Projects';
import Project from './Pages/Project';

const Routess = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/projects/:id" element={<Project />}></Route>
            <Route path="*" element={<Error404/>}></Route>
        </Routes>
        </BrowserRouter>
     );
};
 
export default Routess;