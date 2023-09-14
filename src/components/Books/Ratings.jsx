"use client"
import StarRatings from "react-star-ratings";

const Ratings = ({ratings}) => {
    return (
        <>
            <StarRatings
                rating={ratings}
                starDimension="15px"
                starSpacing="2px"
                starRatedColor="orange"
            // className="text-3xl"
            />
        </>
    );
};

export default Ratings;