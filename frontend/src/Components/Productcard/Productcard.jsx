import React from 'react';
import './Productcard.css';
import { Link } from 'react-router-dom';

function Productcard() {
  return (
    <div className='mainProductCard border-brand-skin p-3 pb-2 pt-3'>
        <div className="productCardImg">
            <img src="../images/mistfanBlack.webp" className='img-fluid' alt="mist fan" />
        </div>
        <div className="productCardData">
            <div className="productName">
                <Link to='/detail' className='nav-link'><p className="mb-0 text-brand-blue text-center lh-sm bricolage-extrabold mt-2">Mist Fan High End <br /><span className="text-uppercase bricolage-extrabold">blue tank</span></p></Link>
            </div>
            <div className="productCardRating mt-1 d-flex justify-content-center align-items-center">
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <p className="mb-0 text-muted bricolage-semibold">4.9 (202)</p>
            </div>
            <div className="productCardPrice">
                <p className="mb-0 text-white bg-brand-skin px-4 mt-3 mb-1 mx-auto bricolage-medium text-center rounded-pill">
                    <span className='bricolage-extrabold'>₹499</span>/day
                </p>
            </div>
        </div>
    </div>
  )
}

export default Productcard;