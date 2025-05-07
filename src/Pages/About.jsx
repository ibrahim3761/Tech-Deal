import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800 px-6 py-16">
      <Helmet>
        <title>About | Tech Deal</title>
      </Helmet>
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          About Us
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn more about who we are, what we do, and why we're passionate
          about delivering exceptional technology solutions that transform
          lives.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto mb-20">
        <div className="md:w-1/2 overflow-hidden rounded-2xl shadow-xl">
          <img
            src="https://res.cloudinary.com/dueycilps/image/upload/v1746540261/about-us_jvqhvl.jpg"
            alt="Our team collaborating"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our mission is to empower users with smart, innovative, and
            accessible technology solutions that simplify everyday life and
            create meaningful impact.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We believe in quality, transparency, and creating tech that
            genuinely improves people's lives. Whether it's smart home setups or
            cutting-edge automation, we're here to help you stay ahead.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
              Innovation
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium">
              Quality
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">
              Accessibility
            </span>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              description:
                "We constantly push boundaries to create solutions that are ahead of the curve.",
              icon: "✨",
            },
            {
              title: "Integrity",
              description:
                "We're committed to transparency, honesty, and ethical practices in everything we do.",
              icon: "🤝",
            },
            {
              title: "Excellence",
              description:
                "We strive for excellence in every product, service, and interaction.",
              icon: "🏆",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
