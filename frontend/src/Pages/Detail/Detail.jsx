import React from 'react';
import './Detail.css';
import { useNavigate } from 'react-router-dom';

function Detail() {

    const navigate = useNavigate();

  return (
    <div className='mainDetail bg-brand-skin'>
        <div className="mainDetailHeader px-4 py-3 pt-4 d-flex container">
            <div className="backBtn fs-4">
                <i className="fas fa-chevron-left text-white fs-5" onClick={()=> navigate(-1)}></i>
            </div>
            <p className="mb-0 bricolage-bold text-white text-end w-50 ms-4 fs-5">Mist fan</p>
        </div>
        <div className="detailProContainer rounded-pill rounded-bottom-0 bg-white">
            <div className="mainImgWrap pt-4 px-5">
                <img src="../images/mistfanBlack.webp" className='img-fluid p-2' alt="mist fan" />
            </div>
            <div className="proImages d-flex justify-content-around px-5 mt-3">
                <div className="proImgWrap p-2 border-brand-skin">
                    <img src="../images/mistfanBlack.webp" className='img-fluid' alt="" />
                </div>
                <div className="proImgWrap p-2 border-brand-skin">
                    <img src="../images/mistfanBlack.webp" className='img-fluid' alt="" />
                </div>
                <div className="proImgWrap p-2 border-brand-skin">
                    <img src="../images/mistfanBlack.webp" className='img-fluid' alt="" />
                </div>
                <div className="proImgWrap p-2 border-brand-skin">
                    <img src="../images/mistfanBlack.webp" className='img-fluid' alt="" />
                </div>
            </div>
            <div className="detailProData mt-4 container px-4">
                <p className="detailProName mb-0 fs-3 text-capitalize text-start bricolage-bold text-brand-blue">mist fan high end <br /> <span className='text-uppercase bricolage-bold text-brand-blue'>blue tank</span></p>
                <div className="detailMainRating mt-1 d-flex align-items-center">
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <p className="mb-0 text-muted bricolage-bold ms-1">4.9 (202)</p>
                </div>
                <div className="mainDetailPriceDiv d-flex justify-content-between mt-4">
                    <div className="detailPriceTag border-brand-skin bricolage-bold bg-brand-skin p-2 fs-5 text-white text-center">₹499 <br /><span className='bricolage-medium'>/day</span></div>
                    <div className="detailPriceTag border-brand-skin bricolage-bold p-2 fs-5 text-muted text-center">₹999 <br /><span className='bricolage-medium'>/week</span></div>
                    <div className="detailPriceTag border-brand-skin bricolage-bold p-2 fs-5 text-muted text-center">₹1299 <br /><span className='bricolage-medium'>/month</span></div>
                </div>
                <p className="mainDetailProAboutTxt mb-0 text-muted bricolage-medium mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem maiores dignissimos eum velit explicabo optio excepturi reiciendis.</p>
            </div>
            <div className="checkBtnWrap container py-1 mt-2">
                <button className='checkBtn btn bg-brand-skin text-uppercase py-2 w-100 text-white bricolage-bold fs-4'>Check Dates</button>
            </div>
        </div>
    </div>
  )
}

export default Detail;