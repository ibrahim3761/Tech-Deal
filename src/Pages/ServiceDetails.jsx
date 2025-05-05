import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const ServiceDetails = () => {
    const [service, setService] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState('');

    const data = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        const servicedetails = data.find(single => single.id == id);
        setService(servicedetails);
    }, [data, id]);

    const handleReviewSubmit = () => {
        if (!reviewText.trim() || !rating || rating < 1 || rating > 5) {
            alert('Please enter a valid review and a rating between 1 and 5.');
            return;
        }

        const newReview = {
            text: reviewText,
            rating: parseFloat(rating),
            date: new Date().toLocaleString(),
        };

        setReviews(prev => [newReview, ...prev]);
        setReviewText('');
        setRating('');
    };

    if (!service) return <div>Loading...</div>;

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Main Section: Image + Details */}
            <div className="flex flex-col md:flex-row gap-6 mb-10">
                {/* Left Side - Banner */}
                <div className="w-ful my-auto md:w-1/2">
                    <img
                        src={service.banner}
                        alt={service.name}
                        className="w-full h-80 object-cover rounded-lg shadow"
                    />
                </div>

                {/* Right Side - Text Details */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
                    <p className="text-gray-700 mb-4">{service.description}</p>

                    <div className="mb-4">
                        <h2 className="text-lg font-semibold mb-1">Features:</h2>
                        <ul className="list-disc list-inside text-gray-600">
                            {service.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-lg font-semibold mb-1">Subscription Benefits:</h2>
                        <ul className="list-disc list-inside text-gray-600">
                            {service.subscription_benefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))}
                        </ul>
                    </div>

                    <p className="text-lg font-medium text-green-600 mb-1">Price: ${service.price}</p>
                    <p className="text-md text-yellow-600">
                        ⭐ {service.ratings} ({service.number_of_reviews} reviews)
                    </p>
                </div>
            </div>

            {/* Review Section */}
            <div className="border-t pt-8 mt-10">
                <h2 className="text-2xl font-semibold mb-4">Add a Review</h2>

                <textarea
                    className="w-full border rounded p-2 mb-3"
                    rows={3}
                    placeholder="Write your review..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                />
                <div className="flex items-center gap-4 mb-4">
                    <input
                        type="number"
                        min="1"
                        max="5"
                        className="border p-2 rounded w-24"
                        placeholder="Rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        onClick={handleReviewSubmit}
                    >
                        Submit Review
                    </button>
                </div>

                {reviews.length > 0 && (
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">User Reviews:</h3>
                        <ul className="space-y-4">
                            {reviews.map((rev, idx) => (
                                <li key={idx} className="border rounded p-4 shadow-sm bg-white">
                                    <p className="text-gray-800 mb-2">{rev.text}</p>
                                    <div className="text-sm text-gray-600">
                                        ⭐ Rating: {rev.rating} | {rev.date}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceDetails;
