import React from "react";
import productimg1 from "../assets/img/products/f1.jpg";
import productimg2 from "../assets/img/products/f2.jpg";
import productimg3 from "../assets/img/products/f3.jpg";
import productimg4 from "../assets/img/products/f4.jpg";
import productimg5 from "../assets/img/products/f5.jpg";
import productimg6 from "../assets/img/products/f6.jpg";
import productimg7 from "../assets/img/products/f7.jpg";
import productimg8 from "../assets/img/products/f8.jpg";
import Cart from "../assets/img/cart.svg";

const Products = () => {
  // Product data array for easier management
  const products = [
    {
      id: 1,
      img: productimg1,
      name: "Cartoon Astronaut T-Shirts",
      price: "$78",
      rating: 4.5,
    },
    {
      id: 2,
      img: productimg2,
      name: "Men's Slim Fit T-Shirt",
      price: "$59",
      rating: 4.0,
    },
    {
      id: 3,
      img: productimg3,
      name: "Women's Floral Blouse",
      price: "$45",
      rating: 4.8,
    },
    {
      id: 4,
      img: productimg4,
      name: "Unisex Hooded Sweatshirt",
      price: "$89",
      rating: 4.2,
    },
    {
      id: 5,
      img: productimg5,
      name: "Classic Denim Jeans",
      price: "$65",
      rating: 4.7,
    },
    {
      id: 6,
      img: productimg6,
      name: "Running Sneakers",
      price: "$120",
      rating: 4.9,
    },
    {
      id: 7,
      img: productimg7,
      name: "Leather Crossbody Bag",
      price: "$95",
      rating: 4.3,
    },
    {
      id: 8,
      img: productimg8,
      name: "Baseball Cap",
      price: "$25",
      rating: 3.9,
    },
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-4 h-4 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <section className="px-4 py-12 md:px-10 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Summer Collection New Modern Design
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <a href="#">
                <img
                  className="w-full h-64 object-cover p-4"
                  src={product.img}
                  alt={product.name}
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {product.name}
                  </h5>
                </a>
                <div className="flex items-center mb-4">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {renderStars(product.rating)}
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                    {product.rating}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    {product.price}
                  </span>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center">
                    <img src={Cart} alt="Cart" className="w-4 h-4 mr-2" />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
