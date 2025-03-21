import React from "react";

const EmpServices = () => {
  return (
    <div className="w-full py-16 px-4 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-blue-700 mb-10">
        Employer Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="space-y-5">
          <h3 className="uppercase text-md font-semibold tracking-wider">
            Personalized Guidance
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            Receive expert guidance and support from our team of recruitment specialists who understand your unique skills, experience, and career aspirations.
          </p>
        </div>

        <div className="space-y-5">
          <h3 className="uppercase text-md font-semibold tracking-wider">
            Access to Talents
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            Gain access to a diverse range of job opportunities with leading companies across various industries, from entry-level positions to executive roles.
          </p>
        </div>

        <div className="space-y-5">
          <h3 className="uppercase text-md font-semibold tracking-wider">
            Development Resources
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            Access resources and tools to enhance your job search skills, including resume writing tips, interview preparation guides, and career development webinars.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmpServices;
