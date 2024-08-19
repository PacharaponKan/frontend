import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import styles from '../css/Services.module.css'; // Assuming you have a CSS module for styling

export default function Services() {
  const servicesData = [
    {
      icon: 'bi bi-geo-alt', // Bootstrap icon class
      title: 'Destination Tours',
      description: 'Explore the world\'s most beautiful destinations with our exclusive tours.',
    },
    {
      icon: 'bi bi-airplane',
      title: 'Flight Booking',
      description: 'Book your flights easily with our user-friendly platform.',
    },
    {
      icon: 'bi bi-building',
      title: 'Hotel Reservations',
      description: 'Find the best deals on hotels for your stay.',
    },
    {
      icon: 'bi bi-bicycle',
      title: 'Adventure Activities',
      description: 'Experience thrilling adventures with our specially curated activities.',
    },
    {
      icon: 'bi bi-globe',
      title: 'World Travel Packages',
      description: 'Choose from a variety of travel packages that suit your needs.',
    },
    {
      icon: 'bi bi-camera',
      title: 'Photography Tours',
      description: 'Capture beautiful memories with our guided photography tours.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#212529', padding: '50px' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="text-uppercase mb-2" style={{ color: '#FFD1DC' }}>Our Services</p>
          <h2 className="font-weight-bold" style={{ color: '#FFD1DC' }}>Explore the World with Our Travel Services</h2>
        </div>
        <div className="row">
          {servicesData.map((service, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className={`${styles.serviceBox} text-center py-5`} style={{ color: '#FFD1DC' }}>
                <i className={`${service.icon} fa-3x mb-3`} style={{ color: '#FFD1DC' }}></i>
                <h4 className="font-weight-bold mb-3" style={{ color: '#FFD1DC' }}>{service.title}</h4>
                <p style={{ color: '#FFD1DC' }}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
