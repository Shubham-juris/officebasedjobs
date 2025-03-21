import React from "react";

const Inmail = () => {
  return (
    <div className="w-full mx-auto">
      {/* form starts here */}
      <h1 className="text-2xl font-extrabold font-serif drop-shadow-md text-center mt-8 mb-4">
        WE ARE HIRING!
      </h1>

      {/* office administrative assistant */}
      <div className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8">
        {/* Left Section: Job Description */}
        <div className="md:w-1/2 p-4 px-12">
          <h2 className="text-2xl drop-shadow-md font-serif font-extrabold mb-1">
            Office Administrative Assistant
          </h2>
          <p className="text-gray-600 mb-2">Olu</p>
          <p className="text-gray-600 mb-2">Calgary, AB T2P 1H2</p>

          <h3 className="text-lg font-semibold mb-2">Job Details</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Pay: $35.40 an hour</li>
            <li>Job type: Permanent, Full-time</li>
            <li>Location: Calgary, AB T2P 1H2</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Full Job Description</h3>
          <p className="text-sm text-gray-600 mb-2">
            Education: College, CEGEP or other non-university certificate or
            diploma from a program of 1 year to 2 years
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Experience: 2 years to less than 3 years or equivalent experience
          </p>

          <h4 className="text-md font-medium mb-2">Tasks</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Direct and control daily operations</li>
            <li>Schedule and confirm appointments</li>
            <li>Answer telephone and relay telephone calls and messages</li>
            <li>Answer electronic enquiries</li>
            <li>Compile data, statistics and other information</li>
            <li>Order office supplies and maintain inventory</li>
            <li>
              Set up and maintain manual and computerized information filing
              systems
            </li>
            <li>Perform data entry</li>
            <li>Provide customer service</li>
            <li>Maintain and manage digital database</li>
            <li>Perform basic bookkeeping tasks</li>
            <li>Arrange for billing for services</li>
          </ul>

          <h4 className="text-md font-medium mb-2">
            Computer and Technology Knowledge
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>MS Excel</li>
            <li>MS Word</li>
            <li>Electronic scheduler</li>
            <li>Database software</li>
            <li>Accounting software</li>
            <li>MS Office</li>
          </ul>

          <h4 className="text-md font-medium mb-2">
            Work Conditions and Physical Capabilities
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Ability to work independently</li>
            <li>Attention to detail</li>
            <li>Work with minimal supervision</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Personal Suitability</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Ability to multitask</li>
            <li>Organized</li>
            <li>Team player</li>
            <li>Accurate</li>
            <li>Client focus</li>
            <li>Reliability</li>
            <li>Time management</li>
            <li>Dependability</li>
            <li>Efficiency</li>
            <li>Positive attitude</li>
          </ul>

          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Work Term: Permanent</li>
            <li>Work Language: English</li>
            <li>Hours: 32 to 40 hours per week</li>
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

export default Inmail;
