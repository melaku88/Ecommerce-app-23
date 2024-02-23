import img from '../images/about.png'
function About() {
  return ( 
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src={img} className="w-75 mt-5"/>
            </div>
            <div className="col-md-6">
              <h3 className="fs-5">About Us</h3>
              <h2 className="display-6 mb-2 fs-2">Who <b>We</b> Are?</h2>
              <hr className='w-50'/>
              <p className="mb-4">
                MProduct adhaires for istd cons  cdnsmnd dfhdjhfs sajeuyre qualitryy prowijhs art tkkdkfk tokaks kkmdd fmnjkfnfs qkwjend ajjnkdjdkj amsjdnsdna amndajmndka kjnmsmam asjknsansdksjaka
                MProduct adhaires for istd cons  cdnsmnd dfhdjhfs sajeuyre qualitryy prowijhs art tkkdkfk tokaks kkmdd fmnjkfnfs qkwjend ajjnkdjdkj amsjdnsdna amndajmndka kjnmsmam asjknsansdksjaka
              </p>
              <button className='btn btn-primary rounded-pill px-4 py-2'>Get Started</button>
              <button className='btn btn-outline-primary rounded-pill px-4 py-2 ms-2'>Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
   );
}

export default About;