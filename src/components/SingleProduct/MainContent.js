"use client";

import React from "react";
import DetailsTab from "../../components/SingleProduct/DetailsTab";
import Counter from "./Counter";
import Image from "next/image";

const MainContent = () => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="product-details-desc">
              <h3>White Book</h3>

              <div className="price">
                <span className="new-price">$8.00</span>
                <span className="old-price">$12.00</span>
              </div>

              <div className="product-review">
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <a href="#" className="rating-count">
                  3 reviews
                </a>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et.
              </p>

              <div className="product-add-to-cart">
                <Counter />

                <button className="btn btn-primary">
                  <i className="fas fa-cart-plus"></i> Add to Cart
                </button>
              </div>

              <div className="buy-checkbox-btn">
                <div className="item">
                  <input className="inp-cbx" id="cbx" type="checkbox" />
                  <label className="cbx" htmlFor="cbx">
                    <span>
                      <svg width="12px" height="10px" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>I agree with the terms and conditions</span>
                  </label>
                </div>

                <div className="item">
                  <a href="#" className="btn btn-light">
                    Buy it now!
                  </a>
                </div>
              </div>

              <div className="custom-payment-options">
                <span>Guaranteed safe checkout:</span>
                <div className="payment-methods">
                  <a href="#">
                    <Image
                      src="/images/payment/1.svg"
                      alt="image"
                      width={38}
                      height={24}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/images/payment/2.svg"
                      alt="image"
                      width={38}
                      height={24}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/images/payment/3.svg"
                      alt="image"
                      width={38}
                      height={24}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/images/payment/4.svg"
                      alt="image"
                      width={38}
                      height={24}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/images/payment/5.svg"
                      alt="image"
                      width={38}
                      height={24}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/images/payment/6.svg"
                      alt="image"
                      width={38}
                      height={24}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/images/payment/7.svg"
                      alt="image"
                      width={38}
                      height={24}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="product-details-image">
              <Image
                src="/images/shop/1.jpg"
                alt="image"
                width={800}
                height={850}
              />
            </div>
          </div>

          <DetailsTab />
        </div>
      </div>
    </>
  );
};

export default MainContent;
