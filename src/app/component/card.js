import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

export default function Cards() {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#F4C2C2", // Card background color
    color: "#333", // Dark text color
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row g-2">
          <div className="col-md-4">
            <div className="card" style={cardStyle}>
              <img
                src="/assets/img/P1.png"
                layout="responsive"
                className="card-img-top"
                alt="Summer Adventure"
              />
              <div className="card-body">
                <h5 className="card-title">Summer Adventure</h5>
                <p className="card-text">
                  Explore the sun-kissed beaches, enjoy vibrant festivals, and
                  experience the ultimate summer adventure with unforgettable
                  memories.
                </p>
                <a
                  href="#"
                  className="btn btn-dark"
                  style={{ color: "#FFD1DC" }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={cardStyle}>
              <img
                src="/assets/img/P2.png"
                layout="responsive"
                className="card-img-top"
                alt="Summer Accommodation"
              />
              <div className="card-body">
                <h5 className="card-title">Summer Accommodation</h5>
                <p className="card-text">
                  Stay in cozy beachside cottages, luxury resorts, or charming
                  mountain lodges, offering comfort and relaxation after a day
                  of summer activities.
                </p>
                <a
                  href="#"
                  className="btn btn-dark"
                  style={{ color: "#FFD1DC" }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="card" style={cardStyle}>
              <img
                src="/assets/img/P3.png"
                layout="responsive"
                className="card-img-top"
                alt="Summer Destinations"
              />
              <div className="card-body">
                <h5 className="card-title">Top Summer Destinations</h5>
                <p className="card-text">
                  From tropical islands to bustling cities, discover the best
                  places to travel this summer and make the most of your
                  holiday.
                </p>
                <a
                  href="#"
                  className="btn btn-dark"
                  style={{ color: "#FFD1DC" }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
