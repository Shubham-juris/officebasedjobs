

import React from "react";
import image from "../../assets/Image/jobs.png";

const ResourceHeader = () => {
  return (
    <div className="w-full mx-auto">
      <div className="grid bg-blue-800 grid-cols-2 py-8 px-4 gap-4">
        <div className="flex items-center justify-center">
          <img src={image} alt="Office jobs illustration" className="h-80" />
        </div>
        <div className="p-4 gap-8 text-white flex flex-col justify-center items-center">
          <h1 className="text-4xl font-extrabold font-serif">
            Resource
          </h1>
          <p className="font-normal text-center ">
            Empower Your Business with Office Based Jobs: Tailored <br /> Recruitment Solutions for Success
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResourceHeader;
