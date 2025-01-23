"use client";
  
import React from "react";
import Link from "next/link";

const Featured = () => {
  return (
    <>
      <div className="featured-services-area">
        <div className="container">
          <div className="featured-services-inner">
            <div className="row m-0">
              <div className="col-lg-4 col-md-6 col-sm-6 p-0">
                <div className="single-featured-services-box">
                  <div className="icon">
                    <i className="flaticon-robot"></i>
                  </div>

                  <h3>
                    <Link href="/services/details">
                    Laser processing optics
                    </Link>
                  </h3>
                  <p>
                  High quality micro processing optical solution provider for TGV(Through Glass Via) manufacturer
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 p-0">
                <div className="single-featured-services-box">
                  <div className="icon">
                    <i className="flaticon-artificial-intelligence"></i>
                  </div>

                  <h3>
                    <Link href="/services/details">Semiconductor inspection optics
                    </Link>
                  </h3>
                  <p>
                  High quality vision inspection solution provider for TGV(Through Glass Via) and HBM(High Bandwidth Memory)
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 p-0">
                <div className="single-featured-services-box">
                  <div className="icon">
                    <i className="flaticon-machine-learning"></i>
                  </div>

                  <h3>
                    <Link href="/services/details">Quantum imaging
                    </Link>
                  </h3>
                  <p>
                  Research on the Quantum qualification metrology for HBM(High Bandwidth Memory)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
