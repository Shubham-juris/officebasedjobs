import React from "react";

const EdAdministrativeSupport = () => {
  return (
    <div className="w-full mx-auto">
      <h1 className="text-2xl font-extrabold font-serif drop-shadow-md text-center mt-8 mb-4">
        WE ARE HIRING!
      </h1>

      <div className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8">
        {/* Left Section: Job Description */}
        <div className="md:w-1/2 p-4 px-12">
          <h2 className="text-2xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
            Administrative Support
          </h2>
          <p className="text-gray-600 mb-2">City of Edmonton</p>
          <p className="text-gray-600 mb-2">10111 104 Ave NW, Edmonton, AB</p>

          <h3 className="text-lg font-semibold mb-2">Job Details</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Pay: $25.17–$31.26 an hour</li>
            <li>Job type: Full-time</li>
            <li>Location: 10111 104 Ave NW, Edmonton, AB</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Full Job Description</h3>
          <p className="text-sm text-gray-600 mb-4">
            The City of Edmonton is seeking a highly motivated and organized individual to fill the role of Administrative Support within the Safe and Healthy Communities Section. This is an excellent opportunity to contribute to a dynamic team that is dedicated to making a positive impact on the community.
          </p>
          <p className="text-sm text-gray-600 mb-4">
            The Administrative Support will provide comprehensive administrative support to the team including calendar management, meeting coordination, and document preparation.
          </p>

          <h4 className="text-md font-medium mb-2">What will you do?</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Manage calendars and schedules</li>
            <li>Coordinate meetings and take minutes</li>
            <li>Assist with memos, letters, and reports</li>
            <li>Handle correspondence and maintain filing systems</li>
            <li>Process payments and track expenses</li>
            <li>Clerical support for new hires and departing staff</li>
            <li>Assist with IT asset tracking</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Qualifications</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Completion of Grade 12 or higher</li>
            <li>Minimum of 2 years of administrative experience</li>
            <li>Experience with POSSE, Taleo, Ariba, and/or SAP (asset)</li>
            <li>Proficiency in Google Workspace and Microsoft Office</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Skills Required</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Excellent time management</li>
            <li>Strong communication skills</li>
            <li>Ability to multitask in fast-paced environments</li>
            <li>Work independently and collaboratively</li>
          </ul>

          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Work Term: Permanent</li>
            <li>Hours: 33.75 hours per week</li>
            
          </ul>
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

export default EdAdministrativeSupport;
