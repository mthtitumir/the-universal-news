import React from 'react';
import StarRatings from 'react-star-ratings';

const Ratings = ({ ratings }) => {
    return (
        <div>
            <StarRatings
                rating={ratings}
                starDimension="30px"
                starSpacing="4px"
                starRatedColor="orange"
            />
        </div>
    );
};

export default Ratings;