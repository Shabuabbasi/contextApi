import React from "react";

import bannerim from "../assets/img/banner/b2.jpg";

const Banner = () => {
  return (
    <div className=" flex md:flex-wrap justify-center items-center">
      <img src={bannerim} alt="" />
    </div>
  );
};

export default Banner;
