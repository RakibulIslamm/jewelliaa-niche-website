import React from 'react';
import Categories from '../Categories/Categories';
import Banner from './Banner/Banner';
import CustomerReview from './CustomerReview/CustomerReview';
import HomeProducts from './HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Banner></Banner>
            <Categories></Categories>
            <HomeProducts></HomeProducts>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;