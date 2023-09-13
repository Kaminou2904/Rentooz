import React from 'react';
import './Categorycard.css';

function Categorycard(props) {
  return (
    <div className='mainCategorycard mt-2'>
        <div className="mainCategorycardimg border-brand-blue rounded-brand p-2">
            <img src={props.img} alt="mist fan" className='img-fluid' />
        </div>
        <span className="cateTxt nunito-bold">{props.text}</span>
    </div>
  );
};

export default Categorycard;