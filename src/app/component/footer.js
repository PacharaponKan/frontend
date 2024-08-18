import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer>
      <div className="container-fluid bg-dark">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5 style={{ color: "#F4C2C2" }}>Explore</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link
                    href="/destinations"
                    className="nav-link p-0"
                    style={{ color: "#F4C2C2" }}
                  >
                    Destinations
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    href="/tours"
                    className="nav-link p-0"
                    style={{ color: "#F4C2C2" }}
                  >
                    Tours
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    href="/activities"
                    className="nav-link p-0"
                    style={{ color: "#F4C2C2" }}
                  >
                    Activities
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    href="/offers"
                    className="nav-link p-0"
                    style={{ color: "#F4C2C2" }}
                  >
                    Special Offers
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    href="/reviews"
                    className="nav-link p-0"
                    style={{ color: "#F4C2C2" }}
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5 style={{ color: "#F4C2C2" }}>Company</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link
                    href="/about"
                    className="nav-link p-0"
                    style={{ color: "#F4C2C2" }}
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    href="/careers"
                    className="nav-link p-0"
                    style={{ color: "#F4C2C2" }}
                  >
                    Careers
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    href="/press"
                    className="nav-link p-0"
                    style={{ color: "#F4C2C2" }}
                  >
                    Press
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    href="/privacy"
                    className="nav-link p-0"
                    style={{ color: "#F4C2C2" }}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    href="/terms"
                    className="nav-link p-0"
                    style={{ color: "#F4C2C2" }}
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5 style={{ color: "#F4C2C2" }}>Support</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link
                    href="/help"
                    className="nav-link p-0"
                    style={{ color: "#F4C2C2" }}
                  >
                    Help Center
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    href="/contact"
                    className="nav-link p-0"
                    style={{ color: "#F4C2C2" }}
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    href="/faqs"
                    className="nav-link p-0"
                    style={{ color: "#F4C2C2" }}
                  >
                    FAQs
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    href="/booking"
                    className="nav-link p-0"
                    style={{ color: "#F4C2C2" }}
                  >
                    Manage Booking
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    href="/refunds"
                    className="nav-link p-0"
                    style={{ color: "#F4C2C2" }}
                  >
                    Refunds & Cancellations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5 style={{ color: "#F4C2C2" }}>
                  Subscribe to our newsletter
                </h5>
                <p style={{ color: "#F4C2C2" }}>
                  Get the latest travel tips, deals, and news delivered to your
                  inbox.
                </p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    required
                  />
                  <button
                    className="btn"
                    type="submit"
                    style={{ color: "black", backgroundColor: "#F4C2C2" }}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between my-4 border-top">
            <p style={{ color: "#F4C2C2" }}>
              © 2024 CherryBlossomCo, Inc. All rights reserved.
            </p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#twitter" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#instagram" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#facebook" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </footer>
  );
}
