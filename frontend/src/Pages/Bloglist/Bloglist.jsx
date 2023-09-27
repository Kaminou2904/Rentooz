import React from 'react';
import './Bloglist.css';
import { useNavigate } from 'react-router-dom';

function Bloglist() {

    const navigate = useNavigate();

    return (
        <div className='mainListing'>
            <div className="mainListingHeader bg-brand-blue w-100 position-fixed top-0 px-3 d-flex align-items-center justify-content-center p-3 px-4">
                <i className="fas fa-chevron-left fs-4 text-white" onClick={() => navigate(-1)}></i>
                <p className="mb-0 w-100 text-white text-center text-uppercase bricolage-bold fs-5">blogs</p>
            </div>

            <div className="blogCardWrap container pt-5 mt-4 px-4">
                this move is awesome
            </div>
        </div>
    );
};

export default Bloglist;