'use client'; 

import Image from 'next/image';
import background from '../public/assets/images/background.jpg';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
        <header>
            <Navbar expand="lg" className="bg-body-transparent">
              <Container>
                <Navbar.Brand href="#home">compleet labs</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Services</Nav.Link>
                    <Nav.Link href="#link">Technology</Nav.Link>
                    <Nav.Link href="#link">Case studies</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#link">Hire us</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

          <div>
            <div className="d-flex justify-content-end">
                  <Image
                  src={background}
                  alt='Default image'
                  style={{
                    width: '780px',
                    height: '100%',
                  }}
                  className="img-fluid image-core"
                  />
            </div>
          </div>

          <div>
            <div>
              <div className="text-overlay">
              <h1 className="main-title">We build beautiful and reliable web solutions</h1>
              <p className="description-overlay py-2">We strongly believe that communication trust and transparency
                are the essential elements of successful business relationship.
                Ready for the journey?
              </p>
              <div>
                <button type="button" className="btn btn-outline-secondary me-3 rounded-1 btn-main">Learn more</button>
                <button type="button" className="btn btn-outline-primary rounded-1 btn-main">Our projects</button>
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
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-4">
                <div class="card rounded-0">
                  <div class="card-body">
                    <h5 class="card-title text-center">Business and Product Concept</h5>
                    <p class="card-text text-center">Some quick example text to build 
                    on the card title and make up the bulk of the cards content.
                    Some quick example text to build 
                    on the card title and make up the bulk of the cards content.</p>
                    <div className="text-center">
                      <a href="#" className="btn btn-outline-secondary b-text rounded-1">Learn more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-4">
                <div class="card rounded-0">
                  <div class="card-body">
                    <h5 class="card-title text-center">Web and Mobile Development</h5>
                    <p class="card-text text-center">Some quick example text to build on the card title 
                    and make up the bulk of the cards content. Some quick example text to build on the card title 
                    and make up the bulk of the cards content.</p>
                    <div className="text-center">
                      <a href="#" className="btn btn-outline-secondary b-text rounded-1">Learn more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-4">
                <div class="card rounded-0">
                  <div class="card-body">
                    <h5 class="card-title text-center">UX and UI Design products innovative</h5>
                    <p class="card-text text-center">Some quick example text to build on 
                    the card title and make up the bulk of the cards content. Some quick example text to build on the card title 
                    and make up the bulk of the cards content.</p>
                    <div className="text-center">
                      <a href="#" className="btn btn-outline-secondary b-text rounded-1">Learn more</a>
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

