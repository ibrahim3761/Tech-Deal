import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router";

const ServiceDetails = () => {
  const [service, setService] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");

  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const servicedetails = data.find((single) => single.id == id);
    setService(servicedetails);
  }, [data, id]);

  const handleReviewSubmit = () => {
    if (!reviewText.trim() || !rating || rating < 1 || rating > 5) {
      alert("Please enter a valid review and a rating between 1 and 5.");
      return;
    }

    const newReview = {
      text: reviewText,
      rating: parseFloat(rating),
      date: new Date().toLocaleString(),
    };

    setReviews((prev) => [newReview, ...prev]);
    setReviewText("");
    setRating("");
  };

  if (!service)
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <span className="loading loading-infinity loading-xl text-blue-600"></span>
      </div>
    );

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Helmet>
        <title>{service.name} | Tech Deal</title>
      </Helmet>
      
      {/* Header and Slogan */}
      <div className="bg-blue-600 text-white py-6 shadow-md mb-8">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-3xl font-bold mb-2">Tech Deal</h1>
          <p className="text-blue-100 italic">The Future of Tech, Available Today</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Main Section: Image + Details */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Banner */}
            <div className="w-full md:w-1/2">
              <div className="h-full relative group">
                <img
                  src={service.banner}
                  alt={service.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full font-medium">
                  ${service.price}
                </div>
              </div>
            </div>

            {/* Right Side - Text Details */}
            <div className="w-full md:w-1/2 p-8">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold text-gray-800">{service.name}</h1>
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full flex items-center">
                  <span className="text-yellow-500 mr-1">★</span> 
                  <span className="font-medium">{service.ratings}</span>
                  <span className="text-gray-500 text-sm ml-1">({service.number_of_reviews})</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                  <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Features:
                </h2>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                  <span className="bg-purple-100 text-purple-600 p-1 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Subscription Benefits:
                </h2>
                <ul className="space-y-2">
                  {service.subscription_benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all hover:shadow-lg w-full md:w-auto">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Review Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 pb-2 border-b">Customer Reviews</h2>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-700">Add Your Review</h3>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              rows={3}
              placeholder="Share your experience with this service..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-2">
              <div className="flex items-center bg-white rounded-lg border border-gray-300 p-2 w-full sm:w-auto">
                <span className="text-gray-500 mr-2">Rating:</span>
                <input
                  type="number"
                  min="1"
                  max="5"
                  className="w-16 focus:outline-none"
                  placeholder="1-5"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
                <span className="text-yellow-500 ml-1">★</span>
              </div>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors w-full sm:w-auto"
                onClick={handleReviewSubmit}
              >
                Submit Review
              </button>
            </div>
          </div>

          {reviews.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Latest Reviews:</h3>
              <div className="space-y-4">
                {reviews.map((rev, idx) => (
                  <div key={idx} className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
                    <p className="text-gray-700 mb-3">{rev.text}</p>
                    <div className="flex justify-between items-center text-sm">
                      <div className="text-yellow-500 flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < rev.rating ? "text-yellow-500" : "text-gray-300"}>★</span>
                        ))}
                        <span className="ml-2 text-gray-600">{rev.rating}/5</span>
                      </div>
                      <div className="text-gray-500 italic">{rev.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {reviews.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>No reviews yet. Be the first to review this service!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;