import React from 'react';
import './Reviewcard.css';

function Reviewcard(props) {

    const starNum = [];
    for (let index = 1; index < props.star; index++) {
        starNum.push(index);
    };

  return (
    <div className='mainReviewcard d-flex mt-4'>
        <div className="reviewImg">
            <img src={props.img} alt="naruto uzumaki" className="img-fluid rounded-circle" />
        </div>
        <div className="reviewData ps-3">
            <p className="reviewName mb-0 bricolage-bold text-brand-blue">
                {props.name} 
                <span className="nameStars">
                    <i className="fas fa-star text-warning ms-1"></i>
                    {
                        starNum.map((num, i)=>(
                            <i key={i} className="fas fa-star text-warning"></i>
                        ))
                    }
                </span>
            </p>
            <p className="reviewTxt mb-0 bricolage-light lh-sm">{props.txt}</p>
            <p className="reviewDate text-muted bricolage-bold mb-0">{props.date}</p>
        </div>
    </div>
  )
}

export default Reviewcard