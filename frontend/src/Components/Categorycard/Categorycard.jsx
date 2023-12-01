import React from 'react';
import './Categorycard.css';
import { useNavigate } from 'react-router-dom';

function Categorycard(props) {

  const navigate = useNavigate();

  return (
    <div className='mainCategorycard mt-2' onClick={()=> navigate(`${props.text.replace(/ /g, '-')}-on-rent-in-pune`)}>
        <div className="mainCategorycardimg border-brand-blue rounded-brand p-3">
            <img src={props.img} alt="mist fan" className='img-fluid' />
        </div>
        <h3 className="cateTxt nunito-bold text-capitalize mt-1">{props.text}</h3>
    </div>
  );
};

export default Categorycard;