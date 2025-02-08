import React, { useState } from 'react';
import './Categorycard.css';
import { useNavigate } from 'react-router-dom';

function Categorycard(props) {

  const navigate = useNavigate();
  const [popdis, setPopdis] = useState('none');

  const canceleFunc = (e) => {
    if(!e.target.closest('.rent-or-buy-popup')){
      setPopdis('none')
    }
  }

  return (
    <>
      <div 
        className='mainCategorycard mt-2 w-100' 
        onClick={()=> 
          setPopdis(props.text.toLowerCase() !== 'mist fan parts' ? 'flex': navigate('/mist-fan-parts-on-rent-in-pune'))
      }>
          <div className="mainCategorycardimg border-brand-blue rounded-brand p-3">
              <img src={props.img} alt="mist fan" className='img-fluid' />
          </div>
          <h3 className="cateTxt nunito-bold text-capitalize mt-1">{props.text}</h3>
      </div>

      <div className="rent-or-buy-pop-wrap px-2" style={{display: popdis}} onClick={(e) => canceleFunc(e)}>
        <div className="rent-or-buy-popup bg-white p-3 rounded-brand py-4">
          <h2 className="text-center bricolage-bold fs-3 mb-3">I want to</h2>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn rent-btn px-3 w-50 bricolage-bold me-2" onClick={() => navigate(`${props.text.replace(/ /g, '-')}-on-rent-in-pune`)}>RENT</button>
            <button className="btn buy-btn px-3 w-50 bricolage-bold" onClick={() => navigate(`/buy/${props.text.replace(/ /g, '-')}-in-pune`)}>BUY</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categorycard;