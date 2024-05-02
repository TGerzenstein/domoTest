import React from 'react';
import './footer.css';

function Footer() {
  return (
    <section className="footer">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <h2>complet labs</h2>
                    <p className="footer-text">Our software company specializes 
                    in developing innovative solutions tailored to meet our clients 
                    unique needs, leveraging cutting-edge technology to streamline 
                    processes and enhance efficiency.
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                    <h2>Sitemap</h2>
                    <ul class="nav flex-column">
                      <li class="nav-item">
                        <a class="nav-link active p-0" href="#">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link p-0 pt-2" href="#">Technology</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link p-0 pt-2" href="#">Services</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link p-0 pt-2" href="#">About</a>
                      </li>
                    </ul>
                </div>
                <div className="col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                    <h2>Case studies</h2>
                    <ul class="nav flex-column">
                      <li class="nav-item">
                        <a class="nav-link active p-0" href="#">Swiss Airlines</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link p-0 pt-2" href="#">Google</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link p-0 pt-2" href="#">Apple</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link p-0 pt-2" href="#">Nike</a>
                      </li>
                    </ul>
                </div>
                <div className="col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                    <h2>Contact</h2>
                    <ul class="nav flex-column">
                      <li class="nav-item">
                        <a class="nav-link active p-0" href="#">Jobs</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link p-0 pt-2" href="#">Hire us</a>
                      </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer