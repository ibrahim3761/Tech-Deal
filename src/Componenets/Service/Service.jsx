import React from "react";
import { Link } from "react-router";

const Service = ({ data }) => {
  const {
    id,
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
      <Link to={`/servicedetails/${id}`}>
      <button className=" w-full mt-auto bg-indigo-600 text-white py-2 cursor-pointer px-4 rounded-lg hover:bg-indigo-700 transition">
        View More
      </button>
      </Link>
    </div>
  );
};

export default Service;
