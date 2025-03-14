import React from "react";
import { FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

export default function VenueSection() {
  return (
    <div className="w-full flex flex-col items-center py-20 bg-gray-50 text-gray-900 px-4 sm:px-8 md:px-16">
      <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-10 text-gray-900 uppercase">Venue Details</h2>

      <div className="venue-container w-full flex flex-col sm:flex-row sm:space-x-8 gap-8 sm:gap-20 mb-12">

        <div className="venue-card w-full sm:w-1/2 bg-white p-8 rounded-lg shadow-lg bg-gradient-to-r from-pink-50 via-pink-100 to-pink-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-opacity-25 bg-cover bg-center" style={{ backgroundImage: 'url("/wedding-cartoon.jpg")' }}></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-semibold text-center mb-6 text-white drop-shadow-md">Wedding Venue</h3>

            <div className="flex items-center text-lg text-white mb-4">
              <FaRegClock className="mr-2 text-white-1000" />
              <p className="font-medium">April 12, 2025 - 10:00 AM to 10:30 AM</p>
            </div>

            <div className="flex items-center text-lg text-white mb-6">
              <FaMapMarkerAlt className="mr-2 text-white-1000" />
              <p className="font-medium">Luxotica International Convention Center, Dharmashala, Kannur</p>
            </div>

            <a
              href="https://maps.app.goo.gl/1QZPrXCNXuDpRevh7?g_st=com.google.maps.preview.copy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:bg-gray-700 font-semibold text-lg py-2 px-4 rounded-full bg-white border-2 border-yellow-600 hover:text-white transition duration-300"
            >
              View on Google Maps
            </a>
          </div>
        </div>

        <div className="venue-card w-full sm:w-1/2 bg-white p-8 rounded-lg shadow-lg bg-gradient-to-r from-pink-50 via-pink-100 to-pink-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-opacity-25 bg-cover bg-center" style={{ backgroundImage: 'url("/reception-cartoon.jpg")' }}></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-semibold text-center mb-6 text-white drop-shadow-md ">Reception Venue</h3>
            <div className="flex items-center text-lg text-white mb-4">
              <FaRegClock className="mr-2 text-white-600" />
              <p className="font-medium">April 12, 2025 - 05:00 PM to 10:00 PM</p>
            </div>

            <div className="flex items-center text-lg text-white mb-6">
              <FaMapMarkerAlt className="mr-2 text-white-600" />
              <p className="font-medium">Groom's Home, Thaliparamba</p>
            </div>

            <a
              href="https://maps.app.goo.gl/W1GKnYtVSTwHE7JJ8?g_st=com.google.maps.preview.copy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:bg-gray-700 font-semibold text-lg py-2 px-4 rounded-full bg-white border-2 border-yellow-600 hover:text-white transition duration-300"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
