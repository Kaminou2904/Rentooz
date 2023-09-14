import React, { useState } from 'react';
import './Home.css';
import Productcard from '../../Components/Productcard/Productcard';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Categorycard from '../../Components/Categorycard/Categorycard';

function Home() {

    const [topnav, setTopnav] = useState(0);
    const [navTabIndex, setNavTabIndex] = useState(0);
    const [searchInpu, setSearchInpu] = useState('none');
    const [searchBtn, setSearchbtn] = useState('38px')
    const [herotxt, setHerotxt] = useState('block');
    const [psudodiv, setPsudodiv] = useState('none')

    const topNavFunc = (x) => {
        setTopnav(x);
    }

    const navTabFunc = (i) => {
        setNavTabIndex(i);
    }

    const searchIconClick = () => {
        setSearchInpu('block');
        setHerotxt('none');
        setSearchbtn('100%');
        setPsudodiv('block');
    }

    const psudoClick = () => {
        setSearchInpu('none');
        setHerotxt('block');
        setSearchbtn('38px');
        setPsudodiv('none');
    }

    return (
        <div className='mainHome'>
            <div className="mainHeader">
                <div className="headerLogoWraper mx-auto py-4 mt-2">
                    <img src="./images/Rentooz logo front.png" className='img-fluid' alt="rentooz logo" />
                </div>
            </div>

            <div className="psudoDiv" style={{ display: psudodiv }} onClick={psudoClick}></div>

            <div className={`heroDiv px-4 mt-2 d-flex align-items-center ${searchBtn === '100%' ? 'justify-content-end' : 'justify-content-between'}`}>
                <h2 className='heroTxt mb-0 bricolage-regular text-brand-blue text-nowrap' style={{ display: herotxt }}>Your Trusted <br /> <span className="text-brand-skin bricolage-extrabold">Rental Partner</span></h2>
                <div className={`searchIcon d-flex justify-content-center align-items-center border-brand-skin py-4 px-2 ${searchBtn === '100%' ? 'rounded-brand' : 'rounded-pill'}`} onClick={searchIconClick} style={{ width: searchBtn }}>
                    <input type="text" name="search" className='form-control border-0 shadow-none bricolage-light text-muted m-0 p-0 ps-2' id="searchinpu" placeholder='Search something' style={{ display: searchInpu }} />
                    <i className={`fas fa-search text-brand-skin fs-5 ${searchBtn === '100%' ? 'me-2' : ''}`}></i>
                </div>
            </div>

            <div className="dailyTabs container mt-4">
                <div className="tabsWrap d-flex bg-brand-gray rounded-pill">
                    <div className="emptyTab bg-brand-skin p-2 px-3 w-50 rounded-pill" style={{ left: topnav === 0 ? '3%' : '47%' }}></div>
                    <div className="dailyTab text-uppercase w-50 text-center" onClick={() => { topNavFunc(0) }}>
                        <p className={`dailySpan p-2 bricolage-medium rounded-pill mb-0 ${topnav === 0 ? 'text-white' : 'text-muted'}`}>daily</p>
                    </div>
                    <div className="customTab text-uppercase w-50 text-center" onClick={() => { topNavFunc(1) }}>
                        <p className={`customSpan p-2 bricolage-medium rounded-pill mb-0 ${topnav === 1 ? 'text-white' : 'text-muted'}`}>custom</p>
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

            <div className="categoryWrap text-center mt-5 px-4 mb-5">
                <p className="fs-4 text-muted text-center mx-auto bricolage-bold mb-3">BROWSE BY CATEGORY</p>
                <div className="categoryCardWrap d-flex justify-content-between flex-wrap ">
                    <Categorycard img="../images/1 Event Material.png" text="Event Material" />
                    <Categorycard img="../images/2Fan.png" text="Fan" />
                    <Categorycard img="../images/3Mist Fan.png" text="Mist Fan" />
                    <Categorycard img="../images/4Portable Toilet.png" text="Portable Toilet" />
                    <Categorycard img="../images/5Stand AC.png" text="Stand AC" />
                    <Categorycard img="../images/viewMore.png" text="View All" />
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
                <p className="aboutTxt mb-0 text-gray bricolage-medium mt-1">At Rentooz, we're your trusted partner for event
                    material rentals that add convenience and charm
                    to your Pune occasions. With a focus on providing
                    top-notch solutions, we offer an extensive selection
                    of items, including stand ACs, fans for rent, mist
                    fans on rent, portable toilets, and more. Our
                    dedication is to ensure your Pune events are a
                    seamless and comfortable experience</p>
            </div>

            <div className="services mt-5 px-4">
                <p className="mb-4 text-brand-skin fs-5 bricolage-bold text-center">Our <span className="text-brand-blue bricolage-bold">Services</span></p>
                <div className="serviceCard mb-2 text-center">
                    <div className="serviceCardImg mt-3">
                        <img src="./images/5Stand AC.png" className='img-fluid p-2' alt="service icon" />
                    </div>
                    <p className="mb-0 bricolage-bold text-brand-blue">Stand AC<span className='text-brand-skin bricolage-bold'>s</span></p>
                    <p className="serviceTxt text-gray mb-0 mt-1">Keep your Pune guests cool and comfortable with
                        our stand ACs, designed to deliver efficient
                        cooling for indoor and outdoor events.</p>
                </div>
                <div className="serviceCard mb-2 text-center">
                    <div className="serviceCardImg mt-3">
                        <img src="./images/2Fan.png" alt="service icon" className='img-fluid' />
                    </div>
                    <p className="mb-0 bricolage-bold text-brand-blue">Fans For Rent</p>
                    <p className="serviceTxt text-gray mb-0 mt-1">Beat the heat at your Pune events with our variety
                        of fans available for rent. From classic fans to
                        contemporary designs, we've got the right
                        fan for your event.</p>
                </div>
                <div className="serviceCard mb-2 text-center">
                    <div className="serviceCardImg mt-3">
                        <img src="./images/3Mist Fan.png" className='img-fluid p-2' alt="service icon" />
                    </div>
                    <p className="mb-0 bricolage-bold text-brand-blue">Mist Fans on Rent</p>
                    <p className="serviceTxt text-gray mb-0 mt-1">Create a refreshing atmosphere for your outdoor
                        Pune gatherings with our mist fans on rent.
                        They add a touch of coolness to warm occasions.</p>
                </div>
                <div className="serviceCard text-center">
                    <div className="serviceCardImg mt-3">
                        <img src="./images/1 Event Material.png" className='img-fluid p-2' alt="service icon" />
                    </div>
                    <p className="mb-0 bricolage-bold text-brand-blue">Event Material Rentals</p>
                    <p className="serviceTxt text-gray mb-0 mt-1">Beyond cooling solutions, explore our range
                        of event materials for rent in Pune, including big fans,
                        outdoor coolers, and more.</p>
                </div>
                <div className="serviceCard mb-2 mt-0 text-center">
                    <div className="serviceCardImg mt-3">
                        <img src="./images/4Portable Toilet.png" className='img-fluid' alt="service icon" />
                    </div>
                    <p className="mb-0 bricolage-bold text-brand-blue">Portable Toilets on Wheels</p>
                    <p className="serviceTxt text-gray mb-0 mt-1">Ensure convenience for your Pune guests with our
                        portable toilets on wheels. Easy to set up
                        and maintain, they provide hassle-free comfort.</p>
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
                    <p className="whyTxt mb-0 lh-sm text-gray">Our event materials undergo rigorous checks to ensure top-notch quality and performance.</p>
                </div>
                <div className="whyCard mb-3">
                    <p className="mb-0 lh-sm text-gray bricolage-bold">Wide Selection:</p>
                    <p className="whyTxt mb-0 lh-sm text-gray">Our diverse inventory ensures you find the right solutions to match your Pune event's theme and requirements.</p>
                </div>
                <div className="whyCard mb-3">
                    <p className="mb-0 lh-sm text-gray bricolage-bold">Convenient Rentals:</p>
                    <p className="whyTxt mb-0 lh-sm text-gray">With a seamless online booking process, renting
                        event materials in Pune has never been easier.</p>
                </div>
                <div className="whyCard mb-3">
                    <p className="mb-0 lh-sm text-gray bricolage-bold">Flexible Durations:</p>
                    <p className="whyTxt mb-0 lh-sm text-gray">Rent for the duration that suits your Pune event's
                        timeline, whether it's a single day or an
                        extended period.</p>
                </div>
                <div className="whyCard mb-3">
                    <p className="mb-0 lh-sm text-gray bricolage-bold">Prompt Delivery:</p>
                    <p className="whyTxt mb-0 lh-sm text-gray">We provide timely delivery and pickup services,
                        ensuring your Pune event planning remains
                        stress-free.</p>
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
                <div className="bottomNav px-3 d-flex justify-content-between align-items-center rounded-pill bg-brand-skin">
                    <div className={`tabIcon  align-items-center mb-0 p-0 ${navTabIndex === 0 ? 'activeNavTab' : ''}`} onClick={() => { navTabFunc(0) }}>
                        <div className="svgWraper d-flex">
                            <img src="./images/Home.svg" alt="suitcase" className={`img-fluid svgicon ${navTabIndex === 0 ? 'svgiconActive' : ''}`} />
                            {
                                navTabIndex === 0 ? (
                                    <span className="navTabSpan bricolage-bold ms-2">Home</span>
                                ) : ''
                            }
                        </div>
                    </div>
                    <div className={`tabIcon  align-items-center mb-0 p-0 ${navTabIndex === 1 ? 'activeNavTab' : ''}`} onClick={() => { navTabFunc(1) }}>
                        <div className="svgWraper d-flex">
                            <img src="./images/Chat.svg" alt="suitcase" className={`img-fluid svgicon ${navTabIndex === 1 ? 'svgiconActive' : ''}`} />
                        </div>
                        {
                            navTabIndex === 1 ? (
                                <span className="navTabSpan bricolage-bold ms-2">Chat</span>
                            ) : ''
                        }
                    </div>
                    <div className={`tabIcon  align-items-center text-center mb-0 p-0 ${navTabIndex === 2 ? 'activeNavTab' : ''}`} onClick={() => { navTabFunc(2) }}>
                        <div className="svgWraper d-flex">
                            <img src="./images/SuitCase.svg" alt="suitcase" className={`img-fluid svgicon ${navTabIndex === 2 ? 'svgiconActive' : ''}`} />
                        </div>
                        {
                            navTabIndex === 2 ? (
                                <span className="navTabSpan bricolage-bold ms-2">Book</span>
                            ) : ''
                        }
                    </div>
                    <div className={`tabIcon  align-items-center mb-0 p-0 ${navTabIndex === 3 ? 'activeNavTab' : ''}`} onClick={() => { navTabFunc(3) }}>
                        <div className="svgWraper d-flex">
                            <img src="./images/USer.svg" alt="suitcase" className={`img-fluid svgicon ${navTabIndex === 3 ? 'svgiconActive' : ''}`} />
                        </div>
                        {
                            navTabIndex === 3 ? (
                                <span className="navTabSpan bricolage-bold ms-2">Profile</span>
                            ) : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;