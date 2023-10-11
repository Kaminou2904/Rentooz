import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Terms() {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    return (
        <div className='mainTerm'>
            <div className="mainListingHeader bg-brand-blue w-100 position-fixed top-0 px-3 d-flex align-items-center justify-content-center p-3 px-4">
                <i className="fas fa-chevron-left fs-4 text-white" onClick={() => navigate(-1)}></i>
                <p className="mb-0 w-100 text-white text-center text-uppercase bricolage-bold fs-5">Terms & Conditions</p>
            </div>

            <div className="privacyWrap container mt-4 pt-5">
                <div className="content row align-items-center">
                    <div className="col-md-6">
                        <h1 className="fs-2 mt-2 bricolage-bold">Terms & conditions for Rentooze</h1>
                        <h2 className='mb-0 text-brand-blue fs-4 bricolage-bold mt-4'>Acceptance of Terms</h2>
                        <p className="mb-0 text-muted lh-sm">
                            By accessing or using the Rentooze website ("Website") and any related services, you agree to comply with and be bound by these Terms and Conditions ("Terms"). If you do not agree with these Terms, please do not use our Website.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src="../images/terms.svg" alt="privacy policy" className='img-fluid' />
                    </div>
                </div>
                <div className="content row flex-wrap-reverse align-items-center mt-2">
                    <div className="col-md-6">
                        <img src="../images/eligibility.svg" alt="privacy policy" className='img-fluid' />
                    </div>
                    <div className="col-md-6">
                        <h2 className='mb-0 text-brand-blue fs-4 bricolage-bold mt-4'>User Eligibility</h2>
                        <p className="mb-0 text-muted lh-sm bricolage-medium">
                            You must be at least 16 years old to use our services. By using our Website, you confirm that you meet this age requirement
                        </p>
                    </div>
                </div>
                <div className="content row align-items-center mt-2">
                    <div className="col-md-6">
                        <h2 className='mb-0 text-brand-blue fs-4 bricolage-bold mt-4'>Rental and Sales Services</h2>
                        <div className="collectiveInfo">
                            <h2 className='mb-0 text-brand-blue fs-5 bricolage-bold mt-2'>Renting Services:</h2>
                            <ul className="ps-4">
                                <li className='infoLi text-muted'>Rentooze offers rental services for various products. When renting, you agree to abide by the terms and conditions specific to each rental agreement</li>
                            </ul>
                        </div>
                        <div className="collectiveInfo">
                            <h2 className='mb-0 text-brand-blue fs-5 bricolage-bold mt-2'>Sales Services</h2>
                            <ul className="ps-4">
                                <li className='infoLi text-muted'>Rentooze also offers products for sale. When making a purchase, you agree to the terms and conditions specific to the sale, including pricing, payment, and shipping</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="../images/service.svg" alt="use informaiton" className='img-fluid' />
                    </div>
                </div>
                <div className="content row flex-wrap-reverse align-items-center mt-2">
                    <div className="col-md-6">
                        <img src="../images/responsibility.svg" alt="use informaiton" className='img-fluid' />
                    </div>
                    <div className="col-md-6">
                        <h2 className='mb-0 text-brand-blue fs-4 bricolage-bold mt-4'>User Responsibilities</h2>
                        <div className="collectiveInfo">
                            <h2 className='mb-0 text-brand-blue fs-5 bricolage-bold mt-2'>Accuracy of Information</h2>
                            <ul className="ps-4">
                                <li className='infoLi text-muted'>You are responsible for providing accurate and up-to-date information when using our Website, including during the rental or purchase process</li>
                            </ul>
                        </div>
                        <div className="collectiveInfo">
                            <h2 className='mb-0 text-brand-blue fs-5 bricolage-bold mt-2'>Account Security</h2>
                            <ul className="ps-4">
                                <li className='infoLi text-muted'>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content row  align-items-center mt-2">
                    <div className="col-md-6">
                        <h2 className='mb-0 text-brand-blue bricolage-bold mt-4'>Intellectual Property</h2>
                        <p className="mb-0 text-muted lh-sm bricolage-medium">
                            All content and materials on the Rentooze Website, including but not limited to text, graphics, logos, images, and software, are protected by intellectual property laws. You may not use, reproduce, or distribute these materials without our explicit permission
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src="../images/intallactual.svg" alt="use informaiton" className='img-fluid' />
                    </div>
                </div>
                <div className="content row flex-wrap-reverse align-items-center mt-2">
                    <div className="col-md-6">
                        <img src="../images/privacypolicy.svg" alt="use informaiton" className='img-fluid' />
                    </div>
                    <div className="col-md-6">
                        <h2 className='mb-0 text-brand-blue fs-4 bricolage-bold mt-4'>Privacy Policy</h2>
                        <p className="mb-0 text-muted lh-sm bricolage-medium">
                            Our <Link to='/privacy-policy' className='nav-link text-danger d-inline'>Privacy Policy</Link> outlines how we collect, use, and protect your personal information. By using our Website, you consent to our privacy practices as described in the Privacy Policy
                        </p>
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
                <div className="content row flex-wrap-reverse align-items-center mt-2">
                    <div className="col-md-6">
                        <img src="../images/libility.svg" alt="use informaiton" className='img-fluid' />
                    </div>
                    <div className="col-md-6">
                        <h2 className='mb-0 text-brand-blue bricolage-bold mt-4'>Limitation of Liability</h2>
                        <p className="mb-0 text-muted lh-sm bricolage-medium">
                            Rentooze is not liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of our Website or any products or services obtained through it
                        </p>
                    </div>
                </div>
                <div className="content row align-items-center mt-2">
                    <div className="col-md-6">
                        <h2 className='mb-0 text-brand-blue bricolage-bold mt-4'>Termination</h2>
                        <p className="mb-0 text-muted lh-sm bricolage-medium">
                            Rentooze reserves the right to terminate or suspend your access to the Website at any time, with or without notice, for violations of these Terms or for any other reason
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src="../images/termination.svg" alt="use informaiton" className='img-fluid' />
                    </div>
                </div>
                <div className="content row flex-wrap-reverse align-items-center mt-2">
                    <div className="col-md-6">
                        <img src="../images/changes.svg" alt="use informaiton" className='img-fluid' />
                    </div>
                    <div className="col-md-6">
                        <h2 className='mb-0 text-brand-blue bricolage-bold mt-4'>Changes to Terms and Conditions</h2>
                        <p className="mb-0 text-muted lh-sm bricolage-medium">
                            Rentooze may update these Terms and Conditions from time to time. Any changes will be posted on the Website, and your continued use of the Website constitutes your acceptance of the revised Terms
                        </p>
                    </div>
                </div>
                <div className="content row align-items-center mt-2">
                    <div className="col-md-6">
                        <h2 className='mb-0 text-brand-blue bricolage-bold mt-4'>Governing Law</h2>
                        <p className="mb-0 text-muted lh-sm bricolage-medium">
                            These Terms and Conditions are governed by and construed in accordance with the laws of The Supreme Court of India.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src="../images/court.svg" alt="use informaiton" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terms