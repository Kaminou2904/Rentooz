import React from 'react';
import './Partcard.css';

function Partcard(props) {
  return (
    <div className='mainCategorycard text-center mt-3'>
        <div className="mainCategorycardimg border-brand-blue rounded-brand p-3">
            <img src={props.img} alt="mist fan" className='img-fluid' />
        </div>
        <span className="cateTxt d-block bricolage-bold text-capitalize">{props.text}</span>
        <span className='mb-0 lh-sm bricolage-bold d-block p-2 px-3 bg-brand-skin rounded-3 text-white'>{props.price}</span>
    </div>
  )
}

export default Partcard;