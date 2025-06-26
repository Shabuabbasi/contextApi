import React from "react";

import img0 from "../assets/img/logo.png";
import imgpay from "../assets/img/pay/app.jpg"
import imgplay from "../assets/img/pay/play.jpg"
import imgpayment from "../assets/img/pay/pay.png"

function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white px-10 py-20 gap-6">
      <div className="flex flex-col items-center">
        <img src={img0} alt="" />
        <p className="mt-2 text-lg mb-2 font-bold">Contact</p>
        <ul className="mt-2 space-y-1">
          <li>
            {" "}
            <p>
              <strong>Address:</strong> Albarkat Garments, Azad Kashmir
            </p>
          </li>
          <li>
            <p>
              <strong>Phone:</strong> 03438840285
            </p>
          </li>
          <li>
            <p>
              <strong>Hours:</strong> 10:00 am - 04:00 pm, Mon-Sat
            </p>
          </li>
        </ul>
      </div>

      {/* About Section */}
      <div>
        <h3 className="font-medium text-lg">About</h3>
        <ul className="mt-2 space-y-1">
          <li className="hover:text-emerald-700">
            <a href="#">About us</a>
          </li>
          <li className="hover:text-emerald-700">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="hover:text-emerald-700">
            <a href="#">Delivery Information</a>
          </li>
          <li className="hover:text-emerald-700">
            <a href="#">Terms & Condition</a>
          </li>
          <li className="hover:text-emerald-700">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      {/* my accounts*/}
      <div>
        <h3 className="font-medium text-lg">My Account</h3>
        <ul className="mt-2 space-y-1">
          <li className="hover:text-emerald-700">
            <a href="#">Sign in</a>
          </li>
          <li className="hover:text-emerald-700">
            <a href="#">View Cart</a>
          </li>
          <li className="hover:text-emerald-700">
            <a href="#">My Wishlist</a>
          </li>
          <li className="hover:text-emerald-700">
            <a href="#">Add To Cart</a>
          </li>
          <li className="hover:text-emerald-700">
            <a href="#">Help</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-medium text-lg">Install App</h3>
        <p>From App Store or Google Play</p>
        <div className="flex flex-row items-center gap-1">
          <img
            className="border rounded-b-lg border-green-600 mt-2"
            src={imgpay}
            alt=""
          />
          <img
            className="border rounded-b-lg border-green-600 mt-2"
            src={imgplay}
            alt=""
          />
        </div>
        <p>Secured Payment Gateways</p>
        <div className="flex flex-row items-center mt-2 mb-2">
          <img src={imgpayment} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
