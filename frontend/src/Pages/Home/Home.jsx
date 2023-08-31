import React, { useState } from 'react';
import './Home.css';
import Productcard from '../../Components/Productcard/Productcard';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Home() {

    const [navTabIndex, setNavTabIndex] = useState(0);

    const navTabFunc = (i) => {
        setNavTabIndex(i);
    }

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

            <div className="callToActionDiv">
                <p className="grayText text-gray mb-0 mt-3 px-5 lh-sm bricolage-bold text-capitalize text-center">Elevent Your Pune Events with premium event material for rent.</p>
                <p className="grayText text-brand-blue px-4 mb-0 lh-sm bricolage-extrabold text-capitalize text-center">explore our wide range from stand ACs to big fans, mist fans to portable toilets.</p>
                <div className="container text-center">
                    <button className='callBtn btn border-brand-skin mt-3 text-brand-blue bricolage-bold px-4'><i className="fas fa-phone-alt text-brand-blue me-3"></i>CALL NOW</button>
                </div>
            </div>

            <div className="aboutRentooz px-4 mt-5">
                <div className="aboutHeading d-flex justify-content-start align-items-start mb-0 text-brand-skin bricolage-bold fs-4">About <div className="aboutLogo mb-0">
                    <img src="./images/Rentooz Logo front.png" className='img-fluid ps-2 mb-0' alt="rentooz logo" /></div></div>
                <p className="aboutTxt mb-0 text-gray bricolage-medium mt-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi tempora exercitationem, obcaecati quibusdam magnam natus est deserunt, labore sequi velit, nam commodi inventore possimus voluptatibus!</p>
            </div>

            <div className="services mt-5 px-4">
                <p className="mb-4 text-brand-skin fs-5 bricolage-bold text-center">Our <span className="text-brand-blue bricolage-bold">Services</span></p>
                <div className="serviceCard mb-2 text-center">
                    <div className="serviceCardImg px-5">
                        <img src="./images/Stand AC.png" className='img-fluid p-2' alt="service icon" />
                    </div>
                    <p className="mb-0 bricolage-bold text-brand-blue">Stand AC<span className='text-brand-skin bricolage-bold'>s</span></p>
                    <p className="serviceTxt text-gray mb-0 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magnam nesciunt laudantium fugiat inventore.</p>
                </div>
                <div className="serviceCard mb-2 text-center">
                    <div className="serviceCardImg px-5">
                        <img src="./images/Mist Fan.png" className='img-fluid p-2' alt="service icon" />
                    </div>
                    <p className="mb-0 bricolage-bold text-brand-blue">Stand AC<span className='text-brand-skin bricolage-bold'>s</span></p>
                    <p className="serviceTxt text-gray mb-0 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magnam nesciunt laudantium fugiat inventore.</p>
                </div>
                <div className="serviceCard mb-2 text-center">
                    <div className="serviceCardImg px-5">
                        <img src="./images/Portable Toilet.png" className='img-fluid p-2' alt="service icon" />
                    </div>
                    <p className="mb-0 bricolage-bold text-brand-blue">Stand AC<span className='text-brand-skin bricolage-bold'>s</span></p>
                    <p className="serviceTxt text-gray mb-0 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magnam nesciunt laudantium fugiat inventore.</p>
                </div>
                <div className="serviceCard mb-2 text-center">
                    <div className="serviceCardImg px-5">
                        <img src="./images/Fan.png" className='img-fluid p-2' alt="service icon" />
                    </div>
                    <p className="mb-0 bricolage-bold text-brand-blue">Stand AC<span className='text-brand-skin bricolage-bold'>s</span></p>
                    <p className="serviceTxt text-gray mb-0 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magnam nesciunt laudantium fugiat inventore.</p>
                </div>
                <div className="serviceCard mb-2 text-center">
                    <div className="serviceCardImg px-5">
                        <img src="./images/Event Material.png" className='img-fluid p-2' alt="service icon" />
                    </div>
                    <p className="mb-0 bricolage-bold text-brand-blue">Stand AC<span className='text-brand-skin bricolage-bold'>s</span></p>
                    <p className="serviceTxt text-gray mb-0 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magnam nesciunt laudantium fugiat inventore.</p>
                </div>
            </div>

            <div className="whyDiv px-4 mt-5 pt-3">
                <div className="whyHeading mb-4">
                    <p className="mb-0 fs-5 bricolage-bold text-brand-skin lh-sm">WHY <span className="bricolage-bold text-brand-blue">CHOOSE</span></p>
                    <div className="whyLogo">
                        <img src="./images/Rentooz Logo front.png" alt="whylogo" className="img-fluid" />
                    </div>
                </div>
                <div className="whyCard mb-3">
                    <p className="mb-0 lh-sm text-gray bricolage-bold">Quality Assurance:</p>
                    <p className="whyTxt mb-0 lh-sm text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur officiis assumenda doloremque, architecto ullam.</p>
                </div>
                <div className="whyCard mb-3">
                    <p className="mb-0 lh-sm text-gray bricolage-bold">Quality Assurance:</p>
                    <p className="whyTxt mb-0 lh-sm text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur officiis assumenda doloremque, architecto ullam.</p>
                </div>
                <div className="whyCard mb-3">
                    <p className="mb-0 lh-sm text-gray bricolage-bold">Quality Assurance:</p>
                    <p className="whyTxt mb-0 lh-sm text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur officiis assumenda doloremque, architecto ullam.</p>
                </div>
                <div className="whyCard mb-3">
                    <p className="mb-0 lh-sm text-gray bricolage-bold">Quality Assurance:</p>
                    <p className="whyTxt mb-0 lh-sm text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur officiis assumenda doloremque, architecto ullam.</p>
                </div>
            </div>

            <div className="blogDiv px-4 mt-5">
                <p className="mb-4 fs-5 bricolage-bold text-brand-blue lh-sm">Blogs</p>
                <div className="blogCard">
                    <div className="blogCardImg mb-2">
                        <img src="https://www.cielowigle.com/wp-content/uploads/2020/06/Fan-vs-Ac-final-decision.jpg" alt="ac vs fan" className="img-fluid" />
                    </div>
                    <div className="blogCardTxt px-3 mb-4">
                        <p className="mb-0 text-brand-blue bricolage-bold lh-sm fs-14">Choose the right Cooling solution:
                            <span className="mb-0 text-gray bricolage-bold lh-sm ms-2 fs-14">Lorem ipsum dolor sit amet consectetur.</span>
                        </p>
                    </div>
                </div>
                <div className="blogCard">
                    <div className="blogCardImg mb-2">
                        <img src="https://www.cielowigle.com/wp-content/uploads/2020/06/Fan-vs-Ac-final-decision.jpg" alt="ac vs fan" className="img-fluid" />
                    </div>
                    <div className="blogCardTxt px-3 mb-4">
                        <p className="mb-0 text-brand-blue bricolage-bold lh-sm fs-14">Choose the right Cooling solution:
                            <span className="mb-0 text-gray bricolage-bold lh-sm ms-2 fs-14">Lorem ipsum dolor sit amet consectetur.</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="contactDiv px-4">
                <p className="contactHeading px-3 mb-0 text-center bricolage-extrabold text-brand-skin">
                    Have questions<br /> or ready to make your<br /> Pune event extraordinary?
                </p>
                <p className="contactHeading px-3 mb-0 text-center bricolage-extrabold text-brand-blue">
                    Reach out to us today!
                </p>

                <div className="contactForm mt-5 px-4 pb-5 mb-5">
                    <input type="text" className='formInpu form-control shadow-none px-3 mb-2 outline-0 rounded-pill border-dark text-uppercase p-2' placeholder='ENTER YOUR NAME' />
                    <input type="tel" className='formInpu form-control shadow-none px-3 mb-2 outline-0 rounded-pill border-dark text-uppercase p-2' placeholder='PHONE NO.' />
                    <input type="mail" className='formInpu form-control shadow-none px-3 mb-2 outline-0 rounded-pill border-dark text-uppercase p-2' placeholder='EMAIL ADDRESS' />
                    <button className='submitBtn btn fs-5 bg-brand-blue rounded-pill text-white text-uppercase bricolage-extrabold w-100'>Submit</button>
                </div>
            </div>

            <div className="bottomNavCont container pb-2">
                <div className="bottomNav p-3 px-4 d-flex justify-content-between align-items-center rounded-pill bg-brand-skin">
                    <div className={`tabIcon  align-items-center mb-0 p-0 rounded-pill ${navTabIndex === 0 ? 'activeNavTab' : ''}`} onClick={() => { navTabFunc(0) }}>
                        <div className="svgWraper d-flex">
                            <img src="./images/Home.svg" alt="suitcase" className={`img-fluid svgicon ${navTabIndex === 0 ? 'svgiconActive' : ''}`} />
                            {
                                navTabIndex === 0 ? (
                                    <span className="bricolage-bold ms-2">Home</span>
                                ) : ''
                            }
                        </div>
                    </div>
                    <div className={`tabIcon  align-items-center mb-0 p-0 rounded-pill ${navTabIndex === 1 ? 'activeNavTab' : ''}`} onClick={() => { navTabFunc(1) }}>
                        <div className="svgWraper d-flex">
                            <img src="./images/Chat.svg" alt="suitcase" className={`img-fluid svgicon ${navTabIndex === 1 ? 'svgiconActive' : ''}`} />
                        </div>
                        {
                            navTabIndex === 1 ? (
                                <span className="bricolage-bold ms-2">Chat</span>
                            ) : ''
                        }
                    </div>
                    <div className={`tabIcon  align-items-center text-center mb-0 p-0 rounded-pill ${navTabIndex === 2 ? 'activeNavTab' : ''}`} onClick={() => { navTabFunc(2) }}>
                        <div className="svgWraper d-flex">
                            <img src="./images/SuitCase.svg" alt="suitcase" className={`img-fluid svgicon ${navTabIndex === 2 ? 'svgiconActive' : ''}`} />
                        </div>
                        {
                            navTabIndex === 2 ? (
                                <span className="bricolage-bold ms-2">Book</span>
                            ) : ''
                        }
                    </div>
                    <div className={`tabIcon  align-items-center mb-0 p-0 rounded-pill ${navTabIndex === 3 ? 'activeNavTab' : ''}`} onClick={() => { navTabFunc(3) }}>
                        <div className="svgWraper d-flex">
                            <img src="./images/USer.svg" alt="suitcase" className={`img-fluid svgicon ${navTabIndex === 3 ? 'svgiconActive' : ''}`} />
                        </div>
                        {
                            navTabIndex === 3 ? (
                                <span className="bricolage-bold ms-2">Profile</span>
                            ) : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;