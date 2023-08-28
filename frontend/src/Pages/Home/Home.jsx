import React from 'react';
import './Home.css';
import Productcard from '../../Components/Productcard/Productcard';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Home() {
    return (
        <div className='mainHome'>
            <div className="mainHeader">
                <div className="headerLogoWraper mx-auto py-4 mt-2">
                    <img src="./images/Rentooz logo front.png" className='img-fluid' alt="rentooz logo" />
                </div>
            </div>

            <div className="heroDiv px-4 mt-2 d-flex justify-content-between align-items-center">
                <h2 className='heroTxt mb-0 bricolage-regular text-brand-blue'>Your Trusted <br /> <span className="text-brand-skin bricolage-extrabold">Rental Partner</span></h2>
                <div className="searchIcon border-brand-skin rounded-pill py-4 px-2">
                    <i className="fas fa-search text-brand-skin fs-5"></i>
                </div>
            </div>

            <div className="dailyTabs container mt-4">
                <div className="tabsWrap d-flex bg-brand-gray rounded-pill">
                    <div className="dailyTab text-uppercase w-50 text-center">
                        <p className="dailySpan p-1 text-white bricolage-medium bg-brand-skin rounded-pill mb-0">daily</p>
                    </div>
                    <div className="customTab text-uppercase w-50 text-center">
                        <p className="customSpan p-1 bricolage-medium  text-muted rounded-pill mb-0">custom</p>
                    </div>
                </div>
            </div>

            <div className="ourProducts mt-4">
                <p className="heading">Our Products</p>
                <div className="productCardWraper mt-3">
                    <div className="productCardWrap">
                        <OwlCarousel className='owl-theme' stagePadding={80} items={1} margin={10} loop dots={false}>
                            <div className='item d-flex justify-content-center'>
                                <Productcard />
                            </div>
                            <div className='item d-flex justify-content-center'>
                                <Productcard />
                            </div>
                            <div className='item d-flex justify-content-center'>
                                <Productcard />
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;