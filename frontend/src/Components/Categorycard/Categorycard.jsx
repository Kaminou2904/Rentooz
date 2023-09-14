import React from 'react';
import './Categorycard.css';
import { useNavigate } from 'react-router-dom';

function Categorycard(props) {

  const navigate = useNavigate();

  return (
    <div className='mainCategorycard mt-2' onClick={()=> navigate('/listing')}>
        <div className="mainCategorycardimg border-brand-blue rounded-brand p-3">
            <img src={props.img} alt="mist fan" className='img-fluid' />
        </div>
        <span className="cateTxt nunito-bold">{props.text}</span>
    </div>
  );
};

export default Categorycard;