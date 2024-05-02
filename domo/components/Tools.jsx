import React from 'react';
import './tools.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faSass } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faAngular } from '@fortawesome/free-brands-svg-icons'


function Tools() {
  return (
    <section className="tools">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-8 col-xl-8">
            <h2 className="tools-title">We use cutting edge technology</h2>
            <p className="tools-description">Our software company leverages cutting-edge technologies to deliver innovative solutions. 
            From machine learning algorithms to cloud computing infrastructure, we harness the power of AI to optimize performance and 
            user experience. Through agile development methodologies, we continuously integrate the latest advancements in software 
            engineering. 
           </p>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <div className="d-flex flex-column tools-column">
              <div>
                  <FontAwesomeIcon icon={faHtml5} className='icon-tools'/>
                  <FontAwesomeIcon icon={faCss3Alt} className='icon-tools'/>
              </div>
              <div className="pt-4">
                <FontAwesomeIcon icon={faSass} className='icon-tools'/>
                <FontAwesomeIcon icon={faJs} className='icon-tools'/>
              </div>
              <div className="pt-4">
                <FontAwesomeIcon icon={faAngular} className='icon-tools'/>
                <FontAwesomeIcon icon={faPython} className='icon-tools'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tools