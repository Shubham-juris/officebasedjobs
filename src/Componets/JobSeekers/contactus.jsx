import React from "react";

const Contactus = () => {
  return (
    <div className="flex  flex-col items-center justify-center py-8 mt-3 p-6 text-center">
      <h2 className="text-4xl font-serif font-bold  mb-2">Contact Us</h2>
      <p className="text-md font-semibold tracking-wide mt-12 text-gray-700 mb-6">
        BETTER YET, SEE US IN PERSON!
      </p>
      <p className="text-gray-600 text-sm mb-6">
        We love our customers, so feel free to visit during normal business
        hours.
      </p> 

      <h3 className="text-md font-semibold text-gray-700  tracking-wide mb-2">
        OFFICE BASED JOBS
      </h3>
      <a
        href="mailto:monashah44271@gmail.com"
        className="text-blue-600 underline mb-6"
      >
        monashah44271@gmail.com
      </a>

      <h3 className="text-md font-semibold text-gray-700  tracking-wide mb-2">
        HOURS
      </h3>
      <p className="text-gray-600 text-sm mb-6">
        Open today{" "}
        <span className="text-blue-600 text-base">09:00 a.m. – 05:00 p.m.</span>
      </p>
    </div>
  );
};

export default Contactus;
