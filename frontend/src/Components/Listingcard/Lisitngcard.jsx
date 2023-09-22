import React from 'react';
import './Listingcard.css';
import { useNavigate } from 'react-router-dom';

function Lisitngcard(props) {

  const navigate = useNavigate();

  return (
    <div className='mainListingcard d-flex p-2 px-2 align-items-center rounded-brand border-brand-skin text-capitalize mt-3' onClick={()=>{
      props.cate === 'mist fan parts'? window.open('https://wa.me/+91766611159', '_self'): navigate(`/${props.cate}/${props.name}`)
    }}>
        <div className="listingcardImg">
            <img src={props.img} alt="mist fan" className="img-fluid rounded-brand" />
        </div>
        <div className="listingcardData d-flex flex-column justify-content-between ps-2">
            <p className="listincardName mb-0 text-brand-blue lh-sm fs-5 bricolage-bold">
            {props.name} <br /> {props.keyfeat}
            </p>
            <p className="listingCardcategory mt-3 text-muted mb-0">Category <span className="bricolage-bold tex-uppercase">{props.cate}</span></p>
            <div className="rateNprice d-flex mt-3 justify-content-between align-items-center">
                <p className="listingcardRating mb-0 text-nowrap"><i className="fas fa-star text-warning"></i> 4.9 (202)</p>
                <p className="mb-0 listingcardPrice text-white bg-brand-skin rounded-pill p-1 px-3"><span className="bricolage-bold text-white">₹{props.price}</span>{props.cate === 'mist fan parts'? '': '/day'}</p>
            </div>
        </div>
    </div>
  );
};

export default Lisitngcard;