import React from "react";

const OfficeAdministrationManager = () => {
  return (
    <div className="w-full mx-auto">
      <h1 className="text-2xl font-extrabold font-serif drop-shadow-md text-center mt-8 mb-4">
        WE ARE HIRING!
      </h1>

      <div className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8">
        {/* Left Section: Job Description */}
        <div className="md:w-1/2 p-4 px-12">
          <h2 className="text-2xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
            Office Administration Manager
          </h2>
          <p className="text-gray-600 mb-2">AECOM</p>
          <p className="text-gray-600 mb-2">Calgary, AB (Hybrid work)</p>

          <h3 className="text-lg font-semibold mb-2">Job Details</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Job type: Full-time</li>
            <li>Location: Calgary, AB</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Full Job Description</h3>
          <p className="text-sm text-gray-600 mb-4">
            At AECOM, we're delivering a better world. Whether improving your
            commute, keeping the lights on, providing access to clean water, or
            transforming skylines, our work helps people and communities thrive.
            We are the world's trusted infrastructure consulting firm.
          </p>

          <p className="text-sm text-gray-600 mb-4">
            The incumbent will be responsible for overseeing the administrative
            function for a designated business line / office and will provide
            additional administrative support as required.
          </p>

          <h4 className="text-md font-medium mb-2">Responsibilities</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Manage daily administrative functions for the office</li>
            <li>Coordinate office equipment and supplies</li>
            <li>Oversee office security system</li>
            <li>Provide reception support</li>
            <li>Support safety and quality initiatives</li>
            <li>Coordinate onboarding and engagement programs</li>
            <li>Provide senior level administrative support to Business Lead</li>
            <li>Manage and coordinate BLs schedule and reporting</li>
            <li>Coordinate meetings, communications, and events</li>
            <li>Maintain confidentiality of sensitive information</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Qualifications</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Diploma/Certificate + 4 years in a similar role</li>
            <li>Proficient in MS Word, Excel, PowerPoint, Outlook</li>
            <li>College/University Degree in Business or Office Admin preferred</li>
            <li>5-8 years of relevant experience preferred</li>
            <li>Excellent verbal and written communication</li>
            <li>Strong organizational and time management skills</li>
            <li>Self-starter, proactive team player</li>
          </ul>

          <p className="text-sm text-gray-600 mb-4">
            AECOM provides a wide array of compensation, benefits, and well-being programs. We are an Equal Opportunity Employer.
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

export default OfficeAdministrationManager;
