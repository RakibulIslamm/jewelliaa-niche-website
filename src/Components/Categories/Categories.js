import React, { useEffect, useState } from 'react';
import Category from './Category/Category';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Categoties = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-beyond-78221.herokuapp.com/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        useCSS: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    const settings2 = {
        dots: true,
        infinite: true,
        useCSS: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="py-8 w-full">
            <div className="px-20 xs:px-5 w-full">
                <h1 className="text-3xl text-center font-bold py-8">Shop Fine Jewelry For Every Day</h1>
                <div className="xs:hidden sm:hidden">
                    <Slider {...settings}>
                        {
                            categories.map(category => <Category key={category._id} category={category}></Category>)
                        }
                    </Slider>
                </div>
                <div className="hidden xs:block sm:block">
                    <Slider {...settings2}>
                        {
                            categories.map(category => <Category key={category._id} category={category}></Category>)
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Categoties;