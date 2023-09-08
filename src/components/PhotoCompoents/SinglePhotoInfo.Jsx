import React from 'react';

const SinglePhotoInfo = ({ photo }) => {
    const { title, description, images, captions, published_date, } = photo
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default SinglePhotoInfo;