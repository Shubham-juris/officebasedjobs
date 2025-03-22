import React from 'react';

const EdDataEntryClerk = () => {
  return (
    <div className="w-full mx-auto">
      {/* Heading */}
      <h1 className="text-2xl font-extrabold font-serif drop-shadow-md text-center mt-8 mb-4">
        WE ARE HIRING!
      </h1>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row p-6">
        {/* Left Section: Job Description */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl text-blue-600 font-bold mb-4">Data Entry Clerk</h2>
          <p className="text-gray-700 mb-2">
            <strong>Company:</strong> Blue Pearl Inc. || Edmonton, AB T5M 1W8
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Pay:</strong> $24.04 an hour
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Job Type:</strong> Part-time, Permanent, Full-time
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Location:</strong> Edmonton, AB T5M 1W8
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Full job description</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Education: Secondary (high) school graduation certificate</li>
            <li>Experience: 1 year to less than 2 years</li>
          </ul>

          <h4 className="text-lg font-medium mt-4">Tasks</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Receive and register documents for data entry</li>
            <li>Enter data according to specified format</li>
            <li>Transfer data between software</li>
            <li>Verify accuracy and completeness of data</li>
            <li>Store, update and maintain databases</li>
            <li>Perform general office duties</li>
            <li>Transfer handwritten data to Excel or Word documents</li>
          </ul>

          <h4 className="text-lg font-medium mt-4">Screening questions</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Are you currently legally able to work in Canada?</li>
            <li>Do you have previous experience in this field of employment?</li>
          </ul>

          <p className="text-gray-700 mt-4">
            <strong>Work Term:</strong> Permanent
          </p>
          <p className="text-gray-700">
            <strong>Work Language:</strong> English
          </p>
          <p className="text-gray-700">
            <strong>Hours:</strong> 30 hours per week
          </p>
        </div>

        {/* Right Section: Application Form */}
        <div className="w-full md:w-1/2 p-6">
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
            <div className="mb-4">
              <button
                type="button"
                className="text-blue-600 flex items-center space-x-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828L17 9.828a4 4 0 00-5.656-5.656L7 9.172V7H5v4.828l6.586-6.586a2 2 0 012.828 0L17 7.172a2 2 0 010 2.828z"
                  ></path>
                </svg>
                <span>Attach Resume</span>
              </button>
              <p className="text-sm text-gray-500">Attachments (0)</p>
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
    </div>
  );
};

export default EdDataEntryClerk;
