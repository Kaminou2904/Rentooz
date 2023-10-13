import React, { useState, useRef, useEffect } from 'react';
import './Detail.css';
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Reviewcard from '../../Components/Reviewcard/Reviewcard';
import Data from '../../Data/Product.json';

function Detail() {

    const { proname } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const [imgtrans, setImgtrans] = useState(false);
    const [imgindex, setImgindex] = useState(0);
    const [dateval, setDateval] = useState(new Date());
    const [bookpopup, setBookpopup] = useState('none');
    const [mainheight, setMainheight] = useState('auto');
    const [loadingpopup, setLoadingpopup] = useState('none');
    const [thankpopup, setThankpopup] = useState('none');
    const datePickerRef = useRef(null);

    let foundPro = null;
    for (const productkey in Data) {
        const products = Data[productkey].products;
        foundPro = products.find((e) => e.name === proname);
        if (foundPro) {
            break;
        }
    }

    const featurearr = [];
    foundPro.features.map((feat) => {
        const featnname = Object.entries(feat);
        return featurearr.push(featnname);
    });

    const [mainImg, setmainimg] = useState(foundPro.img[0]);

    const detstarNum = [];
    for (let index = 1; index <= 5; index++) {
        detstarNum.push(index);
    };

    const imgTransi = () => {
        setImgtrans(true)
        setTimeout(() => {
            setImgtrans(false)
        }, 500);
    }

    const submitFunc = () => {
        setLoadingpopup('flex');
        setBookpopup('none')
        setTimeout(() => {
            setLoadingpopup('none');
            setThankpopup('flex');
        }, 5000);
    }

    return (
        <div className='mainDetail bg-brand-blue' style={{ height: mainheight }}>
            <div className="mainDetailHeader px-4 d-flex align-items-center container">
                <div className="backBtn fs-4">
                    <i className="fas fa-chevron-left text-white fs-5" onClick={() => navigate(-1)}></i>
                </div>
                <p className="mb-0 bricolage-bold text-white text-capitalize w-75 ms-4 fs-5">{foundPro.cate} on rent</p>
            </div>
            <div className="detailProContainer d-flex flex-wrap rounded-pill rounded-bottom-0 bg-white">
                <div className="col-md-5 p-0 m-0">
                    <div className="mainImgWrap text-center pt-4 px-5">
                        <img src={mainImg} className={`img-fluid text-center p-2 ${imgtrans ? 'mainImgImg' : ''}`} alt="mist fan" />
                    </div>
                    <div className="proImages d-flex justify-content-center px-5 mt-3">
                        {
                            foundPro.img.map((img, index) => (
                                <div key={index} className={`proImgWrap me-2 p-2 ${imgindex === index ? 'border-brand-blue' : 'border-brand-skin'}`}>
                                    <img src={img} className='img-fluid' alt="" onClick={(e) => { setmainimg(e.target.src); imgTransi(); setImgindex(index) }} />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="col-md-7 p-0 m-0 data-container">
                    <div className="detailProData mt-4 container px-4">
                        <p className="detailProName mb-0 fs-3 text-capitalize text-start bricolage-bold text-brand-blue">{proname} <br /> <span className='text-uppercase bricolage-bold text-brand-blue'>{foundPro.keyfeat}</span></p>
                        <p className="detailMainRating mt-1 d-flex align-items-center">
                            {
                                detstarNum.map((mun, i) => (
                                    <i key={i} className="fas fa-star text-warning"></i>
                                ))
                            }
                            <span className="ms-1 text-muted bricolage-semibold">{detstarNum[detstarNum.length - 1]} (202)</span>
                        </p>
                        <div className="mainDetailPriceDiv d-flex align-items-center mt-4">
                            <div className="detailPriceTag w-100 border-brand-blue bricolage-bold bg-brand-blue p-2 fs-5 text-white text-center">₹{foundPro.price}<span className='bricolage-medium'>/day</span>
                            </div>
                            <div className="checkBtnWrap py-1">
                                <button className='checkBtn btn bg-brand-blue text-uppercase py-2 w-100 text-white bricolage-bold fs-4' onClick={() => {
                                    setBookpopup('flex'); setMainheight('100vh')
                                }}>Check Avaibility</button>
                            </div>
                        </div>
                    </div>
                    <div className="featuresDiv px-4 mt-4">
                        <p className="mainDetailProAboutTxt mb-0 text-muted bricolage-regular mt-3 mb-5">{foundPro.desc}.</p>
                        <h2 className="featureHead bricolage-bold fs-5 text-muted">Specifications</h2>
                        <ul className="featuresUl ps-4">
                            {
                                foundPro.features.map((feat, index) => (
                                    <li key={index} className="featureLi text-muted lh-sm mb-0">{feat}</li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="faqs px-4 my-5">
                        <h2 className="featureHead bricolage-bold fs-5 text-muted">FAQs</h2>
                        <div className="accordion mt-3 accordion-flush" id="accordionFlushExample">
                            {
                                foundPro.faqs.map((faq, index) => (
                                    <div key={index} className="accordion-item mb-2 border-0">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button border shadow-none rounded-brand collapsed bricolage-bold" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                                                {faq[0]}
                                            </button>
                                        </h2>
                                        <div id={`flush-collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">{faq[1]}</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="reviewFormWrap mt-5 px-4">
                        <h2 className="featureHead mb-0 bricolage-bold fs-5 text-muted mb-0">Rate Us</h2>
                        <p className="mb-0 text-muted bricolage-medium">Share your experience to help others</p>
                        <div className="ratingFormStar d-flex justify-content-between align-items-center px-4 mt-3">
                            <i className="far fa-star fs-1 me-2"></i>
                            <i className="far fa-star fs-1 me-2"></i>
                            <i className="far fa-star fs-1 me-2"></i>
                            <i className="far fa-star fs-1 me-2"></i>
                            <i className="far fa-star fs-1 me-2"></i>
                        </div>
                        <div className="inputWrap">
                            <input type="text" placeholder='Enter your name' className='form-control mt-4 rounded-brand border shadow-none' />
                            <textarea type="text" name="review" id="reviewInpu" className='form-control rounded-brand mt-2 shadow-none border' placeholder='Enter your review' rows={3} style={{ resize: 'none' }}></textarea>
                            <button className='btn bg-brand-blue text-white nunito-bold px-3 fs-5 mt-2 rounded-brand'>Submit</button>
                        </div>
                    </div>

                    <div className="reviewDiv mb-5 pb-5 px-4 mt-5">
                        <h2 className="featureHead bricolage-bold fs-5 text-muted mb-0">REVIEWS</h2>
                        <p className="mainReview mb-0">
                            {
                                detstarNum.map((mun, i) => (
                                    <i key={i} className="fas fa-star text-warning"></i>
                                ))
                            }
                            <span className="ms-1 text-muted bricolage-semibold">{detstarNum[detstarNum.length - 1]} (202)</span>
                        </p>

                        <div className="reviewCardWrap mt-4">
                            <Reviewcard img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" name="Naved Shah" txt="Nice quality mist fan with perfection" date="13 Sept 2023, 12:38 PM" star={4} />
                            <Reviewcard img="https://i.guim.co.uk/img/media/6293c5a867e0cc98812a058582e7952f6714a563/0_0_3122_1874/master/3122.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=91f15b7226a4c1acc86be19a503a33b6" name="Will Smith" txt="Provides a refreshing mist along with airflow for superior cooling. best fans for rent in mumbai" date="13 Sept 2023, 12:38 PM" star={5} />
                        </div>
                    </div>

                    <div className="bookingPopupCont px-3" style={{ display: bookpopup }} onClick={() => {
                        setMainheight('auto')
                    }}>
                        <div className="extarDiv" onClick={() => setBookpopup('none')}></div>
                        <div className="bookingpopup p-3 pt-0">
                            <div className="crossBtn fs-4 rounded-circle w-100 text-end bg-white text-muted m-0 p-0" onClick={() => setBookpopup('none')}>&times;</div>
                            {/* <p className="mb-0 p-0 crossBtn text-muted text-end fs-5">&times;</p> */}
                            <div className="popupLogo mx-auto mt-3">
                                <img src="../images/Rentooze Logo front.png" alt="Rentooze logo" className="img-fluid" />
                            </div>
                            <p className="popupSogen bricolage-extrabold text-center text-muted text-uppercase mt-3">
                                your trusted <br /> rental partner
                            </p>

                            <div className="bookingForm px-2">
                                <form action="https://formspree.io/f/maygpjdr" method="post">
                                    <div className="datepickerDiv pb-2 pt-4">
                                        <p className="mb-0 text-brand-blue bricolage-bold text-uppercase">select your date</p>
                                        <div className="datepickerWrap d-flex text-center justify-content-center align-items-center border-brand-skin rounded-3 px-2">
                                            <i className="fas fa-calendar-check fs-4 text-brand-blue border-end pe-2" onClick={() => {
                                                if (datePickerRef.current) {
                                                    datePickerRef.current.setOpen(true);
                                                }
                                            }}></i>
                                            <DatePicker
                                                className='mydatePicker text-end fs-5 text-black p-2 pe-1 border-0 outline-0 shadow-none rounded-3 m-0'
                                                name='date'
                                                selected={dateval}
                                                onChange={(date) => setDateval(date)}
                                                dateFormat="dd/MM/yyyy"
                                                ref={datePickerRef}
                                            />
                                        </div>
                                    </div>

                                    <div className="textInputs mt-4">
                                        <div className='inpuWrap border-brand-blue rounded-pill px-2 pb-2 mt-3'>
                                            <p className="mb-0 mylegend ms-3 bg-white px-2 bricolage-light text-uppercase">Your Location</p>
                                            <input type="text" name='location' className='addInpu p-1 bricolage-semibold px-3 rounded-pill outline-none' />
                                        </div>
                                        <div className='inpuWrap border-brand-blue rounded-pill px-2 pb-2 mt-3'>
                                            <p className="mb-0 mylegend ms-3 bg-white px-2 bricolage-light text-uppercase">Your Email.</p>
                                            <input type='email' name='email' className='addInpu p-1 bricolage-semibold px-3 rounded-pill outline-none' />
                                        </div>
                                        <div className='inpuWrap border-brand-blue rounded-pill px-2 pb-2 mt-3'>
                                            <p className="mb-0 mylegend ms-3 bg-white px-2 bricolage-light text-uppercase">Phone no.</p>
                                            <input type="tel" name='number' className='addInpu p-1 bricolage-semibold px-3 rounded-pill outline-none' />
                                        </div>
                                    </div>
                                    <div className="bookBtnDiv">
                                        <button type='submit' className="bookBtn btn bg-brand-blue text-white text-uppercase w-100 mt-5 p-2 fs-5 bricolage-bold" onClick={submitFunc}>Book Now!</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="loadingCont px-3" style={{ display: loadingpopup }}>
                        <div className="loadingpopup text-center p-3">
                            <div className="loaderImg mx-auto mt-5">
                                <img src="../images/Fanicon.png" alt="loaderimg" className="img-fluid" />
                            </div>
                            <p className="mb-0 bricolage-bold text-muted fs-3 mt-4">Booking Your Order</p>
                        </div>
                    </div>

                    <div className="thanksCont px-3" style={{ display: thankpopup }}>
                        <div className="thankspopup p-3  text-center">
                            <div className="doneimg mt-5 mx-auto">
                                <img src="../images/Done.png" alt="done" className="img-fluid" />
                            </div>
                            <p className="mb-0 fs-4 text-muted mt-3 text-center bricolage-bold lh-sm">Thank you very much <br /> for booking with Rentooze!</p>
                            <button className='btn bg-brand-blue bricolage-extrabold text-white fs-5 w-75 mx-auto text-uppercase mt-4' onClick={() => navigate('/')}>Done</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;