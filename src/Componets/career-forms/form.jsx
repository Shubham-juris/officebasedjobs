import React from "react";

const Form = () => {
  return (
    <div className="w-full  mx-auto">
      {/* form starts here */}
      <h1 className="text-2xl font-extrabold font-serif drop-shadow-md  text-center mt-8 mb-4">
        WE ARE HIRING!
      </h1>
      {/* office manager */}
      <div className="bg-white container   rounded-lg flex flex-col md:flex-row w-full mx-auto ">
        {/* Left Section: Job Description */}
        <div className="md:w-1/2 p-4 px-12 ">
          <h2 className="text-2xl drop-shadow-md font-serif font-extrabold ">
            Office Manager
          </h2>
          <p className="text-gray-600 ">Calgary Software Developers</p>

          <p className="text-sm text-gray-600 mb-2">
            <strong>Date posted:</strong> 23/01/2025
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Date Expiry:</strong> 24/09/2025
          </p>
          <h3 className="text-lg font-semibold mb-2">Overview</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Location: 5211 50 st, Drayton Valley, AB T7A 1C4</li>
            <li>Salary: $30.00 hourly </li>
            <li>
              Terms of employment: Permanent employment/Full time, Evening,
              Morning shift, Weekend
            </li>
            <li>Start date: Start as soon as possible </li>
            <li>Benefits: Health benefits </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Languages</h3>
          <p className="text-sm text-gray-600 mb-4">English</p>

          <h3 className="text-lg font-semibold mb-2">Experience</h3>
          <p className="text-sm text-gray-600 mb-4">1 to less than 7 months</p>

          <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
          <h4 className="text-md font-medium mb-2">Tasks</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Review and evaluate new administrative procedures</li>
            <li>
              Establish work priorities and ensure procedures are followed and
              deadlines are met
            </li>
            <li>Carry out administrative activities of establishment</li>
            <li>
              Assist in the preparation of operating budget and maintain
              inventory and budgetary controls
            </li>
            <li>
              Assemble data and prepare periodic and special reports, manuals,
              and correspondence
            </li>
            <li>Oversee and co-ordinate office administrative procedures</li>
          </ul>

          <h4 className="text-md font-medium mb-2">
            Additional information <br /> Personal Suitability
          </h4>
          <ul className=" list-disc py-2  text-sm text-gray-600 ">
            <li>Organized</li>
            <li>Reliability</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Benefits</h4>
          <ul className="  list-inside  text-sm text-gray-600 ">
            <li>Health benefits</li>
            <li>Dental plan</li>
            <li>Health care plan</li>
            <li>Who can apply to this job?</li>
            <li>Only apply to this job if :</li>
          </ul>
          <div className=" text-sm text-gray-600 mt-3 ">
            <p>
              You are a Canadian citizen, a permanent or a temporary resident of
              Canada.
            </p>

            <p>You have a valid Canadian work permit.</p>

            <p>
              If you are not authorized to work in Canada, do not apply. The
              employer will not respond to your application.
            </p>

            <h3>How to apply</h3>
            <p>By email</p>
            <p>
              <a
                href="mailto:developerscalgarysoftware@gmail.com"
                className="text-blue-500 underline"
              >
                developerscalgarysoftware@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Right Section: Application Form */}
        <div className="w-1/2   p-6">
          <div className="flex justify-start mb-4">
            <button className="text-black font-thin">APPLY NOW</button>
          </div>

          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2  border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-2 border border-gray-300  rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      <h1 className="text-2xl font-extrabold font-serif drop-shadow-md  text-center mt-8 mb-4">
        WE ARE HIRING!
      </h1>
      {/* office clerk */}
      <div className="bg-white container   rounded-lg flex flex-col md:flex-row w-full mx-auto ">
        {/* Left Section: Job Description */}
        <div className="md:w-1/2 p-4 px-12 ">
          <h2 className="text-2xl drop-shadow-md font-serif font-extrabold ">
            Office Clerk
          </h2>
          <p className="text-gray-600 ">AMAYRA ENTERPRISES </p>

          <p className="text-sm text-gray-600 mb-2">
            <strong>Date posted:</strong> 19/01/2025
          </p>

          <h3 className="text-lg font-semibold mb-2">Overview</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Location: Barrhead, Alberta T7N 1L1, Canada </li>
            <li>Salary: $25.50 hourly </li>
            <li>
              Terms of employment: Permanent employment/Full time, Evening,
              Morning shift, Weekend
            </li>
            <li>Start date: Start as soon as possible </li>
            <li>Benefits: Health benefits </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Languages</h3>
          <p className="text-sm text-gray-600 mb-4">English</p>

          <h3 className="text-lg font-semibold mb-2">Experience</h3>
          <p className="text-sm text-gray-600 mb-4">0 to 1 years</p>

          <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
          <h4 className="text-md font-medium mb-2">Tasks</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Type and edit forms, letters, and other documents.</li>
            <li>Accept and transmit phone calls or email inquiries.</li>
            <li>
              Complete reports from databases, inventories, and manual or
              electronic files.
            </li>
            <li>
              Handle incoming and outgoing mail either electronically or
              manually.
            </li>
            <li>Transmit and receive messages.</li>
            <li>Give the general public and clients access to information.</li>
            <li>
              Documents should be photocopied and compiled for distribution,
              mailing, and filing.
            </li>
            <li>Purchase office supplies and keep track of your inventory.</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Additional information</h4>
          <h4 className="text-md font-medium mb-2">
            Work Conditions and physical capabilities
          </h4>
          <ul className=" list-disc py-2  text-sm text-gray-600 ">
            <li>Tight deadlines</li>
            <li>Repetetive tasks </li>
            <li>Attention to details </li>
          </ul>
          <h4 className="text-md font-medium ">Personal Suitability</h4>
          <ul className="  list-disc  text-sm py-2 text-gray-600 ">
            <li>Hardworking</li>
            <li>Positive attitude</li>
            <li>Quick learner</li>
            <li>Time management</li>
            <li>Client focus</li>
            <li>Excellent oral communication</li>
            <li>Team player</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Benefits</h4>
          <ul className="  list-inside  text-sm text-gray-600 ">
            <li>Health benefits</li>
            <li>Dental plan</li>
            <li>Health care plan</li>
            <li>Who can apply to this job?</li>
            <li>Only apply to this job if :</li>
          </ul>
          <div className=" text-sm text-gray-600 mt-3 ">
            <p>
              You are a Canadian citizen, a permanent or a temporary resident of
              Canada.
            </p>

            <p>You have a valid Canadian work permit.</p>

            <p>
              If you are not authorized to work in Canada, do not apply. The
              employer will not respond to your application.
            </p>

            <h3>How to apply</h3>
            <p>By email</p>
            <p>
              <a
                href="mailto:info.amayraenterprises@gmail.com"
                className="text-blue-500 underline"
              >
                info.amayraenterprises@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Right Section: Application Form */}
        <div className="w-1/2   p-6">
          <div className="flex justify-start mb-4">
            <button className="text-black font-thin">APPLY NOW</button>
          </div>

          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2  border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-2 border border-gray-300  rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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

export default Form;
