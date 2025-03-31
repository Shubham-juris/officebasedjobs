import React from "react";
import image from "../../assets/Image/jobs.png";
import images from "../../assets/Image/jobseekers/elevateyourcareer.jpg";
const Header = () => {
  return (
    <>
      <div className="w-full">
        <div className="grid bg-blue-800 grid-cols-1 md:grid-cols-2 py-8 px-4 gap-4">
          <div className="flex items-center justify-center order-2 md:order-1">
            <img
              src={image}
              alt="image"
              className="h-48 w-[80%] sm:w-[90vh] md:h-80 md:w-auto"
            />
          </div>
          <div className="p-4 gap-4 md:gap-8 text-white flex flex-col justify-center items-center order-1 md:order-2">
            <h1 className="text-2xl md:text-4xl font-extrabold font-serif text-center">
              Elevate Your Career
            </h1>
            <p className="font-normal text-center">
              Expand your career Possibilities with office Based Jobs
            </p>
          </div>
        </div>

        {/* Discover Section */}
        <div className="w-full flex justify-center items-center py-6 md:py-8 mt-4 md:mt-6 p-4">
          <p className="font-serif font-extrabold text-xl md:text-3xl text-center">
            Discover Office jobs Tailored just for you with us.
          </p>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 py-6 md:py-8 px-4 gap-6 md:gap-4">
          <div className="p-4 gap-6 md:gap-12 text-black flex flex-col justify-between items-start">
            <h1 className="text-base tracking-widest font-extrabold font-serif">
              Unlock the full potential of your team with office based jobs!
            </h1>
            <p className="font-light text-base md:text-lg">
              At Office Based Jobs, we believe that every business has the
              potential to achieve great things with the right team in place.
              That's why we offer a range of services to help you attract,
              develop, and retain top talent. Whether you're seeking your next
              challenge or looking to take the next step in your career, we
              offer a range of services tailored to meet your needs.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src={images} alt="image" className="h-48 md:h-80 w-auto" />
          </div>
        </div>

        {/* Job Listings */}
        {/* Each job listing card */}
        <h1 className="text-2xl md:text-3xl font-extrabold font-serif text-center mt-8 mb-4">
          WE ARE HIRING
        </h1>

        {/* Job Cards - Make each job card responsive */}
        <div className="bg-white rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8">
          <div className="w-full md:w-1/2 p-4 md:px-12">
            {/* Job details content */}
            {/* Maintain the same structure but adjust padding and margins */}
          </div>

          {/* Application Form */}
          <div className="w-full md:w-1/2 p-4 md:p-6">
            <div className="flex justify-start mb-4">
              <button className="text-black font-thin">APPLY NOW</button>
            </div>

            <form className="space-y-4">
              {/* Form fields with responsive padding and margins */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Other form fields... */}
            </form>
          </div>
        </div>

        {/* Repeat the same responsive structure for other job listings */}
        {/* ... */}
      </div>
    </>
  );
};

export default Header;
