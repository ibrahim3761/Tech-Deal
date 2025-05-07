import React from "react";
import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-lg shadow-md my-8">
      <Helmet>
        <title>Terms&Conditions | Tech Deal</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6 text-gray-800 pb-2 border-b border-gray-200">
        Terms and Conditions
      </h1>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
        <p className="text-gray-700">
          By accessing and using our website, you agree to comply with the
          following terms and conditions. Please read them carefully.
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-700 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              1
            </span>
            Use of Service
          </h2>
          <p className="ml-10 text-gray-600">
            You agree to use the service only for lawful purposes and in a way
            that does not infringe on the rights of others.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-700 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              2
            </span>
            Account Registration
          </h2>
          <p className="ml-10 text-gray-600">
            You must provide accurate and complete information when registering.
            You are responsible for maintaining the confidentiality of your
            account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-700 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              3
            </span>
            Intellectual Property
          </h2>
          <p className="ml-10 text-gray-600">
            All content on this site, including text, graphics, logos, and
            images, is the property of our company and is protected by copyright
            laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-700 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              4
            </span>
            Termination
          </h2>
          <p className="ml-10 text-gray-600">
            We may terminate or suspend your access immediately if you violate
            these terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-700 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              5
            </span>
            Changes to Terms
          </h2>
          <p className="ml-10 text-gray-600">
            We may update these terms from time to time. Continued use of the
            site after changes means you accept the new terms.
          </p>
        </section>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-200 text-gray-500 text-sm italic flex justify-between items-center">
        <p>Last updated: May 7, 2025</p>
      </div>
    </div>
  );
};

export default Terms;
