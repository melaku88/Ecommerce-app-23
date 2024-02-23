import { NavLink } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";

function Home() {
  return ( 
    <div style={{paddingTop: '50px'}}>
      <section id="home" className="d-flex align-items-center justify-content-center flex-column">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5 text-white">
              <h1 className="fw-bolder mb-4 text-center">Feels the Fresh Business Perspective</h1>
              <p className="lead mb-5 text-center">
                MProduct adhaires for istd cons  cdnsmnd dfhdjhfs sajeuyre qualitryy prowijhs art tkkdkfk tokaks kkmdd fmnjkfnfs qkwjend ajjnkdjdkj amsjdnsdna amndajmndka kjnmsmam asjknsansdksjaka
              </p>
             <div className="buttons d-flex justify-content-center">
              <NavLink to='/contact' className="btn btn-light rounded-pill px-4 py-2 me-4">Get Qoutes</NavLink>
              <NavLink to='/service' className="btn btn-outline-light rounded-pill px-4 py-2">Our Services</NavLink>
             </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <About/>
        <Contact/>
      </div>
    </div>
   );
}

export default Home;