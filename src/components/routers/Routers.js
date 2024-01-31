import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "../pages/Login";
import Home from "../Home";
import Register from "../pages/Register";
import Navbar from "../pages/Navbar";


const Routers = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/navbar" element={<Navbar/>}/>
        </Routes>
    )
}

export default Routers;