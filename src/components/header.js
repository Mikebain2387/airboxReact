import React from "react"
import logo from '../images/airbox_logo.png'
function Header(){
 return(
  <div className="row">
    <Nav/>
    <Hero/>
  </div>
 )
}

function Nav(){
return(
 <div className="nav_bar ">
      <div className="row">
        <div className="col-8 mt-2 col-md-3 pb-2">
          <img
            className="img-fluid logo"
            src={logo}
            alt=""
          />
        </div>

        <div
          className="nav-bar col-md-9 text-md-end mt-md-4 mt-lg-5 col-12"
          text-center
        >
          <a className="me-1 me-md-2 ms-2" href="">Home</a>
          <a className="me-1 me-md-2" href="">Web Hosting</a>
          <a className="me-1 me-md-2" href="">Reseller Hosting</a>
          <a className="me-1 me-md-2" href="">Services</a>
          <a className="me-1 me-md-2" href="">Blog</a>
          <a className="me-1 me-md-2" href="">Contacts</a>
        </div>
      </div>
    </div>
)
}

function Hero(){
 return(
  <div className="section-1">
        <div className="row">
          <div className="section-1-content text-center d-flex align-items-center justify-content-center mt-2 mb-4">
           <div className="col-6 text-center">

            <h2 className="fs-4">24/7 Real Person</h2>
            <h1 className="fs-1">Customer Support</h1>
            <h2 className="fs-4">For all our clients</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores tempore laudantium iste et neque nemo consequuntur
              deserunt, in veritatis laborum maxime, tempora dolorum? Molestiae
              nostrum quia error provident fugiat officiis eum? Ut fugit,
              dolorum cumque provident saepe libero repellendus at reiciendis
              sequi perferendis nesciunt et laboriosam quos, quas, error
              quibusdam.
            </p>
            <button className="text-center pb-1 section-1-button text-center">
              Try Now
            </button>
           </div>
          </div>
        </div>
      </div>
 )
}


export default Header;