import React from "react";

const SubscribeSection = () => {
  return (
    <div className="bg-blue-600 text-white py-20 px-4 text-center">
      <h2 className="text-4xl md:text-5xl py-4 font-extrabold font-serif mb-2">
        Subscribe
      </h2>
      <p className="mb-6 text-sm md:text-base">
        Sign up to hear from us about specials, sales, and events.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
        <input
          type="email"
          placeholder="Email"
          className="w-full md:w-4/5 p-3 bg-blue-700 rounded-md text-white outline-none"
        />
        <button className="bg-white text-black text-sm rounded-full font-mono p-2 px-4 hover:bg-gray-200 transition">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default SubscribeSection;
