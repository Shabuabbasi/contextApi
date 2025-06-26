import React from "react";
import productimg1 from "../assets/img/products/f1.jpg";
import Cart from "../assets/img/cart.svg";

const products = [
  {
    id: 1,
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    brand: "Addidas",
    price: "$599",
    rating: 4,
    image: productimg1,
  },
  {
    id: 2,
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    brand: "Addidas",
    price: "$599",
    rating: 4,
    image: productimg1,
  },
  {
    id: 3,
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    brand: "Addidas",
    price: "$599",
    rating: 4,
    image: productimg1,
  },
  {
    id: 4,
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    brand: "Addidas",
    price: "$599",
    rating: 4,
    image: productimg1,
  },
  {
    id: 5,
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    brand: "Addidas",
    price: "$599",
    rating: 4,
    image: productimg1,
  },
  {
    id: 6,
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    brand: "Addidas",
    price: "$599",
    rating: 4,
    image: productimg1,
  },
];

function Items() {
  return (
    <div className="bg-gray-50 py-16">
      {/* Header Section */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          New Arrivals
        </h2>
        <p className="text-gray-500 text-lg">Summer Collection 50% OFF</p>
      </div>

      {/* Products Grid */}
      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-start border border-gray-200 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-5 w-[280px] md:w-[300px]"
          >
            {/* Product Image */}
            <img
              className="w-full h-[260px] object-cover rounded-xl border border-[#cce7d0]"
              src={product.image}
              alt={product.title}
            />

            {/* Product Info */}
            <div className="mt-4 w-full space-y-2">
              <p className="text-xs text-gray-400 uppercase tracking-wide">
                {product.brand}
              </p>

              <h5 className="text-base font-semibold text-gray-800 leading-tight">
                {product.title}
              </h5>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mt-2">
                {[...Array(product.rating)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
                {[...Array(5 - product.rating)].map((_, index) => (
                  <svg
                    key={`empty-${index}`}
                    className="w-4 h-4 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
                <span className="ml-2 text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                  5.0
                </span>
              </div>

              {/* Price & Cart */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-gray-900">
                  {product.price}
                </span>
                <a
                  href="/"
                  className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                >
                  <img src={Cart} alt="cart" width={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;
