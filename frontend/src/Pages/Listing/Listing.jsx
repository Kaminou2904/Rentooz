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
            <Helmet>
                <title>Rentooz | {category} on rent</title>
                <meta name="description" content={`${category} on rent in Pune`} />
            </Helmet>
            <div className="mainListingHeader bg-brand-blue w-100 position-fixed top-0 px-3 d-flex align-items-center justify-content-center p-3 px-4">
                <i className="fas fa-chevron-left fs-4 text-white" onClick={() => navigate(-1)}></i>
                <h1 className="mb-0 w-100 text-white text-center text-uppercase bricolage-bold fs-5">{category} On Rent</h1>
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
                <Bottomnav />
            </div>
        </div>
    )
}

export default Listing