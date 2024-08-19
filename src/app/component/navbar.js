"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/assets/img/Logo1.png" width={197} height={40} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button "
          style={{ color: "#F4C2C2" }}
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/" style={{ color: "#F4C2C2" }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about" style={{ color: "#F4C2C2" }}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/service" style={{ color: "#F4C2C2" }}>
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact" style={{ color: "#F4C2C2" }}>
                Contact
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center" style={{ gap: "10px" }}>
            <Link href="/signup" passHref>
              <button
                className="btn btn-outline-light"
                type="button"
                style={{
                  color: "#F4C2C2",
                  borderColor: "#F4C2C2",
                  borderRadius: "20px",
                  padding: "5px 20px",
                  fontWeight: "500",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#F4C2C2";
                  e.target.style.color = "black";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#F4C2C2";
                }}
              >
                Sign Up
              </button>
            </Link>
            <Link href="/signin" passHref>
              <button
                className="btn"
                type="button"
                style={{
                  color: "#000",
                  backgroundColor: "#F4C2C2",
                  borderRadius: "20px",
                  padding: "5px 20px",
                  fontWeight: "500",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#212325";
                  e.target.style.color = "#F4C2C2";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#F4C2C2";
                  e.target.style.color = "#212325";
                }}
              >
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}