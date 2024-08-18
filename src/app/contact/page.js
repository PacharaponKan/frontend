import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  return (
    <>
      {/* Top Padding */}
      <div className="pt-5"></div>
      <div
        style={{
          backgroundColor: '#FFD1DC',
          color: '#212529',
          padding: '30px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {/* Unified Container and Card Section */}
        <div
          className="card mt-5 shadow-sm p-4 bg-dark text-light"
          style={{
            borderRadius: '10px',
            maxWidth: '800px',
            width: '100%',
          }}
        >
          <div className="row">
            {/* Map and Info Section */}
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="h-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.303117306252!2d98.9813444!3d18.7929024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a9a71d80adf%3A0xe41f657fc5052416!2sChiang%20Mai%20Technical%20College!5e0!3m2!1sen!2sth!4v1692272823159!5m2!1sen!2sth"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chiang Mai Technical College"
                ></iframe>
                <div className="mt-4">
                  <p><strong>Location:</strong>9 Wiang Kaew Rd, Si Phum, Mueang Chiang Mai District, Chiang Mai 50200</p>
                  <p><strong>Email:</strong> CherryBlossom@gmail.com</p>
                  <p><strong>Phone:</strong> +1-202-555-0158</p>
                </div>
                <div className="d-flex justify-content-center">
                  <a href="#" className="me-3">
                    <i className="bi bi-facebook" style={{ fontSize: "1.5rem", color: '#FFD1DC' }}></i>
                  </a>
                  <a href="#" className="me-3">
                    <i className="bi bi-twitter" style={{ fontSize: "1.5rem", color: '#FFD1DC' }}></i>
                  </a>
                  <a href="#" className="me-3">
                    <i className="bi bi-tiktok" style={{ fontSize: "1.5rem", color: '#FFD1DC' }}></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-youtube" style={{ fontSize: "1.5rem", color: '#FFD1DC' }}></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="col-lg-6 col-md-12">
              <div className="h-100">
                <h3 className="mb-4">Let's Talk</h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Your First Name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter Your Email Here" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Phone Number" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="comment" className="form-label">Comment</label>
                    <textarea className="form-control" id="comment" rows="3" placeholder="Comment"></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="btn w-100" 
                    style={{ backgroundColor: '#FFD1DC', color: '#212529' }}>
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
