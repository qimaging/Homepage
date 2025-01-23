"use client";
  
import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div
        className="main-banner"
        style={{ backgroundImage: `url(/images/main-banner.jpg)` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="main-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                >
                  World’s leading TGV processing and Quantum metrology company
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                >
                  Now Glass substrate became compelling choice for the advanced semiconductor package because of its low warpage, low signal loss, fine pitch of circuit and price competitiveness compared with silicon, etc.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                >
                  We are focusing on developing the high quality and time saving laser processing optical solution for TGV(Through Glass Via) and the real time vision inspection tool to find micro-crack and surface roughness on the via-hole.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                >
                  We also research on the Quantum sensing & imaging with NV(Nitrogen Vacancy) diamond to qualify the success and failure of semiconductor chip.
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  {/* <Link href="/contact" className="btn btn-primary">
                    Schedule a Demo
                  </Link>
                  <Link href="/contact" className="optional-btn">
                    Get Started Free
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
