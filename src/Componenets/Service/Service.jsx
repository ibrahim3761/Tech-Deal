import React from "react";

const Service = ({ data }) => {
  const {
    name,
    thumbnail,
    tech_category,
    price,
    frequency,
  } = data;

  return (
    <div className="bg-base-200 rounded-xl shadow-md p-4 m-4 hover:shadow-xl transition flex flex-col">
      {/* Thumbnail */}
      <img src={thumbnail} alt={name} className="w-full h-60 object-fit rounded-lg mb-4" />
      
      {/* Name */}
      <h3 className="text-xl font-bold mb-2">{name}</h3>

      {/* Tech Category */}
      <p className="text-sm text-gray-500 mb-2">Category: {tech_category}</p>

      {/* Price & Frequency */}
      <p className="text-lg font-semibold text-green-600 mb-4">${price} / {frequency}</p>

      {/* View More Button */}
      <button className="mt-auto bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition">
        View More
      </button>
    </div>
  );
};

export default Service;
