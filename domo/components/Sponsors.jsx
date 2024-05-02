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
    </section>

  )
}

