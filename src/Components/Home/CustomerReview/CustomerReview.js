import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import Review from './Review/HomeReview';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CustomerReview = () => {
    const [reviews, setReviews] = useState([])

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        fetch('https://murmuring-beyond-78221.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="bg-yellow-900 py-20 xs:py-10 sm:py-10 mt-5">
            <h1 className="text-4xl text-white font-bold text-center">What People Say</h1>
            <div className="mt-5">
                <Slider {...settings}>
                    {
                        reviews.map(review => <Review key={review._id} review={review}></Review>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default CustomerReview;