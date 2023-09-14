import React, { useState, useRef } from 'react';
import './Detail.css';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Reviewcard from '../../Components/Reviewcard/Reviewcard';

function Detail() {

    const navigate = useNavigate();
    const [mainImg, setmainimg] = useState('../images/2Fan.png');
    const [imgindex, setImgindex] = useState(0);
    const [dateval, setDateval] = useState(new Date());
    const [bookpopup, setBookpopup] = useState('none');
    const [mainheight, setMainheight] = useState('auto');
    const [loadingpopup, setLoadingpopup] = useState('none');
    const [thankpopup, setThankpopup] = useState('none');
    const datePickerRef = useRef(null);

    const detstarNum = [];
    for (let index = 1; index <= 5; index++) {
        detstarNum.push(index);
    };

    const submitFunc = () => {
        setLoadingpopup('flex');
        setBookpopup('none')
        setTimeout(() => {
            setLoadingpopup('none');
            setThankpopup('flex');
        }, 5000);
    }

    return (
        <div className='mainDetail bg-brand-skin' style={{ height: mainheight }}>
            <div className="mainDetailHeader px-4 py-3 pt-4 d-flex container">
                <div className="backBtn fs-4">
                    <i className="fas fa-chevron-left text-white fs-5" onClick={() => navigate(-1)}></i>
                </div>
                <p className="mb-0 bricolage-bold text-white text-end w-50 ms-4 fs-5">Mist fan</p>
            </div>
            <div className="detailProContainer rounded-pill rounded-bottom-0 bg-white">
                <div className="mainImgWrap pt-4 px-5">
                    <img src={mainImg} className='img-fluid p-2' alt="mist fan" />
                </div>
                <div className="proImages d-flex justify-content-around px-5 mt-3">
                    <div className={`proImgWrap p-2 ${imgindex === 0 ? 'border-brand-blue' : 'border-brand-skin'}`}>
                        <img src="../images/2Fan.png" className='img-fluid' alt="" onClick={(e)=>{setmainimg(e.target.src); setImgindex(0)}}/>
                    </div>
                    <div className={`proImgWrap p-2 ${imgindex === 1 ? 'border-brand-blue' : 'border-brand-skin'}`}>
                        <img src="../images/1 Event Material.png" className='img-fluid' alt="" onClick={(e)=>{setmainimg(e.target.src); setImgindex(1)}}/>
                    </div>
                    <div className={`proImgWrap p-2 ${imgindex === 2 ? 'border-brand-blue' : 'border-brand-skin'}`}>
                        <img src="../images/3Mist Fan.png" className='img-fluid' alt="" onClick={(e)=>{setmainimg(e.target.src); setImgindex(2)}}/>
                    </div>
                    <div className={`proImgWrap p-2 ${imgindex === 3 ? 'border-brand-blue' : 'border-brand-skin'}`}>
                        <img src="../images/mistfanBlack.webp" className='img-fluid' alt="" onClick={(e)=>{setmainimg(e.target.src); setImgindex(3)}}/>
                    </div>
                </div>
                <div className="detailProData mt-4 container px-4">
                    <p className="detailProName mb-0 fs-3 text-capitalize text-start bricolage-bold text-brand-blue">mist fan high end <br /> <span className='text-uppercase bricolage-bold text-brand-blue'>blue tank</span></p>
                    <p className="detailMainRating mt-1 d-flex align-items-center">
                        {
                            detstarNum.map((mun, i) => (
                                <i key={i} className="fas fa-star text-warning"></i>
                            ))
                        }
                        <span className="ms-1 text-muted bricolage-semibold">{detstarNum[detstarNum.length - 1]} (202)</span>
                    </p>
                    <div className="mainDetailPriceDiv d-flex justify-content-between mt-4">
                        <div className="detailPriceTag border-brand-skin bricolage-bold bg-brand-skin p-2 fs-5 text-white text-center">₹499 <br /><span className='bricolage-medium'>/day</span></div>
                        <div className="detailPriceTag border-brand-skin bricolage-bold bg-brand-skin p-2 fs-5 text-white text-center">₹999 <br /><span className='bricolage-medium'>/week</span></div>
                        <div className="detailPriceTag border-brand-skin bricolage-bold bg-brand-skin p-2 fs-5 text-white text-center">₹1299 <br /><span className='bricolage-medium'>/month</span></div>
                    </div>
                    <p className="mainDetailProAboutTxt mb-0 text-muted bricolage-regular mt-3">Rent our Mist Fans for instant relief from the
                        scorching heat! Our Mist Fans combine powerful airflow with a refreshing mist to keep you
                        cool and comfortable, whether you're hosting
                        an outdoor event, working in a warehouse, or
                        simply enjoying your backyard. With
                        adjustable mist intensity, large water tanks
                        for extended use, and easy mobility, our Mist
                        Fans are the perfect solution for beating the
                        heat. Stay cool and refreshed with our
                        hassle-free mist fan rentals.</p>
                </div>

                <div className="featuresDiv px-4 mt-4">
                    <h2 className="featureHead bricolage-bold fs-5 text-muted">FEATURES</h2>
                    <ul className="featuresUl ps-4">
                        <li className="featureLi text-muted lh-sm mb-0"><span className="text-muted bricolage-bold">Cooling Mist:</span> Provides a refreshing mist along with airflow for superior cooling</li>
                        <li className="featureLi text-muted lh-sm mb-0"><span className="text-muted bricolage-bold">Adjustable Mist Intensity:</span> : Control the mist level to meet your comfort preferences</li>
                        <li className="featureLi text-muted lh-sm mb-0"><span className="text-muted bricolage-bold">Large Water Tank:</span> Extended operation without frequent refilling</li>
                        <li className="featureLi text-muted lh-sm mb-0"><span className="text-muted bricolage-bold">Outdoor Use:</span> Ideal for outdoor events, keeping guests cool in hot weather</li>
                        <li className="featureLi text-muted lh-sm mb-0"><span className="text-muted bricolage-bold">Safety Features:</span> Automatic shut-of when the water tank is empty</li>
                        <li className="featureLi text-muted lh-sm mb-0"><span className="text-muted bricolage-bold">Easy Mobility:</span> Wheels for effortless transportation</li>
                    </ul>
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
                        <Reviewcard img="https://i.pinimg.com/1200x/86/2c/e2/862ce2907b6220ff9614cff0673a6791.jpg" name="Naruto Uzumaki" txt="Nice quality mist fan with perfection" date="13 Sept 2023, 12:38 PM" star={4} />
                        <Reviewcard img="https://i.pinimg.com/1200x/86/2c/e2/862ce2907b6220ff9614cff0673a6791.jpg" name="Naruto Uzumaki" txt="Provides a refreshing mist along with airflow for superior cooling. best fans for rent in mumbai" date="13 Sept 2023, 12:38 PM" star={5} />
                    </div>
                </div>

                <div className="checkBtnWrap container py-1 mt-2">
                    <button className='checkBtn btn bg-brand-skin text-uppercase py-2 w-100 text-white bricolage-bold fs-4' onClick={() => {
                        setBookpopup('flex'); setMainheight('100vh')
                    }}>Check Dates</button>
                </div>

                <div className="bookingPopupCont px-3" style={{ display: bookpopup }} onClick={() => {
                    setMainheight('auto')
                }}>
                    <div className="extarDiv" onClick={() => setBookpopup('none')}></div>
                    <div className="bookingpopup p-3">
                        {/* <p className="mb-0 p-0 crossBtn text-muted text-end fs-5">&times;</p> */}
                        <div className="popupLogo mx-auto mt-3">
                            <img src="../images/Rentooz Logo front.png" alt="rentooz logo" className="img-fluid" />
                        </div>
                        <p className="popupSogen bricolage-extrabold text-center text-muted text-uppercase mt-3">
                            your trusted <br /> rental partner
                        </p>

                        <div className="bookingForm px-2">
                            <div className="datepickerDiv pb-2 pt-4">
                                <p className="mb-0 text-brand-blue bricolage-bold text-uppercase">select your date</p>
                                <div className="datepickerWrap d-flex text-center justify-content-center align-items-center border-brand-skin rounded-3 px-2">
                                    <i className="fas fa-calendar-check fs-4 text-brand-skin border-end pe-2" onClick={() => {
                                        if (datePickerRef.current) {
                                            datePickerRef.current.setOpen(true);
                                        }
                                    }}></i>
                                    <DatePicker
                                        className='mydatePicker text-end fs-5 text-black p-2 pe-1 border-0 outline-0 shadow-none rounded-3 m-0'
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
                                    <p className="mb-0 mylegend ms-3 bg-white px-2 bricolage-light text-uppercase">Phone no.</p>
                                    <input type="tel" name='number' className='addInpu p-1 bricolage-semibold px-3 rounded-pill outline-none' />
                                </div>
                            </div>
                            <div className="bookBtnDiv">
                                <button className="bookBtn btn bg-brand-skin text-white text-uppercase w-100 mt-5 p-2 fs-5 bricolage-bold" onClick={submitFunc}>Book Now!</button>
                            </div>
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
                        <p className="mb-0 fs-4 text-muted mt-3 text-center bricolage-bold lh-sm">Thank you very much <br /> for booking with Rentooz!</p>
                        <button className='btn bg-brand-skin bricolage-extrabold text-white fs-5 w-75 mx-auto text-uppercase mt-4' onClick={() => navigate('/')}>Done</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;