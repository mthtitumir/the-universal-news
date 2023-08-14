"use client"
import { ThemeContext } from '@/contexts/ThemeContext';
import React, { useContext } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const Themes = () => {
    const { setMode } = useContext(ThemeContext);

    
    return (
        <div className="">
            <select className="select">
                <option onClick={()=>{setMode("light")}}>Light</option>
                <option onClick={()=>{setMode("dark")}}>Dark</option>
            </select>
        </div>
    )
}

export default Themes