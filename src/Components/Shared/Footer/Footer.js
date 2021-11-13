import React from 'react';

const Footer = () => {
    return (
        <div className="pt-10">
            <div className="px-20 sm:px-10 xs:px-5 grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 gap-5 pb-4 border-b border-gray-300">
                <div className="text-lg">
                    <h2 className="text-xl font-bold">SUPPORT</h2>
                    <p>FAQ</p>
                    <p>Virtual Shopping</p>
                    <p>Jewelry Care</p>
                    <p>Shipping + Returns</p>
                    <p>Warranty</p>
                    <p>Ring Sizer</p>
                    <p>Accessibility</p>
                    <p>Contact Us</p>
                </div>
                <div className="text-lg">
                    <h2 className="text-xl font-bold">ABOUT US</h2>
                    <p>Our Mission</p>
                    <p>Sustainability</p>
                    <p>Stores</p>
                    <p>Piercing Studio</p>
                    <p>Careers</p>
                </div>
                <div className="text-lg">
                    <h2 className="text-xl font-bold">JOIN THE FINE CREW</h2>
                    <p>Insider info on new arrivals, early access, and everything fine.</p>
                    <input className="px-5 py-1 border border-gray-600" type="text" placeholder="Youe email" />
                </div>
            </div>
            <div className="flex items-center justify-between xs:flex-col sm:flex-col py-3 px-20 xs:px-5 sm:px-10">
                <p>© 2021 Jewelliaa inc.</p>
                <div className="flex items-center gap-2">
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;