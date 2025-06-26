import React from "react";

import featureimage1 from "../assets/img/features/f1.png";
import featureimage2 from "../assets/img/features/f2.png";
import featureimage3 from "../assets/img/features/f3.png";
import featureimage4 from "../assets/img/features/f4.png";
import featureimage5 from "../assets/img/features/f5.png";
import featureimage6 from "../assets/img/features/f6.png";

const features = [
  { id: 1, image: featureimage1, title: "Free Shipping" },
  { id: 2, image: featureimage2, title: "Online Order" },
  { id: 3, image: featureimage3, title: "Save Money" },
  { id: 4, image: featureimage4, title: "Promotions" },
  { id: 5, image: featureimage5, title: "Happy Sell" },
  { id: 6, image: featureimage6, title: "24/7 Support" },
];

const FeatureSection = () => {
  return (
    <div className="py-16 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-20 h-20 object-contain"
            />
            <h4 className="mt-3 text-sm font-semibold text-gray-700 bg-pink-200 px-3 py-1 rounded-md">
              {feature.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
