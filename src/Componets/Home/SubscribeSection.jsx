import React from "react";

const SubscribeSection = () => {
  return (
    <div className="bg-blue-600 text-white py-20 px-4 text-center">
      <h2 className="text-4xl py-4 font-extrabold font-serif mb-2">Subscribe</h2>
      <p className="mb-6">
        Sign up to hear from us about specials, sales, and events.
      </p>

      <div className="flex justify-center items-center gap-2  max-w-lg mx-auto">
        <input
          type="email"
          placeholder="Email"
          className="w-4/5 p-3  bg-blue-700  rounded-md text-white outline-none"
        />
        <button className="bg-white text-black text-sm rounded-full font-mono p-2 px-4 hover:bg-gray-200 transition">
          SIGN UP
        </button>
      </div>
      {/*     
    <p className="mt-8 text-sm">Copyright &copy; 2024 Office Based Jobs - All Rights Reserved.</p>
    
    <div className="flex justify-center gap-6 mt-4 text-sm font-semibold">
      <a href="#" className="hover:underline">HOME</a>
      <a href="#" className="hover:underline">ABOUT</a>
      <a href="#" className="hover:underline">JOB SEEKERS</a>
      <a href="#" className="hover:underline">EMPLOYERS</a>
      <a href="#" className="hover:underline">RESOURCES</a>
      <a href="#" className="hover:underline">CONTACT</a>
    </div>
    
    <p className="mt-6 text-sm">Powered by <span className="font-semibold">KTL Software Inc.</span></p> */}
    </div>
  );
};

export default SubscribeSection;
