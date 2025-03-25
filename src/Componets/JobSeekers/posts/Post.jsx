import React from 'react';
import data from '../posts/Post.json'; // Assuming the JSON is saved as 'job_postings.json'

const Post = () => {
  // Check if data exists to avoid runtime errors
  if (!data || !Array.isArray(data)) {
    return <div>Error: Job data not found</div>;
  }

  return (
    <div className="w-full mx-auto">
      {data.map((job, index) => (
        <div key={index} className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8 relative">
          {/* Centered WE ARE HIRING! */}
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
              <li>Job type: {job.job_details.job_type || 'N/A'}</li>
              <li>Location: {job.job_details.location}</li>
              <li>Pay: {job.job_details.salary || 'Not specified'}</li>
              <li>Hours: {job.job_details.hours_per_week} hours per week</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Full Job Description</h3>
            <div>
              {/* Overview */}
              {job.overview && (
                <p className="text-sm text-gray-600 mb-2">
                  Languages: {job.overview.languages}
                </p>
              )}

              {/* Qualifications */}
              {(job.overview.education || job.overview.experience) && (
                <>
                  <h4 className="text-md font-medium mb-2">Qualifications</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                    {job.overview.education && <li>Education: {job.overview.education}</li>}
                    {job.overview.experience && <li>Experience: {job.overview.experience}</li>}
                  </ul>
                </>
              )}

              {/* Responsibilities */}
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

              {/* Additional Details */}
              {(job.job_details.shift || job.job_details.start_date || job.job_details.vacancies) && (
                <>
                  <h4 className="text-md font-medium mb-2">Additional Details</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                    {job.job_details.shift && <li>Shift: {job.job_details.shift}</li>}
                    {job.job_details.start_date && <li>Start Date: {job.job_details.start_date}</li>}
                    {job.job_details.vacancies && <li>Vacancies: {job.job_details.vacancies}</li>}
                  </ul>
                </>
              )}

              {/* Health Benefits */}
              {job.health_benefits && (
                <>
                  <h4 className="text-md font-medium mb-2">Health Benefits</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                    {job.health_benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
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
              {/* Screening Questions */}
            
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

export default Post;