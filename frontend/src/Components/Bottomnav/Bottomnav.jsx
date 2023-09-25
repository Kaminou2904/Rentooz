import React, { useEffect, useState } from 'react';
import './Bottomnav.css';
import { useNavigate, useParams } from 'react-router-dom';

function Bottomnav() {

    const navigate = useNavigate();

    const {category} = useParams();

    const [navTabIndex, setNavTabIndex] = useState(0);

    const navTabFunc = (i) => {
        setNavTabIndex(i);
    }

    useEffect(()=>{
        if(category){
            setNavTabIndex(3);
        }
    }, [category])

    return (
        <div className="bottomNavCont container mx-autp pb-2">
            <div className="bottomNav mx-auto px-3 d-flex justify-content-between align-items-center rounded-pill bg-brand-blue">
                <div className={`tabIcon  align-items-center mb-0 p-0 ${navTabIndex === 0 ? 'activeNavTab' : ''}`} onClick={() => { navTabFunc(0); navigate('/') }}>
                    <div className="svgWraper d-flex">
                        <img src="./images/Home.svg" alt="suitcase" className={`img-fluid svgicon ${navTabIndex === 0 ? 'svgiconActive' : ''}`} />
                        {
                            navTabIndex === 0 ? (
                                <span className="navTabSpan bricolage-bold ms-2">Home</span>
                            ) : ''
                        }
                    </div>
                </div>
                <div className={`tabIcon  align-items-center mb-0 p-0 ${navTabIndex === 3 ? 'activeNavTab' : ''}`} onClick={() => { navTabFunc(3); navigate('/View All') }}>
                    <div className="svgWraper d-flex">
                        <img src="./images/download.svg" alt="suitcase" className={`img-fluid svgicon ${navTabIndex === 3 ? 'svgiconActive' : ''}`} />
                    </div>
                    {
                        navTabIndex === 3 ? (
                            <span className="navTabSpan bricolage-bold extrasvg ms-2">Product</span>
                        ) : ''
                    }
                </div>
                <div className={`tabIcon  align-items-center mb-0 p-0 ${navTabIndex === 1 ? 'activeNavTab' : ''}`} onClick={() => { navTabFunc(1); window.open('https://wa.me/+917666911159', '_self') }}>
                    <div className="svgWraper d-flex">
                        <img src="./images/whatsapp.svg" alt="suitcase" className={`img-fluid svgicon whaticon ${navTabIndex === 1 ? 'svgiconActive' : ''}`} />
                    </div>
                    {
                        navTabIndex === 1 ? (
                            <span className="navTabSpan bricolage-bold ms-2">Chat</span>
                        ) : ''
                    }
                </div>
                <div className={`tabIcon  align-items-center text-center mb-0 p-0 ${navTabIndex === 2 ? 'activeNavTab' : ''}`} onClick={() => { navTabFunc(2); window.open('tel:+917666911159', '_self') }}>
                    <div className="svgWraper d-flex">
                        <img src="./images/phone-call.svg" alt="suitcase" className={`img-fluid svgicon whaticon ${navTabIndex === 2 ? 'svgiconActive' : ''}`} />
                    </div>
                    {
                        navTabIndex === 2 ? (
                            <span className="navTabSpan bricolage-bold ms-2">Call</span>
                        ) : ''
                    }
                </div>

            </div>
        </div>
    )
}

export default Bottomnav