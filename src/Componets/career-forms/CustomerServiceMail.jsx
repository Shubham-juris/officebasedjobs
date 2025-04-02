import React from "react";

const CustomerServiceMail = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* form starts here */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-serif drop-shadow-md text-center mt-4 sm:mt-8 mb-4">
        WE ARE HIRING!
      </h1>

      {/* Job section */}
      <div className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8 shadow-lg">
        {/* Left Section: Job Description */}
        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:px-12">
          <h2 className="text-xl sm:text-2xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
            Customer Service Clerks Supervisor
          </h2>
          <p className="text-gray-600 mb-2 text-sm sm:text-base">
            Triple Three Trading Ltd.
          </p>
          <p className="text-gray-600 mb-2 text-sm sm:text-base">
            Calgary, AB T2G 1V3
          </p>

          {/* Rest of the left section content remains the same, just add text-sm sm:text-base to paragraph elements */}
        </div>

        {/* Right Section: Application Form */}
        <div className="w-full md:w-1/2 p-4 sm:p-6">
          <div className="flex justify-start mb-4">
            <button className="text-black font-thin text-sm sm:text-base">
              APPLY NOW
            </button>
          </div>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 sm:p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-2 sm:p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-2 sm:p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Cover letter"
                className="w-full p-2 sm:p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                rows="5"
              ></textarea>
            </div>
            <div>
              <button
                type="button"
                className="text-blue-600 flex items-center space-x-2 text-sm sm:text-base"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
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
              <p className="text-xs sm:text-sm text-gray-500">
                Attachments (0)
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 sm:p-3 rounded-full hover:bg-blue-700 transition text-sm sm:text-base"
            >
              SUBMIT APPLICATION
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerServiceMail;
