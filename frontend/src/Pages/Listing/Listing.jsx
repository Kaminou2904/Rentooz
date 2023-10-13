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

    let listData;
    let partdata;
    const proarr = [];
    if (category === "View All") {
        for (const prokey in Data) {
            Data[prokey].products.forEach((pro) => {
                proarr.push(pro);
            })
        }
    } else {
        if (category === 'mist fan parts') {
            partdata = Parts.parts;
        } else {
            listData = Data[category].products;
        }
    }

    if(partdata){
        const sortProductsByPrice = (arr) => {
            return partdata =  arr.slice().sort((a, b) => a.price - b.price)
        };
        sortProductsByPrice(partdata);
    };

    if(listData){
        const sortProductsByPrice = (arr) => {
            return listData =  arr.slice().sort((a, b) => a.price - b.price)
        };
        sortProductsByPrice(listData);
    };

    return (
        <div className='mainListing'>
            {
                category.toLocaleLowerCase() === 'mist fan' && (
                    <Helmet>
                        <title>Mist Fan on Rent in Pune: Rentooze's Top Choice</title>
                        <meta name="description" content="Beat the Pune heat with Rentooz's mist fan on rent. Experience the breeze of luxury cooling. Get your mist fan today!" />
                        <meta name="keywords" content="mist fan on rent, mist fan on rent near me, misting fan rental near me, cooling fan rental, rent misting fans near me, mist fan for rent near me, mist fan on rent in pune" />
                    </Helmet>
                )
            }
            {
                category.toLocaleLowerCase() === 'portable ac' && (
                    <Helmet>
                        <title>Affordable AC on Rent in Pune | Stay Cool this Summer!</title>
                        <meta name="description" content="Looking for portable AC on rent in Pune? Beat the heat with our cost-effective air conditioning solutions. Stay comfortable all summer long. Rent now!" />
                        <meta name="keywords" content="portable air conditioner rental, portable ac rental, portable ac on rent, portable ac on rent in pune, portable ac on rent near me, standing ac on rent, portable ac unit rental, portable ac on rental, portable ac on rent pune" />
                    </Helmet>
                )
            }
            {
                category.toLocaleLowerCase() === 'pedestal fan' && (
                    <Helmet>
                        <title>Pedestal Fan On Rent In Pune | Stay Cool in Pune with Rentooz!</title>
                        <meta name="description" content="Don't sweat it out! Grab a Pedestal Fan on rent in Pune and stay cool. Quick, easy, and affordable solutions for beating the heat!" />
                        <meta name="keywords" content="pedestal fan on rent in pune, pedestal fan on rent, pedestal fan on rent near me, pedestal fan for rent, stand fan on rent near me, pedestal fan rental near me, standing fan on rent" />
                    </Helmet>
                )
            }
            <div className="mainListingHeader bg-brand-blue w-100 position-fixed top-0 px-3 d-flex align-items-center justify-content-center px-4">
                <i className="fas fa-chevron-left fs-4 text-white" onClick={() => navigate(-1)}></i>
                <h1 className="mb-0 w-100 text-white text-uppercase bricolage-bold fs-5 ps-3">{category} On Rent</h1>
                <Bottomnav />
            </div>
            <div className="container p-0">
                <div className="cardWraper px-4 mt-5 pt-4 pb-5 mb-5">
                    <div className="cardWrap row p-0 justify-content-start">
                        {
                            category === 'mist fan parts' ? (
                                partdata.map((part) => (
                                    <Lisitngcard key={part.id} img={part.img} name={part.name} price={part.price} cate={part.cate} />
                                ))
                            ) : (
                                category === 'View All' ? (
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
        </div>
    )
}

export default Listing