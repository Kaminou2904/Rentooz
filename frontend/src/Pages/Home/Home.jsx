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
    }, [])

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
            <div className="mainHeader">
                <div className="headerLogoWraper mx-auto py-4 mt-2">
                    <img src="./images/Rentooze Logo New.png" className='img-fluid' alt="Rentooze logo" />
                </div>
            </div>

            <div className="psudoDiv" style={{ display: psudodiv }} onClick={psudoClick}></div>

            <div className={`heroDiv px-4 mt-2 d-flex align-items-center ${searchBtn === '100%' ? 'justify-content-end' : 'justify-content-between'}`}>
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
                <p className="fs-4 text-muted text-center mx-auto bricolage-bold mb-3">BROWSE BY CATEGORY</p>
                <div className="categoryCardWrap d-flex justify-content-between flex-wrap ">
                    {
                        catedata.map((catdata, ind) => (
                            <Categorycard key={ind} img={catdata.icon} text={catdata.procate} />
                        ))
                    }
                    <Categorycard img="../images/Spare parts.png" text="mist fan parts" />
                </div>
            </div>

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
                    <button className='callBtn btn border-brand-skin mt-3 text-brand-blue bricolage-bold px-4' onClick={() => window.open('tel:+917666911159', '_self')}><i className="fas fa-phone-alt text-brand-blue me-3"></i>CALL NOW</button>
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
            <Bottomnav />
        </div>
    );
};

export default Home;