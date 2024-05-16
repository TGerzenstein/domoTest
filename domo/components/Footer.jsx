import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <section className="footer">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-3 col-lg-6 col-xl-6">
                    <h2>complet labs</h2>
                    <p className="footer-text pt-3">
                      Created by Tatiana Gerzenstein</p>
                    <div className='icons-socialMedia'>
                      <a href="https://twitter.com" rel="noopener noreferrer" className='icons-t'><FontAwesomeIcon className='pe-3' icon={faTwitter} /></a>
                      <a href="https://tatianagerzenstein.vercel.app/" rel="noopener noreferrer" className='icons-t'><FontAwesomeIcon className='pe-3' icon={faGlobe} /></a>
                      <a href="https://www.facebook.com" rel="noopener noreferrer" className='icons-t'><FontAwesomeIcon className='pe-3' icon={faFacebook} /></a>
                      <a href="https://www.instagram.com/" rel="noopener noreferrer" className='icons-t'><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>    
                </div>
                <div className="col-12 col-sm-6 col-md-3 col-lg-2 col-xl-2">
                    <h2>Sitemap</h2>
                    <ul className="nav flex-column pt-3">
                      <li className="nav-item">
                        <a className="nav-link active p-0" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0 pt-2" href="#">Technology</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0 pt-2" href="#">Services</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0 pt-2" href="#">About</a>
                      </li>
                    </ul>
                </div>
                <div className="col-12 col-sm-6 col-md-3 col-lg-2 col-xl-2">
                    <h2>Case studies</h2>
                    <ul className="nav flex-column pt-3">
                      <li className="nav-item">
                        <a className="nav-link active p-0" href="#">Swiss Airlines</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0 pt-2" href="#">Google</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0 pt-2" href="#">Apple</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0 pt-2" href="#">Nike</a>
                      </li>
                    </ul>
                </div>
                <div className="col-12 col-sm-6 col-md-3 col-lg-2 col-xl-2">
                    <h2>Contact</h2>
                    <ul className="nav flex-column pt-3">
                      <li className="nav-item">
                        <a className="nav-link active p-0" href="#">Jobs</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0 pt-2" href="#">Hire us</a>
                      </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer