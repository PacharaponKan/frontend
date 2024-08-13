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
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#F4C2C2" }}
              >
                Service
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <h6 className="dropdown-header" style={{ color: "#F4C2C2" }}>Service Categories</h6>
                </li>
                <li>
                  <a className="dropdown-item" href="#" style={{ color: "#F4C2C2" }}>
                    Main Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" style={{ color: "#F4C2C2" }}>
                    Additional Services
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <h6 className="dropdown-header" style={{ color: "#F4C2C2" }}>Support and Help</h6>
                </li>
                <li>
                  <a className="dropdown-item" href="#" style={{ color: "#F4C2C2" }}>
                    FAQs
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" style={{ color: "#F4C2C2" }}>
                    User Manuals
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <h6 className="dropdown-header" style={{ color: "#F4C2C2" }}>Promotions</h6>
                </li>
                <li>
                  <a className="dropdown-item" href="#" style={{ color: "#F4C2C2" }}>
                    Special Offers
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" style={{ color: "#F4C2C2" }}>
                    Loyalty Program
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact" style={{ color: "#F4C2C2" }}>
                Contact
              </a>
            </li>
          </ul>
          <div className="d-flex mx-2" style={{ gap: "10px" }}>
            <Link href="/signup" passHref>
              <button
                className="btn"
                type="submit"
                style={{
                  color: "#F4C2C2",
                  backgroundColor: "transparent",
                  borderColor: "#F4C2C2",
                }}
              >
                SignUp
              </button>
            </Link>
            <Link href="/signin" passHref>
              <button
                className="btn"
                type="submit"
                style={{
                  color: "black",
                  backgroundColor: "#F4C2C2",
                }}
              >
                SignIn
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
