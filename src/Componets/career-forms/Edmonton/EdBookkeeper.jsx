import React from "react";

const EdBookkeeper = () => {
  return (
    <div className="w-full mx-auto">
      {/* form starts here */}
      <h1 className="text-2xl font-extrabold font-serif drop-shadow-md text-center mt-8 mb-4">
        WE ARE HIRING!
      </h1>

      {/* Bookkeeper */}
      <div className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8">
        {/* Left Section: Job Description */}
        <div className="md:w-1/2 p-4 px-12">
          <h2 className="text-2xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
            Bookkeeper
          </h2>
          <p className="text-gray-600 mb-2">
            <strong>UC Medical Clinic - Mill Woods</strong> || Edmonton, AB
            T6L 6K3
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Pay:</strong> $28.85 an hour
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Job type:</strong> Part-time, Permanent, Full-time
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Location:</strong> Edmonton, AB T6L 6K3
          </p>

          <h3 className="text-lg font-semibold mb-2">Full job description</h3>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Education:</strong> Secondary (high) school graduation
            certificate
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Experience:</strong> 1 year to less than 2 years
          </p>

          <h3 className="text-lg font-semibold mb-2">Tasks</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Calculate and prepare cheques for payroll</li>
            <li>Maintain general ledgers and financial statements</li>
            <li>Post journal entries</li>
            <li>Prepare other statistical, financial and accounting reports</li>
            <li>Prepare tax returns</li>
            <li>Prepare trial balance of books</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">
            Work conditions and physical capabilities
          </h3>
          <p className="text-sm text-gray-600">Attention to detail</p>
          <p className="text-sm text-gray-600 mb-4">Fast-paced environment</p>

          <h3 className="text-lg font-semibold mb-2">Screening questions</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Are you currently legally able to work in Canada?</li>
            <li>Do you have previous experience in this field of employment?</li>
          </ul>

          <p className="text-sm text-gray-600">
            <strong>Work Term:</strong> Permanent
          </p>
          <p className="text-sm text-gray-600">
            <strong>Work Language:</strong> English
          </p>
          <p className="text-sm text-gray-600 mb-4">
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

export default EdBookkeeper;
