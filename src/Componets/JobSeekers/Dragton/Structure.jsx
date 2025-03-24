import React from 'react';
import data from './Dragton.json'; // Corrected typo from 'Dragton' to 'Drayton'

const Structure = () => {
  // Check if data.jobs exists to avoid runtime errors
  if (!data || !data.jobs) {
    return <div>Error: Job data not found</div>;
  }

  return (
    <div className="w-full mx-auto">
      {data.jobs.map((job, index) => (
        <div key={index} className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8 relative">
          {/* Centered WE ARE HIRING! - Optional, removed from JSON but can be hardcoded */}
          <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-extrabold font-serif text-center bg-white px-4 py-2 rounded-lg">
            WE ARE HIRING!
          </h1>

          {/* Left Section: Job Description */}
          <div className="md:w-1/2 p-4 px-12 mt-8">
            <h2 className="text-4xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
              {job.job_title}
            </h2>
            <p className="text-gray-600 mb-2">{job.company}</p>

            <h3 className="text-lg font-semibold mb-2">Job Details</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Job type: {Array.isArray(job.job_type) ? job.job_type.join(', ') : job.job_type || 'N/A'}</li>
              <li>Location: {job.location}</li>
              <li>Pay: {job.pay}</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Full Job Description</h3>
            {/* Using new structure: overview and job_details */}
            <div>
              {/* Company Overview from job_details */}
              {job.job_details && job.job_details.company_overview && (
                <p className="text-sm text-gray-600 mb-2">{job.job_details.company_overview}</p>
              )}

              {/* Qualifications from overview */}
              {job.overview && (
                <>
                  <h4 className="text-md font-medium mb-2">Qualifications</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                    {job.overview.education && <li>Education: {job.overview.education}</li>}
                    {job.overview.experience && <li>Experience: {job.overview.experience}</li>}
                    {job.overview.skills &&
                      job.overview.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                  </ul>
                </>
              )}

              {/* Additional Details from job_details */}
              {job.job_details && (
                <>
                  {job.job_details.responsibilities && (
                    <>
                      <h4 className="text-md font-medium mb-2">Responsibilities</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                        {job.job_details.responsibilities.map((responsibility, i) => (
                          <li key={i}>{responsibility}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Right Section: Application Form */}
          <div className="w-full md:w-1/2 p-6 mt-8">
            <div className="flex justify-start mb-4">
              <button className="text-black font-thin">APPLY NOW</button>
            </div>

            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Cover letter"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition"
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

export default Structure;