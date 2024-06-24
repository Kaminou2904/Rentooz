import React, { useEffect } from 'react';
import './Parts.css';
import { useNavigate } from 'react-router-dom';
import Partcard from '../../Components/Partcard/Partcard';
import Data from '../../Data/Parts.json';
import { Helmet } from 'react-helmet';

function Parts() {

    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])

    const navigate = useNavigate();

  return (
    <div className='mainParts'>
        <Helmet>
            <title>Mist Fan Parts for Rent in Pune | Rentooze</title>
            <meta name="description" content="Find mist fan parts for rent in Pune at Rentooze. Keep your cooling system running smoothly with our affordable and convenient rental options. Explore now!" />
        </Helmet>
        <div className="mainListingHeader bg-brand-skin w-100 position-fixed top-0 px-3 d-flex align-items-center justify-content-center p-3 px-4">
            <i className="fas fa-chevron-left fs-4 text-white" onClick={()=> navigate(-1)}></i>
            <p className="mb-0 w-100 text-white text-center text-uppercase bricolage-bold fs-5">mist fan spare parts</p>
        </div>

        <div className="partsCardwrap px-4 d-flex justify-content-between flex-wrap mt-5 pt-3 pb-5 mb-5">
            {
                Data.parts.map((par, index)=>(
                    <Partcard key={index} img={par.img} text={par.name} price={par.price}/>
                ))
            }
        </div>

        <div className="floatCall container position-fixed">
            <div className="w-100 p-3 rounded-brand bg-brand-skin text-white text-center text-uppercase"><a href="tel:+919819570211" className="nav-link bricolage-bold fs-5">enquire Now</a></div>
        </div>
    </div>
  )
}

export default Parts