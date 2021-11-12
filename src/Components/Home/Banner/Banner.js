import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../images/banner-img1.jpg'

const Banner = () => {
    return (
        <div className="w-full py-52 bg-cover bg-center" style={{
            backgroundImage: `url(${banner})`
        }}>
            <div className="px-20 xs:px-6 text-right">
                <h2 className="text-6xl font-bold">This is what you <br /> came for</h2>
                <Link to="/shop">
                    <button className="px-10 py-2 bg-yellow-400 text-black font-semibold mt-5 font-sans tracking-wider focus:bg-yellow-300">Explore</button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;