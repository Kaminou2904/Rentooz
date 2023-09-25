import React from 'react';
import './Productcard.css';
import { Link } from 'react-router-dom';

function Productcard(props) {
  return (
    <div className='mainProductcard rounded-brand border-brand-skin me-2'>
        <div className={`productcardImg p-3 ${props.bg}`}>
            <img src={props.img} className='img-fluid' alt="handBag" />
        </div>
        <div className="mainProductcardData p-2">
            <Link to={`/${props.category}/${props.name}`} className='nav-link'><p className="mainProductcardName bricolage-bold text-capitalize mb-0 text-brand-blue">{props.name} {props.keyfeat} {props.subcategory}</p></Link>
            <p className="mainProductcardCategory mb-0 text-muted text-uppercase">{props.category}</p>
            <div className="mainProductcardPrice text-brand-purp bricolage-bold fs-5">${props.rentprice} <span className='text-muted bricolage-semibold fs-6 text-capitalize'>/{props.rentperiod}</span></div>
        </div>
    </div>
  );
};

export default Productcard;