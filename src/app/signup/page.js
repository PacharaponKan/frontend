"use client";
import Link from "next/link";
import { useState } from "react";

export default function PageIn() {
  const [emailError, setEmailError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePassword = (e) => {
    const passwordInput = e.target
      .closest(".input-group")
      .querySelector("input");
    const icon = e.target.querySelector("i") || e.target;

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.classList.remove("bi-eye");
      icon.classList.add("bi-eye-slash");
    } else {
      passwordInput.type = "password";
      icon.classList.remove("bi-eye-slash");
      icon.classList.add("bi-eye");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("floatingEmail");

    // Validate email
    if (!emailInput.value) {
      emailInput.setCustomValidity("Please enter your email address.");
      setEmailError("Please enter your email address.");
    } else {
      emailInput.setCustomValidity("");
      setEmailError("");
      // Continue with form submission or other logic
    }

    // Trigger form validation
    emailInput.reportValidity();
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#FFD1DC",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <div
          className="card row flex-lg-row flex-column-reverse"
          style={{
            maxWidth: "900px",
            width: "100%",
            boxShadow: "10px 10px 10px rgba(1, 1, 1, 0.1)",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          {/* Left Side */}
          <div
            className="col-lg-6 col-12 d-flex flex-column align-items-center justify-content-center"
            style={{
              backgroundColor: "#212529",
              color: "#FFD1DC",
              padding: "40px",
            }}
          >
            <h2 className="text-center mb-4">Come join us!</h2>
            <p className="text-center mb-4">
              We are so excited to have you here. If you haven't already, create
              an account to get access to exclusive offers, rewards, and
              discounts.
            </p>
            <Link href="/signin" passHref>
              <button
                className="btn"
                style={{
                  backgroundColor: "#FFD1DC",
                  color: "#212529",
                  borderRadius: "50px",
                  padding: "10px 20px",
                }}
              >
                Already have an account? Sign in.
              </button>
            </Link>
          </div>
          {/* Right Side */}
          <div
            className="col-lg-6 col-12"
            style={{ padding: "40px", backgroundColor: "#fff" }}
          >
            <h3 className="text-center mb-4">Signup</h3>
            <form noValidate onSubmit={handleFormSubmit}>
              {/* Username Input */}
              <div className="input-group mb-3">
                <span className="input-group-text bg-light">
                  <i className="bi bi-person-fill"></i>
                </span>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingUsername"
                    placeholder="Username"
                    required
                  />
                  <label htmlFor="floatingUsername">Username</label>
                </div>
              </div>
              {/* Email Input */}
              <div className="input-group mb-3">
                <span className="input-group-text bg-light">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="Email"
                    required
                  />
                  <label htmlFor="floatingEmail">Email</label>
                  {emailError && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "0.9em",
                        marginTop: "5px",
                      }}
                    >
                      {emailError}
                    </div>
                  )}
                </div>
              </div>
              {/* Password Input */}
              <div className="input-group mb-3 position-relative">
                <span className="input-group-text bg-light">
                  <i className="bi bi-lock-fill"></i>
                </span>
                <div className="form-floating">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    required
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button
                  type="button"
                  onClick={handleTogglePassword}
                  className="btn btn-outline-secondary position-absolute end-0 top-0 mt-2 me-3"
                  style={{
                    zIndex: 1,
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#212529",
                  }}
                >
                  <i
                    className={`bi ${
                      passwordVisible ? "bi-eye-slash" : "bi-eye"
                    }`}
                  ></i>
                </button>
              </div>
              {/* Confirm Password Input */}
              <div className="input-group mb-3 position-relative">
                <span className="input-group-text bg-light">
                  <i className="bi bi-lock-fill"></i>
                </span>
                <div className="form-floating">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="form-control"
                    id="floatingConfirmPassword"
                    placeholder="Confirm Password"
                    required
                  />
                  <label htmlFor="floatingConfirmPassword">
                    Confirm Password
                  </label>
                </div>
                <button
                  type="button"
                  onClick={handleTogglePassword}
                  className="btn btn-outline-secondary position-absolute end-0 top-0 mt-2 me-3"
                  style={{
                    zIndex: 1,
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#212529",
                  }}
                >
                  <i
                    className={`bi ${
                      passwordVisible ? "bi-eye-slash" : "bi-eye"
                    }`}
                  ></i>
                </button>
              </div>
              {/* Signup Button */}
              <div className="d-grid mb-3">
                <button
                  className="btn"
                  type="submit"
                  style={{
                    backgroundColor: "#212529",
                    color: "#FFD1DC",
                  }}
                >
                  Signup
                </button>
              </div>
              {/* Social Media Signup */}
              <div className="text-center">
                <p>or signup with</p>
                <a href="https://www.facebook.com" className="btn btn-light me-2">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.google.com" className="btn btn-light me-2">
                  <i className="bi bi-google"></i>
                </a>
                <a href="https://www.linkedin.com" className="btn btn-light">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
