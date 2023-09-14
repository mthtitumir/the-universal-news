"use client"
import GetSingleNewsById from '@/hooks/TanStackHooks/GetSingleNewsById';
import React from 'react';
import NewsCardThree from '../newsCards/NewsCardThree';
import Spinner from '../ErrorComponents/Spinner';

const Bookmark =({id}) => {
    console.log( id)
    
    const [post, postLoading, refetch] = GetSingleNewsById(id)
    if(postLoading){
        return <Spinner />
    }
    return (
        <div>
            <h1>this is bookmark {id}</h1>
            <div>
                <NewsCardThree item={post}/>
            </div>
        </div>
    );
};

export default Bookmark;