import React, { useEffect } from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';

function About() {

    useEffect(()=>{
        window.scrollTo(0,0);
    }, []);

    const navigate = useNavigate();

    return (
        <div className='mainAbout'>
            <div className="aboutHeader bg-brand-blue w-100 position-fixed top-0 px-3 d-flex align-items-center justify-content-center p-3 px-4">
                <i className="fas fa-chevron-left fs-4 text-white" onClick={() => navigate(-1)}></i>
                <p className="mb-0 w-100 text-white text-center text-uppercase bricolage-bold fs-5">About</p>
            </div>
            <div className="aboutContent container mt-5 px-4 pt-4">
                <div className="row align-items-center mt-2">
                    <div className="col-md-6">
                        <h1 className="fs-2 mt-2 bricolage-bold">About <span className="text-brand-blue bricolage-bold">Rentooze</span></h1>
                        <p className="mb-0 text-muted bricolage-medium lh-sm">
                            Welcome to Rentooze.com, your trusted partner in affordable rentals. Founded by Rentooze, our platform is dedicated to bringing convenience and accessibility to your doorstep. We specialize in offering a wide range of products, from air conditioners and laptops to cameras, fitness equipment, and gaming consoles, available for rent
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src="../images/about.svg" alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="row flex-wrap-reverse align-items-center mt-2">
                    <div className="col-md-6">
                        <img src="../images/mission.svg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <p className="mb-0 text-muted bricolage-medium lh-sm">
                            At Rentooze.com, our mission is simple: we want to bridge the gap between affordability and productivity. We understand that not everyone can afford the high cost of these essential and sometimes expensive items. That's why we've created a platform that allows anyone to access these quality products at a fraction of the price. Our commitment to making these items accessible to everyone is driven by our belief in enhancing productivity and improving the overall quality of life for our valued customers. Join us at Rentooze.com and experience the convenience of affordable rentals today
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;