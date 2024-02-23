import img_contact from '../images/contact.png'
import { FaTelegramPlane } from 'react-icons/fa'
function Contact() {
  return ( 
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">Have Some Questions?</h1>
              <hr className="w-25 mx-auto"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src={img_contact} alt="Contact" className="w-75"/>
            </div>
            <div className="col-md-6">
              <form action=''>
                <div class="mb-3">
                  <label for="name" class="form-label">Your Name:</label>
                  <input type="text" class="form-control" id="name" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address:</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1"/>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Your Message:</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <button type='submit' className='btn btn-outline-primary rounded-pill px-4'>Send Message <i className="me-2 fs-5 ml-2"><FaTelegramPlane /></i></button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
   );
}

export default Contact;