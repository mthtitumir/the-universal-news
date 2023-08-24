import React from 'react'

const SingleProfile= ({params}) => {
        return (
            <div>
                <div className='h-screen flex justify-center items-center'>
                    <h1>Profile : {params.id}</h1>
                </div>
            </div>
        )
    }

export default SingleProfile
