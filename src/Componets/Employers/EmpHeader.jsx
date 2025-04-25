import React from "react";
import image from "../../assets/Image/employers/empimg.jpg";

const EmpHeader = () => {
  return (
    <div className="w-full bg-blue-800 mx-auto">
      <div className="flex max-w-7xl justify-center mx-auto">
      <div className="grid  grid-cols-1 justify-center mx-auto md:grid-cols-2 py-8 px-4 gap-4">
        <div className="flex items-center   justify-center">
          <img
            style={{ width: "500px", height: "320px" }}
            src={image}
            alt="Office jobs illustration"
            className="h-60 w-[50rem] md:h-80 w-90 md:w-80" // Increased width for mobile and desktop devices
          />
        </div>
        <div className="p-4 gap-4 md:gap-8 text-white flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-4xl font-extrabold font-serif text-center">
            Find the Best Talent!
          </h1>
          <p className="font-normal text-center text-sm md:text-base">
            Empower Your Business with Office Based Jobs: Tailored Recruitment
            Solutions for Success
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EmpHeader;
