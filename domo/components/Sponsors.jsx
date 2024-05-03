import React from 'react';
import './sponsors.css';
import Image from 'next/image'
import brandsImg from '../public/assets/images/brands-2.jpg'

export default function Sponsors() {
  return (
		<section className="container sponsors">
			<div className="sponsors-wrapper" >
				<h2 className="sponsors-title py-2">Clients we worked with</h2>
					
          <Image 
            src={brandsImg} 
              alt='Default image'
            style={{
              width: '100%',
            }}
            quality="100"
            className="img-fluid"
          />
        </div>
        <div className='row text-start'>
          <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
            <div className="card card-contact">
              <div className="card-body contact-body">
                <h5 className="contact-title pb-2">Get in touch with us</h5>
                <p className="contact-text pb-3">Some quick example text 
                to build on the card 
                title.</p>
                <button type="button" className="btn btn-outline-secondary btn-contact rounded-1">Hire us</button>
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
            <div className="card card-contact">
              <div className="card-body contact-body">
                <h5 className="contact-title pb-2">Our projects</h5>
                <p className="contact-text pb-3">Some quick example text 
                to build on the card 
                title.</p>
                <button type="button" className="btn btn-outline-secondary btn-contact rounded-1">See projects</button>
              </div>
            </div>
          </div>	
        </div>
    </section>

  )
}

