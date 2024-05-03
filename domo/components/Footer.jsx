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
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <h2>complet labs</h2>
                    <p className="footer-text pt-3">Our software company specializes 
                    in developing innovative solutions tailored to meet our clients 
                    unique needs, leveraging cutting-edge.
                    </p>
                <div className='icons-socialMedia'>
                  <FontAwesomeIcon className='pe-3' icon={faTwitter} />
                  <FontAwesomeIcon className='pe-3' icon={faGlobe} />
                  <FontAwesomeIcon className='pe-3' icon={faFacebook} />
                  <FontAwesomeIcon icon={faInstagram} />  
                </div>    
                </div>
                <div className="col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
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
                <div className="col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
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
                <div className="col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
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