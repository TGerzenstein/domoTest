import React from 'react';
import './sponsors.css';
import Image from 'next/image'
import brandsImg from '../public/assets/images/brands.jpg'

export default function Sponsors() {
  return (
		<section className="sponsors d-flex align-items-center justify-content-center">
					<div className="" >
					<h2 className="sponsors-title">Clients we worked with</h2>
					
					<Image 
					src={brandsImg} 
					style={{
						width: '100%',
						height: 'auto',
						maxHeight: '150px'
					}}
					quality="100"
					className="img-fluid"
					/>
				  </div>
    </section>

  )
}

