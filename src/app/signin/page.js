"use client";
import Link from "next/link";
import Nav from "../component/navbar";

export default function PageIn() {
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

  return (
    <>
      <div style={{ backgroundColor: "#FFD1DC", minHeight: "80vh" }}>
        <Nav />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="card">
            <h5 className="card-header bg-dark text-light">Sign In</h5>
            <div className="card-body shadow-lg">
              <form className="row g-3">
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="bi bi-person-fill"></i>
                  </span>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInputGroup1"
                      placeholder="Username"
                    />
                    <label htmlFor="floatingInputGroup1">Username</label>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="bi bi-lock-fill"></i>
                  </span>
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="inputconfirmpassword"
                      placeholder="Confirm Password"
                    />
                    <label htmlFor="inputconfirmpassword">
                      Confirm Password
                    </label>
                    <button
                      type="button"
                      onClick={handleTogglePassword}
                      className="btn btn-outline-secondary"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "10px",
                      }}
                    >
                      <i className="bi bi-eye"></i>
                    </button>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Remember Me
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    className="btn"
                    type="submit"
                    style={{ color: "black", backgroundColor: "#F4C2C2" }}
                  >
                    SignIn
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
