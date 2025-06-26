import React from "react";
import heroImage from "../assets/img/hero4.png";

const HeroSection = () => {
  return (
    <div
      className=" h-screen flex items-center justify-between  px-10 py-20 relative bg-amber-300"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
        width: "100%",
        height: "100vh",
      }}
    >
      <div>
        <h3 className="text-lg ">Trade-in-Offer</h3>
        <h1 className="text-4xl font-bold">
          Super value deals <br />
          <span className="text-teal-500">On all products</span>
        </h1>
        <p className="text-gray-500">Save more with coupons & up to 70% off!</p>
        <button className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">
          Shop Now
        </button>
      </div>
      <div className="w-1/2 h-full bg-no-repeat bg-contain bg-right"></div>
    </div>
  );
};

export default HeroSection;
