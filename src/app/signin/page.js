"use client";
import Link from "next/link";
import { useState } from "react";

export default function PageIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
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
          padding: "20px", // Ensure padding for smaller screens
        }}
      >
        <div
          className="card row flex-lg-row flex-column-reverse"
          style={{
            maxWidth: "900px",
            width: "100%",
            borderRadius: "10px",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)", // Full shadow effect
            overflow: "hidden", // Ensure rounded corners work well
          }}
        >
          {/* Left Side */}
          <div
            className="col-lg-6 col-12"
            style={{
              backgroundColor: "#212529",
              color: "#FFD1DC",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2 className="text-center mb-4">Welcome Back!</h2>
            <p className="text-center mb-4">
              We're glad to see you again! Sign in to continue where you left
              off and access your personalized dashboard, offers, and more.
            </p>
            <Link href="/signup" passHref>
              <button
                className="btn"
                style={{
                  backgroundColor: "#FFD1DC",
                  color: "#212529",
                  borderRadius: "50px",
                  padding: "10px 20px",
                }}
              >
                New here? Create an account.
              </button>
            </Link>
          </div>
          {/* Right Side */}
          <div
            className="col-lg-6 col-12"
            style={{
              padding: "40px",
              backgroundColor: "#fff",
            }}
          >
            <h3 className="text-center mb-4">Sign In</h3>
            <form noValidate>
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
                  <i className={`bi ${passwordVisible ? "bi-eye-slash" : "bi-eye"}`}></i>
                </button>
              </div>
              {/* Login Button */}
              <div className="d-grid mb-3">
                <button
                  className="btn"
                  type="submit"
                  style={{
                    backgroundColor: "#212529",
                    color: "#FFD1DC",
                  }}
                >
                  Login
                </button>
              </div>
              {/* Social Media Login */}
              <div className="text-center">
                <p>or Login with</p>
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
