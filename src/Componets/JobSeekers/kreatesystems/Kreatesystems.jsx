import React from "react";
import data from "./Kreatesystem.json"; // Assuming the Kreate Systems JSON is saved as 'KreateSystems.json'

const Structurets = () => {
  // Check if data exists to avoid runtime errors
  if (!data || !Array.isArray(data)) {
    return <div>Error: Job data not found</div>;
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      {data.map((job, index) => (
        <div
          key={index}
          className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8 relative p-4 sm:p-6"
        >
          {/* Centered WE ARE HIRING! */}
          <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl font-extrabold font-serif text-center bg-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg">
            WE ARE HIRING!
          </h1>

          {/* Left Section: Job Description */}
          <div className="w-full md:w-1/2 p-2 sm:p-4 px-4 sm:px-12 mt-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
              {job.title}
            </h2>
            <p className="text-gray-600 mb-2 text-sm sm:text-base">
              {job.company}
            </p>

            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Job Details
            </h3>
            <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 mb-4">
              <li>Job type: {job.jobDetails.jobType || "N/A"}</li>
              <li>Location: {job.jobDetails.location}</li>
              <li>Pay: {job.jobDetails.pay || "Not specified"}</li>
              {job.jobDetails.workType && (
                <li>Work type: {job.jobDetails.workType}</li>
              )}
            </ul>

            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Full Job Description
            </h3>
            <div className="text-xs sm:text-sm">
              {/* Overview */}
              {job.fullJobDescription.overview && (
                <p className="text-gray-600 mb-2">
                  {job.fullJobDescription.overview}
                </p>
              )}

              {/* Qualifications */}
              {(job.fullJobDescription.education ||
                job.fullJobDescription.experience ||
                job.fullJobDescription.requirements) && (
                <>
                  <h4 className="text-sm sm:text-md font-medium mb-2">
                    Qualifications
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    {job.fullJobDescription.education && (
                      <li>Education: {job.fullJobDescription.education}</li>
                    )}
                    {job.fullJobDescription.experience && (
                      <li>Experience: {job.fullJobDescription.experience}</li>
                    )}
                    {job.fullJobDescription.requirements &&
                      job.fullJobDescription.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                  </ul>
                </>
              )}

              {/* Responsibilities */}
              {job.fullJobDescription.responsibilities && (
                <>
                  <h4 className="text-sm sm:text-md font-medium mb-2">
                    Responsibilities
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    {job.fullJobDescription.responsibilities.map(
                      (responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      )
                    )}
                  </ul>
                </>
              )}

              {/* Additional Details */}
              {job.fullJobDescription.additionalDetails && (
                <>
                  <h4 className="text-sm sm:text-md font-medium mb-2">
                    Additional Details
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    {job.fullJobDescription.additionalDetails.workTerm && (
                      <li>
                        Work Term:{" "}
                        {job.fullJobDescription.additionalDetails.workTerm}
                      </li>
                    )}
                    {job.fullJobDescription.additionalDetails.workLanguage && (
                      <li>
                        Language:{" "}
                        {job.fullJobDescription.additionalDetails.workLanguage}
                      </li>
                    )}
                    {job.fullJobDescription.additionalDetails.hours && (
                      <li>
                        Hours: {job.fullJobDescription.additionalDetails.hours}
                      </li>
                    )}
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* Right Section: Application Form */}
          <div className="w-full md:w-1/2 p-2 sm:p-6 mt-4 md:mt-8">
            <div className="flex justify-start mb-4">
              <button className="text-black font-thin text-sm sm:text-base">
                APPLY NOW
              </button>
            </div>

            <form className="space-y-3 sm:space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-2 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full p-2 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Cover letter"
                  className="w-full p-2 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 sm:p-3 text-sm sm:text-base rounded-full hover:bg-blue-700 transition"
              >
                SUBMIT APPLICATION
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Structurets;
