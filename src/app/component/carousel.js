import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from '../css/Car.module.css';

export default function Car() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className={`carousel slide ${styles.carouselPosition}`}
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2500">
            <img src="/assets/img/P1.png"
            layout="responsive"
            className="d-block w-100"
            alt="1" />
          </div>
          <div className="carousel-item" data-bs-interval="2500">
            <img src="/assets/img/P2.png"
            layout="responsive"
            className="d-block w-100"
            alt="2" />
          </div>
          <div className="carousel-item" data-bs-interval="2500">
            <img src="/assets/img/P3.png"
            layout="responsive"
            className="d-block w-100"
            alt="3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
