import React from 'react';
import './Smprocard.css';
import { Link } from 'react-router-dom';

function Smprocard(props) {
  return (
        <div className='mainsmProcard border-brand-skin rounded-brand'>
            <div className={`smproductcardImg p-3 py-2 ${props.bg}`}>
                <Link to={`/${props.category.replace(/ /g, '-')}/${props.name.replace(/ /g, '-')}-on-rent-in-pune`} className='nav-link'><img src={props.img} className='img-fluid' alt="handBag" /></Link>
            </div>
            <div className="mainsmProductcardData p-2">
                <Link to={`/${props.category.replace(/ /g, '-')}/${props.name.replace(/ /g, '-')}-on-rent-in-pune`} className='nav-link'><p className="mainsmProductcardName bricolage-bold text-capitalize mb-0 text-brand-blue">{props.name.slice(0, 7)}...</p></Link>
                <p className="mainsmProductcardCategory mb-0 text-muted text-uppercase">{props.category}</p>
                {/* <div className="mainsmProductcardPrice text-brand-purp lh-sm bricolage-bold">₹{props.rentprice} <span className='text-muted bricolage-semibold'>/Day</span></div> */}
            </div>
        </div>
  );
};

export default Smprocard;