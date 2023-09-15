import React from 'react';
import './Listingcard.css';
import { useNavigate } from 'react-router-dom';

function Lisitngcard() {

  const navigate = useNavigate();

  return (
    <div className='mainListingcard d-flex p-2 px-2 align-items-center rounded-brand border-brand-skin mt-3' onClick={()=>navigate('/detail')}>
        <div className="listingcardImg">
            <img src="../images/mistfanBlack.webp" alt="mist fan" className="img-fluid rounded-brand" />
        </div>
        <div className="listingcardData d-flex flex-column justify-content-between">
            <p className="listincardName mb-0 text-brand-blue lh-sm fs-5 bricolage-bold">
            Mist Fan High End <br /> BLUE TANK
            </p>
            <p className="listingCardcategory mt-3 text-muted mb-0">Category <span className="bricolage-bold tex-uppercase">Mist Fan</span></p>
            <div className="rateNprice d-flex mt-3 justify-content-between align-items-center">
                <p className="listingcardRating mb-0 text-nowrap"><i className="fas fa-star text-warning"></i> 4.9 (202)</p>
                <p className="mb-0 listingcardPrice text-white bg-brand-skin rounded-pill p-1 px-3"><span className="bricolage-bold text-white">₹499</span>/day</p>
            </div>
        </div>
    </div>
  );
};

export default Lisitngcard;