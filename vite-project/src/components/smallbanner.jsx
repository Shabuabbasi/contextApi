import React from "react";
import Banner17 from "../assets/img/banner/b17.jpg";
import Banner10 from "../assets/img/banner/b10.jpg";

function Smallbanner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-wrap justify-between items-center border-2 border-amber-50 shadow-lg mt-4 p-1">
        <img src={Banner17} alt="" />
      </div>
      <div className="flex flex-wrap justify-between items-center border-2 border-amber-50 shadow-lg p-1">
        <img src={Banner10} alt="" />
          <h2 class="text-black text-3xl font-bold">Get 50% OFF</h2>
          <button className="text-amber-900 bg-indigo-200 rounded-md hover:bg-amber-100">Learn More</button>
      </div>
    </div>
  );
}

export default Smallbanner;
