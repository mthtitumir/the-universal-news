import React from 'react';
import data from '../../../../utils/json'
import SinglePhotoInfo from '@/components/PhotoCompoents/singlePhotoInfo'



const SingleImage = () => {
    const photoData = data.slice(0, 1);

    return (
        <div className='c-auto'>
            {
                photoData.map((photo) => (
                    <SinglePhotoInfo
                        key={photo.id}
                        photo={photo}
                    />
                ))
        }
    
        </div>

    );
};

export default SingleImage;