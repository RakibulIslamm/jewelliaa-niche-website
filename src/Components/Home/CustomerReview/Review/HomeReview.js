import React from 'react';
import { RatingView } from 'react-simple-star-rating'

const Review = ({ review }) => {
    const { name, desc, rating } = review;
    return (
        <div className="px-20 xs:px-6 sm:px-10 text-center w-8/12 xs:w-full sm:w-full mx-auto mt-10 text-white space-y-2">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="font-sans font-light tracking-wider">{desc}</p>
            <RatingView ratingValue={rating} />
        </div>
    );
};

export default Review;