"use client"
import axios from 'axios';
import React, { useContext, useRef, useState } from 'react';

const HandleSearchFunction = () => {
    const serchRef = useRef(null)
    const [searchTerm, setSearchTerm] = useState('');
    

    const handleSearch = async () => {
        setSearchTerm(serchRef.current.value);

        try {
            const response = await axios.get(`api/get-all-job-withe-searche?search=${searchTerm}`);
            console.log(response.data); 
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    return (
        <div>
            <div className='flex flex-col gap-1 my-3'>
                <label className='text-gray-600 text-base'>Jobs</label>
                <input
                    type="text"
                    name='jobs'
                    placeholder='Search Jobs'
                    className='border w-3/4 py-2 text-zinc-500 rounded-sm px-3'
                    ref={serchRef}
                />
            </div>
            <button className='primary-btn' onClick={handleSearch}>Search Jobs</button>
        </div>
    );
};

export default HandleSearchFunction;
