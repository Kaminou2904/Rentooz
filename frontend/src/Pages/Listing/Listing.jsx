import React, { useEffect } from 'react';
import './Listing.css';
import Lisitngcard from '../../Components/Listingcard/Lisitngcard'
import { useNavigate, useParams } from 'react-router-dom';
import Data from '../../Data/Product.json'
import Bottomnav from '../../Components/Bottomnav/Bottomnav';
import Parts from '../../Data/Parts.json';
import { Helmet } from 'react-helmet';

function Listing() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { category } = useParams();
    const navigate = useNavigate();

    const formattedCate = category.replace(/-/g, ' ').replace(' on rent in pune', '');

    function HTMLStringToElement({ htmlString }) {
        return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
    }

    let listData;
    let partdata;
    let extracont;
    let mainfaq;
    const proarr = [];
    if (formattedCate === "View All") {
        for (const prokey in Data) {
            Data[prokey].products.forEach((pro) => {
                proarr.push(pro);
            })
        }
    } else {
        if (formattedCate === 'mist fan parts') {
            partdata = Parts.parts;
        } else {
            listData = Data[formattedCate].products;
            extracont = Data[formattedCate].extracontent;
            mainfaq = Data[formattedCate].mainfaqs;
        }
    }

    if (partdata) {
        const sortProductsByPrice = (arr) => {
            return partdata = arr.slice().sort((a, b) => a.price - b.price)
        };
        sortProductsByPrice(partdata);
    };

    if (listData) {
        const sortProductsByPrice = (arr) => {
            return listData = arr.slice().sort((a, b) => a.price - b.price)
        };
        sortProductsByPrice(listData);
    };

    return (
        <div className='mainListing'>
            {
                formattedCate.toLocaleLowerCase() === 'mist fan' && (
                    <Helmet>
                        <title>Water Sprinkler Mist Fan On Rent @499 In Pune - Rentooze</title>
                        <meta name="description" content="Water sprinkler mist fan available for rent in Pune at an affordable price of just ₹499
                        Mist Fan On Hire, Mist Fan rentals for your guests at your Indoor & outdoor events in Pune. Contact Rentooze Now!" />
                        <meta name="keywords" content="mist fan on rent, mist fan on rent in Pune, water fan rental, cooling fan rental, misting fan rental near me, misting fans for rent near me, Cool Mist fan rentals near me, mist fan on rent near me, mist fan for rent near me, water misting fan rental, sprinkler fan on rent, Rentooze, Rentooze Event Material on rent" />
                    </Helmet>
                )
            }
            {
                formattedCate.toLocaleLowerCase() === 'portable ac' && (
                    <Helmet>
                        <title>Beat the Heat with Rentooze: Portable AC on Rent in Pune for Cool Comfort Anywhere!</title>
                        <meta name="description" content="Discover the coolest way to stay comfortable with Rentooze's portable AC rental service in Pune. Get the best portable AC units on rent near you. Stay cool, stay flexible!" />
                        <meta name="keywords" content="Portable AC on rent, Portable AC on rent in Pune, portable ac rental, Portable AC on rent near me, portable ac, portable air conditioner, small portable air conditioner, mini air conditioner, small air conditioner, best portable air conditioner, portable ac unit" />
                    </Helmet>
                )
            }
            {
                formattedCate.toLocaleLowerCase() === 'pedestal fan' && (
                    <Helmet>
                        <title>Standing Pedestal Fan On Rent in Pune @499 | Rentooze</title>
                        <meta name="description" content="Looking for a standing fan on rent in Pune? Explore our range of high-quality pedestal fans on rent at ₹499.  pedestal Fan rentals for your guests at your Indoor & outdoor events in Pune. Contact Rentooze Now!" />
                        <meta name="keywords" content="pedestal fan on rent in Pune, pedestal fan on rent, pedestal fan rental, pedestal fan, pedestal fan on rent near me, standing fan, Standing fan on rent in Pune , stand up fan, best pedestal fan, stand fan price, Rentooze, Rentooze Event Material on rent" />
                    </Helmet>
                )
            }
            {
                formattedCate.toLocaleLowerCase() === 'air cooler' && (
                    <Helmet>
                        <title>Rent Air Coolers in Pune - Affordable & Reliable</title>
                        <meta name="description" content="Rentooz offers affordable and reliable air cooler rentals in Pune. Stay comfortable this summer with our efficient cooling solutions. Rent today!" />
                        <meta name="keywords" content="air cooler on rent, air cooler on rent in pune, cooler on rent pune, rent air cooler near me, rent cooler in pune, air cooler on rent near me, cooler on rent in pune near me" />
                    </Helmet>
                )
            }
            {
                formattedCate.toLocaleLowerCase() === 'electric heater' && (
                    <Helmet>
                        <title>Rent Electric Heaters in Pune @499 with Rentooze Today!</title>
                        <meta name="description" content="Rent energy-efficient electric heaters in Pune from Rentooze. Choose from a variety of options for any space. Cost-effective, flexible, and eco-friendly solutions. Don't miss out – get cozy now!" />
                        <meta name="keywords" content="electric heater on rent, electric heater rental, electric heater rental near me, industrial heaters for rent, space heater hire, portable heater for rent, room heater on rent, commercial portable heater rental, Rentooze, Rentooze Event Material on rent" />
                    </Helmet>
                )
            }
            <div className="mainListingHeader bg-brand-blue w-100 position-fixed top-0 px-3 d-flex align-items-center justify-content-center px-4">
                <i className="fas fa-chevron-left fs-4 text-white" onClick={() => navigate(-1)}></i>
                <h1 className="mb-0 w-100 text-white text-uppercase bricolage-bold fs-5 ps-3">{formattedCate} On Rent</h1>
                <Bottomnav />
            </div>
            <div className="container p-0">
                <div className="cardWraper px-4 mt-5 pt-4 pb-5 mb-5">
                    <div className="cardWrap row p-0 justify-content-start">
                        {
                            formattedCate === 'mist fan parts' ? (
                                partdata.map((part) => (
                                    <Lisitngcard key={part.id} img={part.img} name={part.name} price={part.price} cate={part.cate} />
                                ))
                            ) : (
                                formattedCate === 'View All' ? (
                                    proarr.map((data) => (
                                        <Lisitngcard key={data.id} img={data.img[0]} name={data.name} keyfeat={data.keyfeat} price={data.price} cate={data.cate} />
                                    ))
                                ) : (
                                    listData.map((data) => (
                                        <Lisitngcard key={data.id} img={data.img[0]} name={data.name} keyfeat={data.keyfeat} price={data.price} cate={data.cate} />
                                    ))
                                )
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="container extracont mt-5 pt-5">
                <HTMLStringToElement htmlString={extracont} />
            </div>
            <div className="container mt-4">
                <h2 className="bricolage-bold fs-5">FAQs</h2>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    {
                        formattedCate === 'mist fan parts' ? (
                            <div className="empty"></div>
                        ) : (
                            formattedCate === 'View All' ? (
                                <div className="empty"></div>
                            ) : (
                                mainfaq.map((faq, index) => (
                                    <div key={index} className="accordion-item mb-2 border-0">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button border shadow-none rounded-brand collapsed bricolage-bold" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                                                {faq[0]}
                                            </button>
                                        </h2>
                                        <div id={`flush-collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">{faq[1]}</div>
                                        </div>
                                    </div>
                                ))
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Listing