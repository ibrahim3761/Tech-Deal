import React from "react";
import Banner from "../Componenets/Banner/Banner";
import { FaMoneyBillWave, FaLightbulb, FaTools, FaBoxOpen, FaCheckCircle, FaTruck } from "react-icons/fa";
import { useLoaderData } from "react-router";
import Service from "../Componenets/Service/Service";

const Home = () => {

  const datas = useLoaderData();
  return (
    <div className="px-4 md:px-10">
      <main className="my-10 space-y-16">
        {/* Banner */}
        <Banner></Banner>
        {/* Subscription */}
        <section className="text-center">
            <h2 className="text-3xl font-bold  mb-6">Our Services</h2>
            <div className="grid md:grid-cols-2">
              {
                datas.map(data=><Service key={data.id} data ={data}></Service>)
              }
            </div>
        </section>
        {/* Why Subscribe Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold  mb-6">❄️ Why Subscribe?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-base-200 rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <FaMoneyBillWave className="text-4xl mx-auto text-green-500 mb-4" />
              <h3 className="text-xl font-semibold">Save Money</h3>
              <p>Enjoy exclusive tech deals and bundled discounts with every box.</p>
            </div>
            <div className="bg-base-200 rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <FaLightbulb className="text-4xl mx-auto text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold">Discover New Tech</h3>
              <p>Get access to cutting-edge gadgets and hidden gems each month.</p>
            </div>
            <div className="bg-base-200 rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <FaTools className="text-4xl mx-auto text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold">Expert Curation</h3>
              <p>Every item is handpicked by industry pros to match your interests.</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">📦 How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-base-200 rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <FaCheckCircle className="text-4xl mx-auto text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold">Choose Your Box</h3>
              <p>Select the subscription that fits your style and needs.</p>
            </div>
            <div className="bg-base-200 rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <FaBoxOpen className="text-4xl mx-auto text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold">Subscribe</h3>
              <p>Complete your subscription in a few easy steps.</p>
            </div>
            <div className="bg-base-200 rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <FaTruck className="text-4xl mx-auto text-red-500 mb-4" />
              <h3 className="text-xl font-semibold">Receive Monthly Box</h3>
              <p>Get surprises delivered to your door every month.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
