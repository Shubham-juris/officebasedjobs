import React from "react";

const OfficeManagerMail = () => {
  return (
    <div className="w-full mx-auto">
      {/* form starts here */}
      <h1 className="text-2xl font-extrabold font-serif drop-shadow-md text-center mt-8 mb-4">
        WE ARE HIRING!
      </h1>

      {/* office manager job section */}
      <div className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8">
        {/* Left Section: Job Description */}
        <div className="md:w-1/2 p-4 px-12">
          <h2 className="text-4xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
            Office Manager
          </h2>
          <p className="text-gray-600 mb-2">Build for Queen</p>
          <p className="text-gray-600 mb-2">Calgary, AB T2A 0V1</p>

          <h3 className="text-lg font-semibold mb-2">Job Details</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Pay: $32 an hour</li>
            <li>Job Type: Permanent, Full-time</li>
            <li>Location: Calgary, AB T2A 0V1</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Full Job Description</h3>
          <p className="text-sm text-gray-600 mb-2 font-semibold">Education:</p>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Secondary (high) school graduation certificate</li>
          </ul>

          <p className="text-sm text-gray-600 mb-2 font-semibold">Experience:</p>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>1 year to less than 2 years</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Tasks</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Implement new administrative procedures</li>
            <li>Review and evaluate new administrative procedures</li>
            <li>Establish work priorities and ensure procedures are followed and deadlines are met</li>
            <li>Carry out administrative activities of establishment</li>
            <li>Co-ordinate and plan for office services such as accommodation, relocation, equipment, supplies, forms, disposal of assets, parking, maintenance and security services</li>
            <li>Assist in the preparation of operating budget and maintain inventory and budgetary controls</li>
            <li>Assemble data and prepare periodic and special reports, manuals and correspondence</li>
            <li>Train staff</li>
            <li>Oversee and co-ordinate office administrative procedures</li>
            <li>Plan and control budget and expenditures</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Computer and Technology Knowledge</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Electronic mail</li>
            <li>Spreadsheet</li>
            <li>MS Excel</li>
            <li>MS Office</li>
            <li>MS Outlook</li>
            <li>MS PowerPoint</li>
            <li>MS Windows</li>
            <li>MS Word</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Work Conditions and Physical Capabilities</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Fast-paced environment</li>
            <li>Work under pressure</li>
            <li>Tight deadlines</li>
            <li>Attention to detail</li>
            <li>Large workload</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Personal Suitability</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Efficient interpersonal skills</li>
            <li>Flexibility</li>
            <li>Organized</li>
            <li>Reliability</li>
            <li>Integrity</li>
          </ul>

          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Work Term: Permanent</li>
            <li>Work Language: English</li>
            <li>Hours: 36 to 40 hours per week</li>
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

export default OfficeManagerMail;
