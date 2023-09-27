import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='mainFooter py-5 mt-5'>
        <div className="container row mx-auto px-4 mb-5">
            <div className="col-md-3">
                <div className="footerLogo pe-5">
                    <img src="../images/Rentooz Logo Front.png" alt="rentinggo footer logo" className="img-fluid" />
                </div>
                <div className="socialLinks mt-3 mb-3">
                    <p className="fs-5 bricolage-bold mb-1">Social Links</p>
                    <div className="socialIcons d-flex align-items-center">
                        <a href='https://instagram.com/rentinggo' className='nav-link'><i className="fab fa-instagram fs-4 me-3 text-brand-skin"></i></a>
                        <a href='https://www.facebook.com/profile.php?id=61550976643927' className='nav-link'><i className="fab fa-facebook-f fs-4 me-3 text-brand-skin"></i></a>
                        <a href='https://youtube.com/@RentingGO?si=bVNEGB36Bh7jNeT4' className='nav-link'><i className="fab fa-youtube fs-4 me-3 text-brand-skin"></i></a>
                        <a href='https://twitter.com/Rentinggo12' className='nav-link'><i className="fab fa-twitter fs-4 me-3 text-brand-skin"></i></a>
                        <a href='https://youtube.com/@RentingGO?si=bVNEGB36Bh7jNeT4' className='nav-link'><i className="fab fa-linkedin-in fs-4 me-3 text-brand-skin"></i></a>
                        <a href='https://wa.me/+918451820012' className='nav-link'><i className="fab fa-whatsapp fs-4 me-3 text-brand-skin"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <p className="fs-5 bricolage-bold mb-0">Navigation Links</p>
                <ul className="footerUL p-0">
                    <li className="footerLI mb-0 bricolage-medium"><Link to='/' className='nav-link mb-0 bricolage-medium'>Home</Link></li>
                    <li className="footerLI mb-0 bricolage-medium"><Link to='/View%20All' className='nav-link mb-0 bricolage-medium'>Products</Link></li>
                    <li className="footerLI mb-0 bricolage-medium"><a href='https://wa.me/+918451820012' className='nav-link mb-0 bricolage-medium'>Call</a></li>
                    <li className="footerLI mb-0 bricolage-medium"><a href='https://wa.me/+918451820012' className='nav-link mb-0 bricolage-medium'>Chat</a></li>
                </ul>
            </div>
            <div className="col-md-3">
            <p className="fs-5 bricolage-bold mb-0">Usefull Links</p>
                <ul className="footerUL p-0">
                    <li className="footerLI mb-0 bricolage-medium"><Link className='mb-0 bricolage-medium nav-link' to='/privacy-policy'>Privacy Policy</Link></li>
                    <li className="footerLI mb-0 bricolage-medium"><Link className='mb-0 bricolage-medium nav-link' to='/terms-and-conditions'>Terms & Conditions</Link></li>
                    <li className="footerLI mb-0 bricolage-medium"><Link className='mb-0 bricolage-medium nav-link' to='/about-us'>About Us</Link></li>
                </ul>
            </div>
            <div className="col-md-3">
            <p className="fs-5 bricolage-bold mb-0">Contact Us</p>
                <ul className="footerUL p-0">
                    <li className="footerLI mb-0 bricolage-medium"><i className="fas fa-envelope me-2 text-brand-blue"></i>rentinggo@gmail.com</li>
                    <li className="footerLI mb-0 bricolage-medium"><i className="fas fa-phone-alt me-2 text-brand-blue"></i>+91 8451820012</li>
                    <li className="footerLI mb-0 bricolage-medium"><i className="fab fa-whatsapp me-2 text-brand-blue"></i>+91 8451820012</li>
                    <li className="footerLI mb-0 bricolage-medium lh-sm"><i className="fas fa-map-marker-alt me-2 text-brand-blue"></i>101 Powai Plaza, Powai, Mumbai, Maharashtra, India</li>
                </ul>
            </div>
            <div className="extraFooterInfo container d-flex justify-content-between px-2 border-top border-secondary mt-4 pt-3">
                <p className="rightTxt mb-0 fs-5 bricolage-semibold text-muted">
                &copy; 2023 <span className='text-brand-blue bricolage-semibold'>Rentooz</span>
                </p>
                <p className="footerWhatsappicon mb-0 fs-2"><i className="fab fa-whatsapp fs-2 text-brand-blue"></i></p>
            </div>
        </div>
    </div>
  );
};

export default Footer;