import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../component/navbar";
import Image from "next/image";

export default function About() {
  return (
    <>
    <br />
    <br />
    <div style={{ backgroundColor: '#FFD1DC', color: '#212529', padding: '50px' }}>
      <div className="container">
        <h1 className="text-center mb-5">About Us</h1>
        <div className="row">
          <div className="col-md-6">
            <img
              src="/assets/img/Logo3.png"
              alt="About Us"
              className="img-fluid mb-4"
            />
          </div>
          <div className="col-md-6">
            <h2>Our Mission</h2>
            <p>
              At Cherry Blossom co., our mission is to provide
              unforgettable travel experiences. We believe that travel is more
              than just visiting places; it's about immersing yourself in new
              cultures, meeting new people, and creating memories that will last
              a lifetime.
            </p>
            <h2>Our Values</h2>
            <p>
              We are committed to sustainable travel, ensuring that the
              destinations we love are preserved for future generations. We
              prioritize responsible tourism, respecting local communities, and
              minimizing our environmental impact.
            </p>
            <h2>Contact Us</h2>
            <p>
              Have questions or want to learn more? Contact us at{' '}
              <a href="mailto:info@yourtravelcompany.com">info@CherryBlossom.com</a>.
            </p>
            <button
              className="btn"
              style={{ backgroundColor: '#212529', color: '#F4C2C2' }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
