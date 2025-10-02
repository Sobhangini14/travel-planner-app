import React, { useState } from "react";
import Footer from "./Footer.jsx";

export default function App() {
  const destinations = [
    {
      name: "Paris, France",
      image:
        "https://images.unsplash.com/photo-1526481280690-3df2136f65fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Bali, Indonesia",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "New York, USA",
      image:
        "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const packages = [
    { name: "Weekend Getaway", price: "₹30,000", duration: "2 Days" },
    { name: "Adventure Trip", price: "₹60,000", duration: "5 Days" },
    { name: "Luxury Tour", price: "₹1,10,000", duration: "7 Days" },
  ];

  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div
      className="px-5 py-10 min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Main Card */}
      <div className="text-center p-10 backdrop-blur-sm bg-white/30 rounded-xl shadow-lg mx-auto max-w-xl">
        <img
          src="https://cdn-icons-png.flaticon.com/512/69/69524.png"
          alt="Logo"
          className="w-24 h-24 mx-auto mb-5"
        />
        <h1 className="text-5xl font-bold text-blue-700 mb-3">
          Travel Planner App
        </h1>
        <p className="text-lg text-gray-800 mb-5">
          Plan your trips and explore the world with ease!
        </p>
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80"
          alt="Travel"
          className="mt-5 w-full rounded-xl shadow-lg"
        />
        <button className="mt-5 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300">
          Start Planning
        </button>
      </div>

      {/* Destinations Section */}
      <section className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 p-4">
                {dest.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Packages Section */}
      <section className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Travel Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`p-5 rounded-xl shadow-lg text-center cursor-pointer transition transform hover:scale-105 ${
                selectedPackage === index
                  ? "bg-blue-100"
                  : "bg-white/40 backdrop-blur-sm"
              }`}
              onClick={() => setSelectedPackage(index)}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {pkg.name}
              </h3>
              <p className="text-gray-700">{pkg.duration}</p>
              <p className="text-gray-700 font-semibold">{pkg.price}</p>
            </div>
          ))}
        </div>

        {/* Book Now Button */}
        {selectedPackage !== null && (
          <div className="mt-5 text-center">
            <p className="text-lg text-blue-700 mb-3">
              You selected: <strong>{packages[selectedPackage].name}</strong>
            </p>
            <button
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition duration-300"
              onClick={() =>
                alert(
                  `You have booked the ${packages[selectedPackage].name} package!`
                )
              }
            >
              Book Now
            </button>
          </div>
        )}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
