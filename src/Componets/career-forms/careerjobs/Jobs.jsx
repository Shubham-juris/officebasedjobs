import React from 'react';
import data from '../careerjobs/Jobs.json'; 
import { useState } from 'react';
export default function Jobs ()  {
  const [searchQuery, setSearchQuery] = useState('');

  if (!data || !Array.isArray(data)) {
    return <div>Error: Job data not found</div>;
  }

  // Filter logic: match city or title
  const filteredJobs = data.filter((job) => {
    const title = job.job_title?.toLowerCase() || '';
    const location = job.job_details?.location?.toLowerCase() || '';
    const query = searchQuery.toLowerCase();
    return title.includes(query) || location.includes(query);
  });

  return (
    <div className="w-full mx-auto">
      {/* Search Bar */}
      <div className="w-full flex justify-center my-6">
        <input
          type="text"
          placeholder="Search by job title or city..."
          className="w-[90%] md:w-[60%] p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Job List */}
      {filteredJobs.length === 0 ? (
        <p className="text-center text-gray-500">No matching jobs found.</p>
      ) : (
        filteredJobs.map((job, index) => (
          <div key={index} className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8 relative mt-16">
            <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-extrabold font-serif text-center bg-white px-4 py-2 rounded-lg">
              WE ARE HIRING!
            </h1>

            {/* Left Side: Job Info */}
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
                {job.overview?.languages && (
                  <p className="text-sm text-gray-600 mb-2">
                    Languages: {job.overview.languages}
                  </p>
                )}

                {(job.overview.education || job.overview.experience) && (
                  <>
                    <h4 className="text-md font-medium mb-2">Qualifications</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                      {job.overview.education && <li>Education: {job.overview.education}</li>}
                      {job.overview.experience && <li>Experience: {job.overview.experience}</li>}
                    </ul>
                  </>
                )}

                {job.job_details.responsibilities && (
                  <>
                    <h4 className="text-md font-medium mb-2">Responsibilities</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                      {job.job_details.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </>
                )}

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

            {/* Right Side: Application Form */}
            <div className="w-full md:w-1/2 p-6 mt-8">
              <div className="flex justify-start mb-4">
                <button className="text-black font-thin">APPLY NOW</button>
              </div>

              <form>
                <div className="mb-4">
                  <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                  <input type="tel" placeholder="Phone" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                  <input type="email" placeholder="Email*" required className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                  <textarea placeholder="Cover letter" rows="5" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition">
                  SUBMIT APPLICATION
                </button>
              </form>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

