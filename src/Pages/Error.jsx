import React from 'react';
import { Link } from 'react-router'; // Fixed incorrect import

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center px-4">
            <img
                src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Broken robot illustration"
                className="w-full max-w-xs md:max-w-md mb-6 rounded-lg shadow"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/300x200?text=404+Image+Not+Found";
                }}
            />

            <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
                Oops! Page Not Found
            </h1>
            <p className="text-gray-700 text-base md:text-lg mb-8 max-w-xl">
                The page you're looking for doesn’t exist, may have been moved, or you might have followed a broken link.
            </p>

            <Link
                to="/"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-semibold py-2 px-5 rounded shadow transition"
            >
                ⬅ Back to Home
            </Link>
        </div>
    );
};

export default Error;
