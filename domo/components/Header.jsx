'use client'; 

import css from './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
        <header>
            <Navbar expand="lg" className="bg-body-transparent">
              <Container>
                <Navbar.Brand href="#home">compleet labs</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
                    <Nav.Link href="#link" className="mx-2">Services</Nav.Link>
                    <Nav.Link href="#link" className="mx-2">Technology</Nav.Link>
                    <Nav.Link href="#link" className="mx-2">Case studies</Nav.Link>
                    <Nav.Link href="#link" className="mx-2">About</Nav.Link>
                    <Nav.Link href="#link" className="mx-2">Hire us</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

          <div className='hero-image-company'>
            <div className={css.header}>
              <div className='container'>
                <div className="text-overlay">
                  <h1 className="main-title">We build beautiful and reliable web solutions</h1>
                  <p className="description-overlay py-2">We strongly believe that communication trust and transparency
                    are the essential elements of successful business relationship.
                    Ready for the journey?
                  </p>
                  <div className='button-main'>
                    <button type="button" 
                            className="btn btn-outline-secondary rounded-1 btn-main first-btn px-4 my-3">Learn more</button>
                    <button type="button" className="btn btn-primary rounded-1 btn-main px-4 my-3">Our projects
                    <span className='px-2 arrow-right'><FontAwesomeIcon icon={faArrowRight} /></span>
                    </button>
                  </div>
                </div> 
              </div>
            </div>
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center">
            <h2 className="services-title">Our services</h2>
            <p className="services-text">We feel very strong about our skills when it comes to 
              planning, designing and coding applications. Here is 
              what we love to do!</p>
          </div>

          <div className="container d-flex justify-content-center">
            <div className="row">           
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                <div className="card rounded-0 px-4">
                  <div className="card-body text-center">
                    <FontAwesomeIcon icon={faBook} className='icons-services'/>
                    <h5 className="card-title text-center">Business and Product Concept</h5>
                    <p className="card-text text-center pb-3 pt-2">Some quick example text to build 
                    on the card title and make up the bulk of the cards content.
                    Some quick example text to build 
                    on the card title and make up the bulk of the cards content.</p>
                    <div className="text-center">
                      <a href="#" className="btn btn-outline-secondary b-text rounded-1 px-4">Learn more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                <div className="card rounded-0 px-4">
                  <div className="card-body text-center">
                    <FontAwesomeIcon icon={faLaptop} className='icons-services'/>
                    <h5 className="card-title text-center">Web and Mobile Development</h5>
                    <p className="card-text text-center pb-3 pt-2">Some quick example text to build on the card title 
                    and make up the bulk of the cards content. Some quick example text to build on the card title 
                    and make up the bulk of the cards content.</p>
                    <div className="text-center">
                      <a href="#" className="btn btn-outline-secondary b-text rounded-1 px-4">Learn more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                <div className="card rounded-0 px-4">
                  <div className="card-body text-center">
                    <FontAwesomeIcon icon={faPencil} className='icons-services'/>
                    <h5 className="card-title text-center">UX and UI Design products innovative</h5>
                    <p className="card-text text-center pb-3 pt-2">Some quick example text to build on 
                    the card title and make up the bulk of the cards content. Some quick example text to build on the card title 
                    and make up the bulk of the cards content.</p>
                    <div className="text-center">
                      <a href="#" className="btn btn-outline-secondary b-text rounded-1 px-4">Learn more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
  )
}

export default Header

