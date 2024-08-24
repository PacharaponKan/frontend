"use client";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../component/navbar";
import Image from "next/image";
import 'animate.css';

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__fadeInUp");
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
          }
        });
      },
      {
        threshold: 0.1, // Trigger the animation when 10% of the element is visible
      }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <div style={{ backgroundColor: '#FFD1DC', color: '#212529', padding: '80px 0' }}>
        <div className="container">
          <h1 className="text-center mb-5 display-4 animate-on-scroll">About Us</h1>
          <div className="row align-items-center">
            <div className="col-lg-6 text-center mb-4 mb-lg-0 animate-on-scroll">
              <Image
                src="/assets/img/Logo3.png"
                alt="About Us"
                className="img-fluid rounded shadow"
                width={500}
                height={500}
              />
            </div>
            <div className="col-lg-6 animate-on-scroll">
              <h2 className="mb-4">Our Mission</h2>
              <p className="lead">
                At Cherry Blossom Co., our mission is to provide unforgettable travel experiences. 
                We believe that travel is more than just visiting places; it's about immersing yourself 
                in new cultures, meeting new people, and creating memories that will last a lifetime.
              </p>
              <h2 className="mt-5 mb-4">Our Values</h2>
              <p className="lead">
                We are committed to sustainable travel, ensuring that the destinations we love are preserved 
                for future generations. We prioritize responsible tourism, respecting local communities, and 
                minimizing our environmental impact.
              </p>
              <h2 className="mt-5 mb-4">Contact Us</h2>
              <p className="lead">
                Have questions or want to learn more? Contact us at{' '}
                <a href="mailto:info@CherryBlossom.com">info@CherryBlossom.com</a>.
              </p>
              <button
                className="btn btn-dark btn-lg mt-4"
                style={{ backgroundColor: '#212529', color: '#F4C2C2', transition: 'transform 0.3s ease-in-out' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
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
