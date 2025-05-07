import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-lg shadow-md my-8">
      <Helmet>
        <title>PrivacyPolicy | Tech Deal</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6 text-gray-800 pb-2 border-b border-gray-200">
        Privacy Policy
      </h1>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
        <p className="text-gray-700">
          Your privacy is important to us. It is our policy to respect your
          privacy regarding any information we may collect from you across our
          website.
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-700 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              1
            </span>
            Information We Collect
          </h2>
          <p className="ml-10 text-gray-600">
            We may collect personal information such as your name, email
            address, and profile photo when you register or use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-700 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              2
            </span>
            How We Use Information
          </h2>
          <div className="ml-10 text-gray-600">
            <p>We use your information to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Provide and maintain our service</li>
              <li>Notify you about changes to our service</li>
              <li>Provide customer support</li>
              <li>Monitor usage to improve the service</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-700 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              3
            </span>
            Sharing Your Information
          </h2>
          <p className="ml-10 text-gray-600">
            We do not share your personal information with third parties except
            when required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-700 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              4
            </span>
            Security
          </h2>
          <p className="ml-10 text-gray-600">
            We take reasonable steps to protect your personal data but remember
            that no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-700 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              5
            </span>
            Changes to This Policy
          </h2>
          <p className="ml-10 text-gray-600">
            We may update our Privacy Policy from time to time. We encourage you
            to review this page periodically.
          </p>
        </section>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-200 text-gray-500 text-sm italic flex justify-between items-center">
        <p>Last updated: May 7, 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
