import React from "react";

export default function JoinUsSection() {
  return (
    <div className="w-full flex flex-col items-center py-10 bg-gray-950 text-white px-4 sm:px-8 md:px-16 relative">
      <h2 className="text-5xl font-bold text-center mb-6">Join Us</h2>
      
      {/* Invitation Message */}
      <p className="text-lg text-center max-w-2xl mb-8">
        We warmly invite you to celebrate our special day with us. Your presence will make our wedding truly joyful and memorable.
      </p>
{/*       
      <p className="text-lg text-center max-w-2xl">
        Please join us for the wedding ceremony and reception as we embark on this new journey together.
      </p> */}
      
      {/* Contact Details */}
      <div className="absolute bottom-8 right-8 text-right text-sm sm:text-base">
        <p className="font-semibold">Contact Us</p>
        <p>Sanesh: +91 9745609556</p>
        <p>Akshata: +91 8921427689</p>
      </div>
    </div>
  );
}
