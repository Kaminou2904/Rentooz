import React, { useEffect } from 'react';
import './Privacy.css';
import { useNavigate } from 'react-router-dom';

function Privacy() {

    useEffect(()=>{
        window.scrollTo(0,0);
    }, []);

    const navigate = useNavigate();

    return (
        <div className='mainPrivacy'>
            <div className="mainListingHeader bg-brand-blue w-100 position-fixed top-0 px-3 d-flex align-items-center justify-content-center p-3 px-4">
                <i className="fas fa-chevron-left fs-4 text-white" onClick={() => navigate(-1)}></i>
                <p className="mb-0 w-100 text-white text-center text-uppercase bricolage-bold fs-5">Privacy Policy</p>
            </div>

            <div className="privacyWrap container mt-4 pt-5">
                <div className="content row align-items-center">
                    <div className="col-md-6">
                    <h1 className="fs-2 mt-2 bricolage-bold">Privacy Policy for Rentooze</h1>
                        <h2 className='mb-0 text-brand-blue fs-4 bricolage-bold mt-4'>Introduction</h2>
                        <p className="mb-0 text-muted lh-sm">
                            Welcome to Rentooze! At Rentooze, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src="../images/privacypolicy.svg" alt="privacy policy" className='img-fluid' />
                    </div>
                </div>
                <div className="content row flex-wrap-reverse align-items-center mt-2">
                    <div className="col-md-6">
                        <img src="../images/information.svg" alt="privacy policy" className='img-fluid' />
                    </div>
                    <div className="col-md-6">
                        <h2 className='mb-0 text-brand-blue fs-4 bricolage-bold mt-4'>Information We Collect</h2>
                        <p className="mb-0 text-muted lh-sm bricolage-medium">
                            We may collect the following types of information:
                        </p>
                        <div className="collectiveInfo">
                            <h2 className='mb-0 text-brand-blue fs-5 bricolage-bold mt-2'>Personal Informations</h2>
                            <ul className="ps-4">
                                <li className='infoLi text-muted'>Name</li>
                                <li className='infoLi text-muted'>Email address</li>
                                <li className='infoLi text-muted'>Phone number</li>
                                <li className='infoLi text-muted'>Billing address</li>
                                <li className='infoLi text-muted'>Shipping  address</li>
                            </ul>
                        </div>
                        <div className="collectiveInfo">
                            <h2 className='mb-0 text-brand-blue fs-5 bricolage-bold mt-2'>Non-Personal Information</h2>
                            <ul className="ps-4">
                                <li className='infoLi text-muted'>Browser information</li>
                                <li className='infoLi text-muted'>IP address</li>
                                <li className='infoLi text-muted'>Cookies (please refer to our Cookie Policy for details)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content row align-items-center mt-2">
                    <div className="col-md-6">
                        <h2 className='mb-0 text-brand-blue fs-4 bricolage-bold mt-4'>How We Use Your Information</h2>
                        <p className="mb-0 text-muted lh-sm bricolage-medium">
                        We use your information for the following purposes:
                        </p>
                        <div className="collectiveInfo">
                            <h2 className='mb-0 text-brand-blue fs-5 bricolage-bold mt-2'>To Provide Services</h2>
                            <ul className="ps-4">
                                <li className='infoLi text-muted'>To process and fulfill rental and purchase orders</li>
                                <li className='infoLi text-muted'>To communicate with you about your orders and account</li>
                            </ul>
                        </div>
                        <div className="collectiveInfo">
                            <h2 className='mb-0 text-brand-blue fs-5 bricolage-bold mt-2'>To Improve Our Services</h2>
                            <ul className="ps-4">
                                <li className='infoLi text-muted'>To analyze user behavior and preferences to enhance our website and offerings</li>
                                <li className='infoLi text-muted'>To conduct market research and gather insights</li>
                            </ul>
                        </div>
                        <div className="collectiveInfo">
                            <h2 className='mb-0 text-brand-blue fs-5 bricolage-bold mt-2'>To Send Updates</h2>
                            <ul className="ps-4">
                                <li className='infoLi text-muted'>To send you updates, promotions, and newsletters (you can opt-out at any time)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="../images/useinfo.svg" alt="use informaiton" className='img-fluid' />
                    </div>
                </div>
                <div className="content row flex-wrap-reverse align-items-center mt-2">
                    <div className="col-md-6">
                        <img src="../images/datasecurity.svg" alt="use informaiton" className='img-fluid' />
                    </div>
                    <div className="col-md-6">
                        <h2 className='mb-0 text-brand-blue bricolage-bold mt-4'>Data Security</h2>
                        <p className="mb-0 text-muted lh-sm bricolage-medium">
                        We take data security seriously and implement reasonable measures to protect your information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security
                        </p>
                    </div>
                </div>
                <div className="content row  align-items-center mt-2">
                    <div className="col-md-6">
                        <h2 className='mb-0 text-brand-blue bricolage-bold mt-4'>Sharing Your Information</h2>
                        <p className="mb-0 text-muted lh-sm bricolage-medium">
                        We do not sell or rent your personal information to third parties. We may share your information with trusted service providers to facilitate our services, but they are bound by confidentiality and privacy obligations
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src="../images/sharinginfo.svg" alt="use informaiton" className='img-fluid' />
                    </div>
                </div>
                <div className="content row flex-wrap-reverse align-items-center mt-2">
                    <div className="col-md-6">
                        <img src="../images/choise.svg" alt="use informaiton" className='img-fluid' />
                    </div>
                    <div className="col-md-6">
                        <h2 className='mb-0 text-brand-blue fs-4 bricolage-bold mt-4'>Your Choices</h2>
                        <p className="mb-0 text-muted lh-sm bricolage-medium">
                        You have the right to:
                        </p>
                        <div className="collectiveInfo">
                            <h2 className='mb-0 text-brand-blue fs-5 bricolage-bold mt-2'>Access Your Data</h2>
                            <ul className="ps-4">
                                <li className='infoLi text-muted'>You can request access to your personal information held by us</li>
                            </ul>
                        </div>
                        <div className="collectiveInfo">
                            <h2 className='mb-0 text-brand-blue fs-5 bricolage-bold mt-2'>Correct Your Data</h2>
                            <ul className="ps-4">
                                <li className='infoLi text-muted'>You can request corrections to inaccurate or incomplete information</li>
                            </ul>
                        </div>
                        <div className="collectiveInfo">
                            <h2 className='mb-0 text-brand-blue fs-5 bricolage-bold mt-2'>Delete Your Data</h2>
                            <ul className="ps-4">
                                <li className='infoLi text-muted'>You can request the deletion of your personal information</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content row  align-items-center mt-2">
                    <div className="col-md-6">
                        <h2 className='mb-0 text-brand-blue bricolage-bold mt-4'>Changes to This Privacy Policy</h2>
                        <p className="mb-0 text-muted lh-sm bricolage-medium">
                        We may update this Privacy Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please check this page periodically for updates
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src="../images/changes.svg" alt="use informaiton" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;