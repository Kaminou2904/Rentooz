import React, { useCallback, useEffect, useState } from 'react';
import './Home.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Categorycard from '../../Components/Categorycard/Categorycard';
import Data from '../../Data/Product.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Productcard from '../../Components/Productcard/Productcard';
import Bottomnav from '../../Components/Bottomnav/Bottomnav';
import { Link, useNavigate } from 'react-router-dom';
import Cardgroup from '../../Components/Cardgroup/Cardgroup';
import { Helmet } from 'react-helmet';

function Home() {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // const [topnav, setTopnav] = useState(0);

    const [searchInpu, setSearchInpu] = useState('none');
    const [searchTxt, setSearchTxt] = useState('');
    const [searchSuggetionDiv, setSearchSuggetionDiv] = useState('none');
    const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
    const [searchResult, setSearchresult] = useState([]);
    const [searchBtn, setSearchbtn] = useState('38px')
    const [herotxt, setHerotxt] = useState('block');
    const [psudodiv, setPsudodiv] = useState('none');
    const [firstcate, setFirstcate] = useState([]);
    const [catedata, setCatedata] = useState([]);
    const [hiddenTxt, setHiddenTxt] = useState('none');

    // const topNavFunc = (x) => {
    //     setTopnav(x);
    // }

    const caroSettings = {
        infinite : true,
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              },
            },
          ],
    }

    const responsiveSet = {
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 3,
        centerMode: true,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              },
            },
          ],
    }

    const searchIconClick = () => {
        setSearchInpu('block');
        setHerotxt('none');
        setSearchbtn('100%');
        setPsudodiv('block');
    }

    const profinder = useCallback(() => {
        const query = searchTxt.toLowerCase();
        const filteredPro = Object.keys(Data).filter((category) => category.toLowerCase().includes(query));
        if (filteredPro.length > 0) {
            const resultObjects = filteredPro.map((cate) => ({ cate }))
            setSearchresult(resultObjects);
            setSearchSuggetionDiv('block');
        } else {
            setSearchresult(['product not found']);
            setSearchSuggetionDiv('none');
        }
    }, [searchTxt]);

    const handleKeyDown = (e) => {
        if (searchResult.length > 0) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedSuggestion((prev) =>
                    prev < searchResult.length - 1 ? prev + 1 : prev
                );
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedSuggestion((prev) => (prev > 0 ? prev - 1 : prev));
            } else if (e.key === 'Enter') {
                if (selectedSuggestion >= 0) {
                    window.location.href = `/${searchResult[selectedSuggestion].cate}`;
                } else {
                    e.preventDefault();
                }
            }
        }
    };


    useEffect(() => {
        profinder();
    }, [searchTxt, profinder])

    useEffect(() => {
        setSearchSuggetionDiv('none');
    }, []);

    const psudoClick = () => {
        setSearchInpu('none');
        setHerotxt('block');
        setSearchbtn('38px');
        setPsudodiv('none');
        setSearchSuggetionDiv('none');
    }

    // console.log(Data['mist fan'].mainicon);

    const productPrinter = () => {
        const firstdata = [];
        const maincateData = [];
        for (const product in Data) {
            maincateData.push({ procate: product, icon: Data[product].mainicon })
            firstdata.push(Data[product].products[0]);
        };
        return { firstdata, maincateData };
    };

    useEffect(() => {
        const firstdata = productPrinter().firstdata;
        setFirstcate(firstdata);
        const maindata = productPrinter().maincateData;
        setCatedata(maindata);
    }, []);

    return (
        <div className='mainHome container p-0'>
            <Helmet>
                <link ref="canonical" url="https://www.rentooze.in/"></link>
            </Helmet>
            <div className="mainHeader d-flex justify-content-between align-items-center">
                <div className="headerLogoWraper py-4 mt-2">
                    <img src="./images/Rentooze Logo New.png" className='img-fluid' alt="Rentooze logo" />
                </div>
                <Bottomnav />
            </div>

            <div className="psudoDiv" style={{ display: psudodiv }} onClick={psudoClick}></div>

            <div className={`heroDiv mob-hero-div px-4 mt-2 align-items-center ${searchBtn === '100%' ? 'justify-content-end' : 'justify-content-between'}`}>
                <h2 className='heroTxt mb-0 bricolage-bold text-brand-skin text-nowrap' style={{ display: herotxt }}>Stay Cool, Pay Smart<br /> <span className="text-brand-blue bricolage-regular">The Ultimate Cooling <br />Rental Solutions in Pune</span></h2>
                <div className={`searchIcon d-flex justify-content-center align-items-center border-brand-skin py-4 px-2 ${searchBtn === '100%' ? 'rounded-brand' : 'rounded-pill'}`} onClick={searchIconClick} style={{ width: searchBtn }}>
                    <input
                        type="text"
                        name="search"
                        className='form-control border-0 shadow-none bricolage-light text-muted m-0 p-0 ps-2' id="searchinpu"
                        placeholder='Search something'
                        style={{ display: searchInpu }}
                        value={searchTxt}
                        onChange={(e) => setSearchTxt(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e)}
                    />
                    <i className={`fas fa-search text-brand-skin fs-5 ${searchBtn === '100%' ? 'me-2' : ''}`}></i>
                </div>
            </div>

            <div className={`heroDiv desk-hero-div mt-2 align-items-center justify-content-between w-100`}>
                <h2 className='heroTxt herotxt-desk mb-0 bricolage-bold text-brand-skin text-nowrap'>Stay Cool, Pay Smart<br /> <span className="text-brand-blue bricolage-regular">The Ultimate Cooling <br />Rental Solutions in Pune</span></h2>
                <div className={`searchIcon d-flex justify-content-center align-items-center border-brand-skin py-3 px-2 rounded-brand w-100`}>
                    <input
                        type="text"
                        name="search"
                        className='form-control border-0 shadow-none bricolage-light text-muted m-0 p-0 ps-2' id="searchinpu"
                        placeholder='Search something'
                        value={searchTxt}
                        onChange={(e) => setSearchTxt(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e)}
                    />
                    <i className={`fas fa-search text-brand-skin fs-5 me-2`}></i>
                </div>
            </div>

            <div className="searchSuggetionDiv px-4" style={{ display: searchSuggetionDiv }}>
                <div className="searchSuggetion p-2 bg-white shadow">
                    {
                        searchResult.map((result, ind) => (
                            <Link key={ind} className={`nav-link ${selectedSuggestion === ind ? 'selectedSugg': ''}`} to={`/${result.cate}`} onMouseOver={() => setSelectedSuggestion(ind)} onMouseOut={() => setSelectedSuggestion(-1)}><p className="mb-0 border-bottom mt-2 fs-5">{result.cate}</p></Link>
                        ))
                    }
                </div>
            </div>

            {/* <div className="dailyTabs container mt-4">
                <div className="tabsWrap d-flex bg-brand-gray rounded-pill">
                    <div className="emptyTab bg-brand-blue p-2 px-3 w-50 rounded-pill" style={{ left: topnav === 0 ? '3%' : '47%' }}></div>
                    <div className="dailyTab text-uppercase w-50 text-center" onClick={() => { topNavFunc(0) }}>
                        <p className={`dailySpan p-2 bricolage-medium rounded-pill mb-0 ${topnav === 0 ? 'text-white' : 'text-muted'}`}>daily</p>
                    </div>
                    <div className="customTab text-uppercase w-50 text-center" onClick={() => { topNavFunc(1) }}>
                        <p className={`customSpan p-2 bricolage-medium rounded-pill mb-0 ${topnav === 1 ? 'text-white' : 'text-muted'}`}>custom</p>
                    </div>
                </div>
            </div> */}

            <div className="categoryWrap text-center mt-5 px-4 mb-5">
                <p className="fs-4 text-muted text-start mx-auto bricolage-bold mb-3">EXPLORE OUR PRODUCTS</p>
                <div className="categoryCardWrap d-flex flex-wrap p-0 m-0">
                    {
                        catedata.map((catdata, ind) => (
                            <div key={ind} className="category-card-wrap p-1">
                                <Categorycard key={ind} img={catdata.icon} text={catdata.procate} />
                            </div>
                        ))
                    }
                    <div className="category-card-wrap p-1">
                        <Categorycard img="../images/Spare parts.png" text="mist fan parts" />
                    </div>
                </div>
            </div>

            {/* <div className="categoryWrap text-center mt-5 px-4 mb-5">
                <p className="fs-4 text-muted text-start mx-auto bricolage-bold mb-3">PRODUCTS TO BUY</p>
                <div className="categoryCardWrap d-flex flex-wrap p-0 m-0">
                    {
                        catedata.map((catdata, ind) => (
                            <div className="category-card-wrap p-1">
                                <Categorycard key={ind} img={catdata.icon} text={catdata.procate} buy={true} />
                            </div>
                        ))
                    }
                    <div className="category-card-wrap p-1">
                        <Categorycard img="../images/Spare parts.png" text="mist fan parts" />
                    </div>
                </div>
            </div> */}

            <div className="testDiv my-5 px-4">
                <Slider {...caroSettings}>
                    <Cardgroup name="silver mist fan" name1="silent air cooler" name2="portable AC 1.5 ton"/>
                    <Cardgroup name="electric heater" name1="air cooler" name2="pedestal fan 26 inch"/>
                    <Cardgroup name="portable AC" name1="black mist fan" name2="silent air cooler"/>
                </Slider>
            </div>

            <div className="ourProducts mt-4">
                <p className="heading fs-3">Most Rented Products</p>
                <div className="productCardWraper mt-3">
                    <div className="productCardWrap pt-4 mb-5">
                        <Slider {...responsiveSet}>
                            {
                                firstcate.map((catedata) => (
                                    <div className='item px-2 d-flex justify-content-center' key={catedata.id}>
                                        <Productcard cate={catedata.cate} img={catedata.img[0]} name={catedata.name} keyfeat={catedata.keyfeat} price={catedata.price} />
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>

            <div className="callToActionDiv">
                <h1 className="grayText text-gray fs-6 mb-0 mt-3 px-5 lh-sm bricolage-bold text-capitalize text-center">Elevent Your Pune Events with premium event material for rent.</h1>
                <h2 className="grayText text-brand-blue fs-6 px-4 mb-0 lh-sm bricolage-extrabold text-capitalize text-center">explore our wide range of products from portable ACs to mist fans, air coolers to electric heaters.</h2>
                <div className="container text-center">
                    <button className='callBtn btn border-brand-skin mt-3 text-brand-blue bricolage-bold px-4' onClick={() => window.open('tel:+919819570211', '_self')}><i className="fas fa-phone-alt text-brand-blue me-3"></i>CALL NOW</button>
                </div>
            </div>

            <div className="aboutRentooze px-4 mt-5">
                <div className="aboutHeading d-flex justify-content-start align-items-start mb-0 text-brand-skin bricolage-bold fs-4">About <div className="aboutLogo mb-0">
                    <img src="./images/Rentooze Logo New.png" className='img-fluid ps-2 mb-0' alt="Rentooze logo" /></div></div>
                <p className="aboutTxt mb-0 text-gray bricolage-medium mt-1">At Rentooze, we're your trusted partner for event
                    material rentals that add convenience and charm
                    to your Pune occasions. With a focus on providing
                    top-notch solutions, we offer an extensive selection
                    of items, including portable ACs, pedeatal fans, mist fans, air coolers and electric heaters for rent, mist
                    fans on rent, and more. Our
                    dedication is to ensure your Pune events are a
                    seamless and comfortable experience</p>
            </div>

            <div className="services d-flex flex-wrap justify-content-center mt-5 px-4">
                <p className="mb-4 text-brand-skin fs-5 bricolage-bold text-center w-100">Our <span className="text-brand-blue bricolage-bold">Services</span></p>
                <div className="serviceCard col-md-6 mb-2 text-center">
                    <div className="serviceCardImg mt-3">
                        <img src="./images/5Stand AC.png" className='img-fluid p-2' alt="service icon" />
                    </div>
                    <h2 className="mb-0 bricolage-bold text-brand-blue fs-6">Portable ACs on Rent</h2>
                    <p className="serviceTxt text-gray mb-0 mt-1">Stay cool this summer with Rentooz's Portable ACs on Rent in Pune. Beat the heat hassle-free with our efficient, affordable, and convenient cooling solutions. Don't let the sweltering heat get to you – choose Rentooz for instant relief!</p>
                </div>
                <div className="serviceCard col-md-6 mb-2 text-center">
                    <div className="serviceCardImg mt-3">
                        <img src="./images/2Fan.png" alt="service icon" className='img-fluid' />
                    </div>
                    <h2 className="mb-0 bricolage-bold text-brand-blue fs-6">Pedestal Fans on Rent</h2>
                    <p className="serviceTxt text-gray mb-0 mt-1">Rentooz offers Pedestal Fans on Rent in Pune. Stay cool with our efficient, adjustable-height fans, suitable for indoor and outdoor use. They're energy-efficient and quiet, providing comfort without high electricity costs or noise disturbances. Beat the heat affordably with Rentooz. Book yours today and enjoy a cool Pune summer!</p>
                </div>
                <div className="serviceCard col-md-6 mb-2 text-center">
                    <div className="serviceCardImg mt-3">
                        <img src="./images/3Mist Fan.png" className='img-fluid p-2' alt="service icon" />
                    </div>
                    <h2 className="mb-0 bricolage-bold text-brand-blue fs-6">Mist Fans on Rent</h2>
                    <p className="serviceTxt text-gray mb-0 mt-1">Revitalize Your Events in Pune with Rentooz's Exclusive Mist Fans for Rent! Don't miss out on the cooling sensation; our Mist Fans are the key to unforgettable outdoor gatherings! Grab the ultimate cooling solution today and make every event a cool success.</p>
                </div>
                <div className="serviceCard col-md-6 mb-2 text-center">
                    <div className="serviceCardImg mt-3">
                        <img src="./images/Heater.png" className='img-fluid p-2' alt="service icon" />
                    </div>
                    <h2 className="mb-0 bricolage-bold text-brand-blue fs-6">Electric Heater on Rent</h2>
                    <p className="serviceTxt text-gray mb-0 mt-1">Are you looking to beat the winter chill in Pune? Look no further! We provide top-notch Electric Heaters on rent in Pune. Stay warm and cozy with our efficient Electric Heaters. Don't let the cold get to you – rent a Electric Heater today and enjoy the warmth you deserve.</p>
                </div>
                <div className="serviceCard col-md-6 mb-2 mt-0 text-center">
                    <div className="serviceCardImg mt-3">
                        <img src="./images/COOLER.png" className='img-fluid' alt="service icon" />
                    </div>
                    <h2 className="mb-0 bricolage-bold text-brand-blue fs-6">Air Cooler on Rent</h2>
                    <p className="serviceTxt text-gray mb-0 mt-1">Whether you're planning a special event or just need daily cooling relief, our air coolers are your ideal solution.Beat the heat this summer with our top-notch air coolers available for rent in Pune, including Hadapsar, Kothrud & More.</p>
                </div>
            </div>

            <div className="whyDiv px-4 mt-5 pt-3">
                <div className="whyHeading mb-4">
                    <p className="mb-0 fs-5 bricolage-bold text-brand-skin lh-sm">WHY <span className="bricolage-bold text-brand-blue">CHOOSE</span></p>
                    <div className="whyLogo">
                        <img src="./images/Rentooze Logo New.png" alt="whylogo" className="img-fluid" />
                    </div>
                </div>
                <div className="whyCard mb-3">
                    {/* <p className="mb-0 lh-sm text-gray bricolage-bold">Quality Assurance:</p> */}
                    <p className="whyTxt mb-0 lh-sm text-gray">Planning an event in Pune? Look no further than Rentooze for all your cooling and heating needs. We provide a wide range of event materials for rent, ensuring your event is comfortable and memorable.</p>
                </div>
                <div className="whyCard mb-3">
                    {/* <p className="mb-0 lh-sm text-gray bricolage-bold">Wide Selection:</p> */}
                    <p className="whyTxt mb-0 lh-sm text-gray">Discover the best event cooling and heating solutions in Pune with Rentooze. We offer Mist Fans, Pedestal Fans, Portable ACs, Electric Heaters, Air Coolers, and Mist Fan Parts for rent. Get quality event materials today!</p>
                </div>
                <div className="whyCard mb-3">
                    {/* <p className="mb-0 lh-sm text-gray bricolage-bold">Convenient Rentals:</p> */}
                    <p className="whyTxt mb-0 lh-sm text-gray">Rentooze is a premier event materials rental company based in Pune, committed to making your events unforgettable. With a focus on customer satisfaction, we offer top-notch Mist Fans, Pedestal Fans, Portable ACs, Electric Heaters, Air Coolers, and Mist Fan Parts. Our dedication to quality service sets us apart in the industry.</p>
                </div>
                <p className={`readBtn text-center text-brand-skin ${hiddenTxt === 'block' ? 'd-none' : 'd-block'}`} onClick={()=> {setHiddenTxt('block')}}>Read more...</p>
            </div>

            <div className="hiddenText px-4" style={{display: hiddenTxt}}>
                <p className="whyTxt mb-3 lh-sm text-gray">Rent a Mist Fan in Pune to add a refreshing touch to your events. Our Mist Fans are designed to cool large areas efficiently, ensuring a comfortable atmosphere for your guests. Elevate your event in Pune to new heights of comfort by renting our state-of-the-art Mist Fans. Designed to efficiently cool expansive areas, these fans guarantee a refreshing atmosphere that will leave a lasting impression on your guests. Imagine a gentle breeze carrying a fine mist, transforming your outdoor wedding, corporate gathering, or any special occasion into an oasis of cool tranquility. Our Mist Fans not only provide relief from the heat but also add a touch of sophistication to your event, ensuring that every moment is enjoyed in comfort.</p>
                <p className="whyTxt mb-3 lh-sm text-gray">Our rental process is seamless, allowing you to focus on the other aspects of event planning. With an eco-friendly approach, our Mist Fans use water efficiently, minimizing environmental impact. Make a statement at your event – prioritize guest comfort and well-being. Contact us now to secure your Mist Fan rental and guarantee a cool and memorable experience for everyone attending your event in Pune.</p>
                <h2 className='fs-5 bricolage-bold mb-0'>Pedestal Fan on Rent In Pune</h2>
                <p className="whyTxt mb-3 lh-sm text-gray">
                Keep your event cool and breezy with our Pedestal Fans for rent in Pune. These fans are portable, making them easy to place in any corner, providing excellent airflow. Beat the heat at your event in Pune with our Pedestal Fans available for rent. Ensure a comfortable atmosphere for your guests as they enjoy the festivities in a cool and breezy environment. Our Pedestal Fans are not just functional; they add a touch of convenience to any occasion. Their portability allows for flexible placement, ensuring optimal airflow in any corner of your venue. Whether it's an outdoor celebration or an indoor gathering, our Pedestal Fans are the perfect solution to keep everyone cool and content.</p>
                <p className="whyTxt mb-3 lh-sm text-gray">Say goodbye to sweaty discomfort and hello to a refreshing ambiance. Our Pedestal Fans are designed to provide efficient cooling while being easy to set up and operate. Don't let the rising temperatures put a damper on your event—rent our Pedestal Fans and create an inviting space where your guests can relax and enjoy every moment. Contact us today to secure your Pedestal Fans and make sure your event in Pune is not just memorable but also pleasantly cool.</p>
                <h2 className='fs-5 bricolage-bold mb-0'>Portable AC on Rent In Pune</h2>
                <p className="whyTxt mb-3 lh-sm text-gray">
                Beat the heat with our Portable ACs available for rent in Pune. These AC units are compact, powerful, and energy-efficient, ensuring a cool environment for your event. Stay cool and comfortable in Pune's sweltering heat by renting our top-of-the-line Portable Air Conditioners. Perfect for events, our compact yet powerful AC units are designed to provide efficient cooling wherever you need it. Whether you're hosting a party, conducting a business event, or simply want to keep your indoor space comfortable, our Portable ACs are the ideal solution. With easy portability and user-friendly features, our units guarantee a refreshing atmosphere without the hassle of a permanent installation.</p>
                <p className="whyTxt mb-3 lh-sm text-gray">Our Portable ACs not only deliver exceptional cooling performance but also prioritize energy efficiency, ensuring you stay cool without breaking the bank. Beat the heat and create a pleasant environment for your guests or colleagues with our reliable and affordable rental options. Don't let the rising temperatures dampen your plans – choose our Portable ACs for a cool and enjoyable experience in Pune. Contact us today to secure your rental and make your event a refreshing success.</p>
                <h2 className='fs-5 bricolage-bold mb-0'>Electric Heater on Rent In Pune </h2>
                <p className="whyTxt mb-3 lh-sm text-gray">
                For chilly evenings, our Electric Heaters for rent in Pune are the perfect solution. Create a cozy ambiance for your guests with our reliable heating options. Transform your chilly evenings into warm and inviting gatherings with our Electric Heaters available for rent in Pune. Embrace the comfort of a cozy ambiance for your guests as our reliable heating solutions provide the perfect remedy for the winter chill. Whether you're hosting a party, event, or just seeking warmth for a relaxing evening, our Electric Heaters are designed to meet your needs. With user-friendly controls and efficient heating capabilities, these heaters not only add warmth but also create an inviting atmosphere that enhances the overall experience for everyone in attendance.</p>
                <p className="whyTxt mb-3 lh-sm text-gray">At our rental service, we prioritize both functionality and style. Our Electric Heaters are not only powerful in terms of performance but also sleek and aesthetically pleasing, seamlessly blending into any setting. Make the most of your gatherings by ensuring your guests stay comfortable and cozy throughout the event. Contact us now to elevate your event experience with our Electric Heaters for rent in Pune, and let us help you create memorable moments in the warmth of a well-heated environment.</p>
                <p className="whyTxt mb-3 lh-sm text-gray">Transform your events in Pune into cool, comfortable affairs with Rentooze's top-notch Air Coolers available for rent. Our eco-friendly cooling solutions are designed to enhance your event experience while keeping sustainability at the forefront. Beat the heat and create a pleasant atmosphere for your guests without breaking the bank. With Rentooze, you not only get relief from soaring temperatures but also contribute to a greener, more environmentally conscious event.</p>
                <p className="whyTxt mb-3 lh-sm text-gray">Choosing Rentooze means opting for a cost-effective and efficient cooling solution that aligns with your commitment to sustainability. Our Air Coolers are not only energy-efficient but also use environmentally friendly cooling methods, ensuring minimal impact on the planet. Don't let the heat spoil your event; instead, create a refreshing ambiance that leaves a lasting impression. Contact Rentooze today to elevate your event cooling experience in Pune while making a positive contribution to the environment.</p>
                <p className="whyTxt mb-3 lh-sm text-gray">Are you in Pune or nearby areas and in need of top-notch Mist Fan Parts? Look no further than Rentooze! We pride ourselves on providing high-quality, genuine parts to ensure your Mist Fans remain in optimal condition. At Rentooze, we understand the importance of reliable misting systems, especially in warm climates, and we're committed to offering parts that meet the highest standards.</p>
                <p className="whyTxt mb-3 lh-sm text-gray">Our extensive range of Mist Fan Parts is designed to cater to various needs, whether you require replacements or upgrades. Trust in Rentooze to deliver not only the parts you need but also the assurance of durability and performance. With our commitment to quality, you can rest easy knowing that your misting system will continue to provide effective cooling and comfort. Don't compromise on the efficiency of your Mist Fans—choose Rentooze for genuine and reliable Mist Fan Parts in Pune and nearby locations.</p>
                <p className="whyTxt mb-3 lh-sm text-gray">Contact us today to explore our range of Mist Fan Parts and experience the difference that genuine quality can make in keeping your Mist Fans operating at their best. Your satisfaction is our priority, and we are dedicated to being your trusted partner for all misting system needs.</p>
                <p className="whyTxt mb-3 lh-sm text-gray">Rentooze is your trusted partner for event materials in Pune and nearby locations. With a wide range of cooling and heating solutions, we ensure your event is a success. Experience the Rentooze difference today!</p>
                <p className="readBtn text-center text-brand-skin" onClick={()=> {setHiddenTxt('none')}}>...Read less</p>
            </div>

            <div className="blogDiv d-flex flex-wrap justify-content-between px-4 mt-5">
                <p className="mb-4 fs-5 bricolage-bold text-brand-blue lh-sm w-100">Blogs</p>
                {/* <div className="blogCard px-2 col-md-6" onClick={()=> navigate('/blog/tower-ac-vs-traditional-ac')}>
                    <div className="blogCardImg mb-2">
                        <img src="../images/fanvacblog.jpg" alt="ac vs fan" className="img-fluid" />
                    </div>
                    <div className="blogCardTxt px-3 mb-4">
                        <p className="mb-0 text-brand-blue bricolage-bold lh-sm fs-14">Tower AC vs. Traditional AC:
                            <span className="mb-0 text-gray bricolage-bold lh-sm ms-2 fs-14">Which is Better for Pune's Climate?</span>
                        </p>
                        <p className="glimps mb-0 text-muted bricolage-medium lh-sm">Ah, the age-old battle of cooling titans! Pune's climate, with its scorching summers, demands a powerful cooling solution</p>
                    </div>
                </div> */}
                <div className="blogCard px-2 col-md-6">
                    <div className="blogCardImg mb-2" onClick={()=> navigate('/blog/benifits-of-mist-fan')}>
                        <img src="../images/portacblog.jpg" alt="ac vs fan" className="img-fluid" />
                    </div>
                    <div className="blogCardTxt px-3 mb-4">
                        <p className="mb-0 text-brand-blue bricolage-bold lh-sm fs-14">Why to choose Portable AC:
                            <span className="mb-0 text-gray bricolage-bold lh-sm ms-2 fs-14">Compared to Traditional AC portable AC is a cheaper.</span>
                        </p>
                        <p className="glimps mb-0 text-muted bricolage-medium lh-sm">Summer is around the corner you might be exploring different cooling solutions</p>
                    </div>
                </div>
            </div>

            <div className="contactDiv px-4 mt-5">
                <p className="contactHeading px-3 mb-0 text-center bricolage-extrabold text-brand-skin">
                    Have questions<br /> or ready to make your<br /> Pune event extraordinary?
                </p>
                <p className="contactHeading px-3 mb-0 text-center bricolage-extrabold text-brand-blue">
                    Reach out to us today!
                </p>

                <div className="contactForm mt-5 px-4 pb-5 mb-5">
                    <form action="https://formspree.io/f/xpzgyryl" method="post">
                        <input type="text" name='name' className='formInpu form-control shadow-none px-3 mb-2 outline-0 rounded-pill border-dark text-uppercase p-2' placeholder='ENTER YOUR NAME' />
                        <input type="tel" name='phone' className='formInpu form-control shadow-none px-3 mb-2 outline-0 rounded-pill border-dark text-uppercase p-2' placeholder='PHONE NO.' />
                        <input type="mail" name='email' className='formInpu form-control shadow-none px-3 mb-2 outline-0 rounded-pill border-dark text-uppercase p-2' placeholder='EMAIL ADDRESS' />
                        <button type='submit' className='submitBtn btn fs-5 bg-brand-blue rounded-pill text-white text-uppercase bricolage-extrabold w-100'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;