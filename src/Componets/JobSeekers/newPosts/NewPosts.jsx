import React from 'react';
import data from '../newPosts/NewPosts.json'; // Ensure the path is correct

const NewPost = () => {
  // Log data for debugging
  console.log('Imported data:', data);

  // Validate data
  if (!data || !Array.isArray(data)) {
    console.error('Invalid job data:', data);
    return <div>Error: Job data not found</div>;
  }

  return (
    <div className="w-full mx-auto">
      {data.map((job, index) => (
        <div
          key={index}
          className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8 relative"
        >
          {/* Centered WE ARE HIRING! */}
          <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-extrabold font-serif text-center bg-white px-4 py-2 rounded-lg">
            WE ARE HIRING!
          </h1>

          {/* Left Section: Job Details */}
          <div className="md:w-1/2 p-4 px-12 mt-8">
            {/* Job Title and Company */}
            <h2 className="text-4xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
              {job.title || 'Untitled Job'}
            </h2>
            <p className="text-gray-600 mb-2">{job.company || 'Unknown Company'}</p>

            {/* Basic Job Info */}
            <h3 className="text-lg font-semibold mb-2">Job Information</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              {job.location && <li>Location: {job.location}</li>}
              {job.salary && <li>Salary: {job.salary}</li>}
            </ul>

            {/* Overview */}
            {job.overview && (
              <>
                <h3 className="text-lg font-semibold mb-2">Overview</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                  {job.overview.languages && <li>Languages: {job.overview.languages}</li>}
                  {job.overview.education && <li>Education: {job.overview.education}</li>}
                  {job.overview.experience && <li>Experience: {job.overview.experience}</li>}
                </ul>
              </>
            )}

            {/* Responsibilities */}
            {job.responsibilities?.length > 0 && (
              <>
                <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                  {job.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Health Benefits */}
            {job.health_benefits?.length > 0 && (
              <>
                <h3 className="text-lg font-semibold mb-2">Health Benefits</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                  {job.health_benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </>
            )}
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

export default NewPost;