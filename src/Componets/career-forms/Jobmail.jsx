import React from "react";
const Jobmail = () => {
  return (
    <>
      <div className="w-full  mx-auto">
        {/* form starts here */}
        <h1 className="text-3xl font-extrabold font-serif   text-center mt-8 mb-4">
          WE ARE HIRING
        </h1>
        {/* receptionist */}
        <div className="bg-white container   rounded-lg flex flex-col md:flex-row w-full mx-auto ">
          {/* Left Section: Job Description */}
          <div className="md:w-1/2 p-4 px-12 ">
            <h2 className="text-4xl font-serif font-extrabold text-blue-600">
              Receptionist
            </h2>
            <p className="text-gray-500 my-6">Greekology</p>

            <p className="text-sm text-gray-600 mb-2">
              <strong>Date posting:</strong> 2025-02-06
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Date Expiry:</strong> 2025-08-22
            </p>
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>5211 50 Street Drayton Valley, AB T7A 1C4</li>
              <li>Salary: 22.50 hourly / 40 hours per Week</li>
              <li>Terms of employment: Permanent employment/Full time</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Languages</h3>
            <p className="text-sm text-gray-600 mb-4">English</p>

            <h3 className="text-lg font-semibold mb-2">Education</h3>
            <p className="text-sm text-gray-600 mb-4">
              Secondary (high) school graduation certificate
            </p>

            <h3 className="text-lg font-semibold mb-2">Experience</h3>
            <p className="text-sm text-gray-600 mb-4">
              1 to less than 7 months
            </p>

            <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
            <h4 className="text-md font-medium mb-2">Tasks</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Greet people and direct them to contacts or service areas</li>
              <li>Provide basic information to clients and the public</li>
              <li>
                Obtain and process information required to provide customer
                service
              </li>
              <li>Record and relay information</li>
              <li>Schedule and confirm appointments</li>
              <li>Receive and issue payments</li>
              <li>
                Perform clerical duties, such as filing and sorting and
                distributing mail
              </li>
              <li>Answer telephone and relay telephone calls and messages</li>
              <li>Provide customer service</li>
            </ul>
            <ul className="  list-inside  text-sm text-gray-600 ">
              <li>Health benefits</li>
              <li>Dental plan</li>
              <li>Health care plan</li>
              <li>Who can apply to this job?</li>
              <li>Only apply to this job if :</li>
            </ul>
            <div className=" text-sm text-gray-600 mt-3 ">
              <p>
                You are a Canadian citizen, a permanent or a temporary resident
                of Canada.
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
                  href="mailto:geekology16@gmail.com"
                  className="text-blue-500 underline"
                >
                  geekology16@gmail.com
                </a>
              </p>

              <h3>How-to-apply instructions</h3>
              <p>Here is what you must include in your application:</p>

              <h3>Cover letter</h3>
              <p>
                This job posting includes screening questions. Please answer the
                following questions when applying:
              </p>

              <ul>
                <li>Are you available for the advertised start date?</li>
                <li>Are you currently legally able to work in Canada?</li>
              </ul>
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

        {/* Administrative Assistant 1 */}
        <h1 className="text-3xl font-extrabold font-serif   text-center mt-8 mb-4">
          WE ARE HIRING
        </h1>

        <div className="bg-white container   rounded-lg flex flex-col md:flex-row w-full mx-auto ">
          {/* Left Section: Job Description */}
          <div className="md:w-1/2 p-4 px-12 ">
            <h2 className="text-4xl font-serif font-extrabold text-blue-600">
              Administrative Assistant
            </h2>
            <p className="text-gray-500 my-6">
              COMPANY: Killian Holdings Limited
            </p>

            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Languages: English</li>
              <li>Education: college, CEGEP or equivalent experience. </li>
              <li>Experience : 1 to less than 2 years </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Job Details</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Location: Innisfail, AB T4G IN4</li>
              <li>Salary: 30.00 hourly / 40 hours per Week</li>
              <li>Terms of employment: Permanent employment. Full time</li>
              <li>Day, Morning</li>
              <li>Start date: Starts as soon as possible</li>
              <li>Vacancies: 2 vacancies</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Arrange and co-ordinate seminars, conferences, etc.</li>
              <li>Establish and implement policies and procedures</li>
              <li>
                Record and prepare minutes of meetings, seminars and conferences
              </li>
              <li>Determine and establish office procedures and routines</li>
              <li>Answer telephone and relay telephone calls and messages</li>
              <li>Answer electronic enquiries</li>
              <li>Compile data, statistics and other information</li>
              <li>Order office supplies and maintain inventory</li>
              <li>Arrange travel, related itineraries and make reservations</li>
              <li>Greet people and direct them to contacts or service areas</li>
              <li>Perform data entry</li>
              <li>Provide customer service</li>
            </ul>

            <h3 className="  text-md mt-4 font-medium  ">Health benefits </h3>
            <ul className="  list-inside  text-sm text-gray-600 ">
              <li>Dental plan</li>
              <li>Health care plan</li>
            </ul>

            <h3 className="text-lg font-semibold mt-3">How to apply</h3>
            <div className=" text-sm font-medium text-gray-600  ">
              <p>By email</p>

              <a
                href="mailto:kilianholdingltd@gmail.com"
                className="text-blue-500 underline"
              >
                kilianholdingltd@gmail.com
              </a>

              <h3>How-to-apply instructions</h3>
              <p>Here is what you must include in your application:</p>

              <h3>Cover letter</h3>
              <p>
                This job posting includes screening questions. Please answer the
                following questions when applying:
              </p>

              <ul>
                <li>Are you available for the advertised start date?</li>
                <li>Are you currently legally able to work in Canada?</li>
              </ul>
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

        {/* Administrative assistant 2 */}
        <h1 className="text-3xl font-extrabold font-serif   text-center mt-8 mb-4">
          WE ARE HIRING
        </h1>

        <div className="bg-white container   rounded-lg flex flex-col md:flex-row w-full mx-auto ">
          {/* Left Section: Job Description */}
          <div className="md:w-1/2 p-4 px-12 ">
            <h2 className="text-4xl font-serif font-extrabold text-blue-600">
              Administrative Assistant
            </h2>
            <p className="text-gray-500 my-6">
              COMPANY: Killian Holdings Limited
            </p>

            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Languages: English</li>
              <li>Education: college, CEGEP or equivalent experience. </li>
              <li>Experience : 1 to less than 2 years </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Job Details</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Location: Barrhead, ABT7N 1L1</li>
              <li>Salary: 30.00 hourly / 40 hours per Week</li>
              <li>Terms of employment: Permanent employment. Full time</li>
              <li>Day, Morning</li>
              <li>Start date: Starts as soon as possible</li>
              <li>Vacancies: 2 vacancies</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Arrange and co-ordinate seminars, conferences, etc.</li>
              <li>Establish and implement policies and procedures</li>
              <li>
                Record and prepare minutes of meetings, seminars and conferences
              </li>
              <li>Determine and establish office procedures and routines</li>
              <li>Answer telephone and relay telephone calls and messages</li>
              <li>Answer electronic enquiries</li>
              <li>Compile data, statistics and other information</li>
              <li>Order office supplies and maintain inventory</li>
              <li>Arrange travel, related itineraries and make reservations</li>
              <li>Greet people and direct them to contacts or service areas</li>
              <li>Perform data entry</li>
              <li>Provide customer service</li>
            </ul>

            <h3 className="  text-md mt-4 font-medium  ">Health benefits </h3>
            <ul className="  list-inside  text-sm text-gray-600 ">
              <li>Dental plan</li>
              <li>Health care plan</li>
            </ul>

            <h3 className="text-lg font-semibold mt-3">How to apply</h3>
            <div className=" text-sm font-medium text-gray-600  ">
              <p>By email</p>

              <a
                href="mailto:kilianholdingltd@gmail.com"
                className="text-blue-500 underline"
              >
                kilianholdingltd@gmail.com
              </a>

              <h3>How-to-apply instructions</h3>
              <p>Here is what you must include in your application:</p>

              <h3>Cover letter</h3>
              <p>
                This job posting includes screening questions. Please answer the
                following questions when applying:
              </p>

              <ul>
                <li>Are you available for the advertised start date?</li>
                <li>Are you currently legally able to work in Canada?</li>
              </ul>
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

        {/* administrative assistant 3 */}
        <h1 className="text-3xl font-extrabold font-serif   text-center mt-8 mb-4">
          WE ARE HIRING
        </h1>

        <div className="bg-white container   rounded-lg flex flex-col md:flex-row w-full mx-auto ">
          {/* Left Section: Job Description */}
          <div className="md:w-1/2 p-4 px-12 ">
            <h2 className="text-4xl font-serif font-extrabold text-blue-600">
              Administrative Assistant
            </h2>
            <p className="text-gray-500 my-6">
              COMPANY: Killian Holdings Limited
            </p>

            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Languages: English</li>
              <li>Education: college, CEGEP or equivalent experience. </li>
              <li>Experience : 1 to less than 2 years </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Job Details</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Location: Slave Lake, AB TOG 2AO</li>
              <li>Salary: 30.00 hourly / 40 hours per Week</li>
              <li>Terms of employment: Permanent employment. Full time</li>
              <li>Day, Morning</li>
              <li>Start date: Starts as soon as possible</li>
              <li>Vacancies: 2 vacancies</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Arrange and co-ordinate seminars, conferences, etc.</li>
              <li>Establish and implement policies and procedures</li>
              <li>
                Record and prepare minutes of meetings, seminars and conferences
              </li>
              <li>Determine and establish office procedures and routines</li>
              <li>Answer telephone and relay telephone calls and messages</li>
              <li>Answer electronic enquiries</li>
              <li>Compile data, statistics and other information</li>
              <li>Order office supplies and maintain inventory</li>
              <li>Arrange travel, related itineraries and make reservations</li>
              <li>Greet people and direct them to contacts or service areas</li>
              <li>Perform data entry</li>
              <li>Provide customer service</li>
            </ul>

            <h3 className="  text-md mt-4 font-medium  ">Health benefits </h3>
            <ul className="  list-inside  text-sm text-gray-600 ">
              <li>Dental plan</li>
              <li>Health care plan</li>
            </ul>

            <h3 className="text-lg font-semibold mt-3">How to apply</h3>
            <div className=" text-sm font-medium text-gray-600  ">
              <p>By email</p>

              <a
                href="mailto:kilianholdingltd@gmail.com"
                className="text-blue-500 underline"
              >
                kilianholdingltd@gmail.com
              </a>

              <h3>How-to-apply instructions</h3>
              <p>Here is what you must include in your application:</p>

              <h3>Cover letter</h3>
              <p>
                This job posting includes screening questions. Please answer the
                following questions when applying:
              </p>

              <ul>
                <li>Are you available for the advertised start date?</li>
                <li>Are you currently legally able to work in Canada?</li>
              </ul>
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

        {/* receptionalist 2 */}

        <h1 className="text-3xl font-extrabold font-serif   text-center mt-8 mb-4">
          WE ARE HIRING
        </h1>
        <div className="bg-white container   rounded-lg flex flex-col md:flex-row w-full mx-auto ">
          {/* Left Section: Job Description */}
          <div className="md:w-1/2 p-4 px-12 ">
            <h2 className="text-4xl font-serif font-extrabold text-blue-600">
              Receptionist
            </h2>
            <p className="text-gray-500 my-6">
              COMPANY : Amayra Enterprises Limited
            </p>

            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Languages: English</li>
              <li>Education: Secondary(high) school graduation certificate </li>
              <li>Experience : 1 to less than 7 months </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Job Details</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>
                Location: Unit #1, 5009D 51 Street, Barrhead, Alberta T7N 1L1,
                Canada
              </li>
              <li>Salary: 22.50 hourly / 40 hours per Week</li>
              <li>Terms of employment: Permanent employment. Full time</li>
              <li>Day, Morning</li>
              <li>Start date: Starts as soon as possible</li>
              <li>Vacancies: 2 vacancies</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Greet people and direct them to contacts or service areas</li>
              <li>Provide basic information to clients and the public</li>
              <li>Operate switchboard or telephone system</li>
              <li>Schedule and confirm appointments</li>
              <li>Send invoices</li>
              <li>Maintain work records and logs</li>
              <li>Answer telephone and relay telephone calls and messages</li>
              <li>Calculate billing charges</li>
            </ul>

            <h3 className="text-md mt-4 font-medium">Health benefits</h3>
            <ul className="list-inside text-sm text-gray-600">
              <li>Dental plan</li>
              <li>Health care plan</li>
              <li>Vision care benefits</li>
            </ul>

            <h3 className="text-lg font-semibold mt-3">How to apply</h3>
            <div className=" text-sm font-medium text-gray-600  ">
              <p>By email</p>

              <a
                href="mailto:info.amayraenterprises@gmail.com"
                className="text-blue-500 underline"
              >
                info.amayraenterprises@gmail.com
              </a>

              <h3>How-to-apply instructions</h3>
              <p>Here is what you must include in your application:</p>

              <h3>Cover letter</h3>
              <p>
                This job posting includes screening questions. Please answer the
                following questions when applying:
              </p>

              <ul>
                <li>Are you available for the advertised start date?</li>
                <li>Are you currently legally able to work in Canada?</li>
              </ul>
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

        {/* office administrator */}

        <h1 className="text-3xl font-extrabold font-serif   text-center mt-8 mb-4">
          WE ARE HIRING
        </h1>

        <div className="bg-white container   rounded-lg flex flex-col md:flex-row w-full mx-auto ">
          {/* Left Section: Job Description */}
          <div className="md:w-1/2 p-4 px-12 ">
            <h2 className="text-4xl font-serif font-extrabold text-blue-600">
              Office Administrator
            </h2>
            <p className="text-gray-500 my-6">
              COMPANY : Amayra Enterprises Ltd
            </p>

            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Languages: English</li>
              <li>Education: college/CEGEP </li>
              <li>Experience : 1 to less than 7 months </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Job Details</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Location: Barhead , AB T7N 1L1</li>
              <li>Salary: 30.00 hourly / 40 hours per Week</li>
              <li>Terms of employment: Permanent employment. Full time</li>
              <li>Start date: Starts as soon as possible</li>
              <li>Vacancies: 2 vacancies</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Implement new administrative procedures</li>
              <li>Review and evaluate new administrative procedures</li>
              <li>
                Establish work priorities and ensure procedures are followed and
                deadlines are met
              </li>
              <li>Carry out administrative activities of establishment</li>
              <li>
                Administer policies and procedures related to the release of
                records in processing requests under government access to
                information and privacy legislation
              </li>
              <li>
                Co-ordinate and plan for office services such as accommodation,
                relocation, equipment, supplies, forms, disposal of assets,
                parking, maintenance and security services
              </li>
              <li>
                Assist in the preparation of operating budget and maintain
                inventory and budgetary controls
              </li>
              <li>
                Assemble data and prepare periodic and special reports, manuals
                and correspondence
              </li>
              <li>Train staff</li>
              <li>Oversee and co-ordinate office administrative procedures</li>
            </ul>

            <h3 className="text-md mt-4 font-medium">Health benefits</h3>
            <ul className="list-inside text-sm text-gray-600">
              <li>Dental plan</li>
              <li>Health care plan</li>
            </ul>

            <h3 className="text-lg font-semibold mt-3">How to apply</h3>
            <div className=" text-sm font-medium text-gray-600  ">
              <p>By email</p>

              <a
                href="mailto:info.amayraenterprises@gmail.com"
                className="text-blue-500 underline"
              >
                info.amayraenterprises@gmail.com
              </a>

              <h3>How-to-apply instructions</h3>
              <p>Here is what you must include in your application:</p>

              <h3>Cover letter</h3>
              <p>
                This job posting includes screening questions. Please answer the
                following questions when applying:
              </p>

              <ul>
                <li>Are you available for the advertised start date?</li>
                <li>Are you currently legally able to work in Canada?</li>
              </ul>
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

        {/* office supervisor */}

        <h1 className="text-3xl font-extrabold font-serif   text-center mt-8 mb-4">
          WE ARE HIRING
        </h1>

        <div className="bg-white container   rounded-lg flex flex-col md:flex-row w-full mx-auto ">
          {/* Left Section: Job Description */}
          <div className="md:w-1/2 p-4 px-12 ">
            <h2 className="text-4xl font-serif font-extrabold text-blue-600">
              Office suprvisor
            </h2>
            <p className="text-gray-500 my-6">COMPANY : Techware Solution</p>

            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Languages: English</li>
              <li>Education: Seconday(high) school graduation certificate</li>
              <li>Experience : 1 to less than 7 months </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Job Details</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Location:Athabasca, ABT9S 1H5</li>
              <li>Salary: 30.00 hourly / 40 hours per Week</li>
              <li>Terms of employment: Permanent employment. Full time</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Organize tasks to accomplish the work </li>
              <li>train workers in duties and policies</li>
              <li>ensure smooth operation of equipment</li>
              <li>
                resolve work problems, provide techinical advice and recommend
                measures to improve productivity and product quality
              </li>
              <li>Requisation or order materials, equipment and supplies.</li>
            </ul>

            <h3 className="text-md mt-4 font-medium">Health benefits</h3>
            <ul className="list-inside text-sm text-gray-600">
              <li>Dental plan</li>
              <li>Health care plan</li>
            </ul>

            <h3 className="text-lg font-semibold mt-3">How to apply</h3>
            <div className=" text-sm font-medium text-gray-600  ">
              <p>By email</p>

              <a
                href="mailto:solutionstechware5@gmail.com"
                className="text-blue-500 underline"
              >
                solutionstechware5@gmail.com
              </a>

              <h3>How-to-apply instructions</h3>
              <p>Here is what you must include in your application:</p>

              <h3>Cover letter</h3>
              <p>
                This job posting includes screening questions. Please answer the
                following questions when applying:
              </p>

              <ul>
                <li>Are you available for the advertised start date?</li>
                <li>Are you currently legally able to work in Canada?</li>
              </ul>
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

        {/* office clerk */}
        <h1 className="text-3xl font-extrabold font-serif   text-center mt-8 mb-4">
          WE ARE HIRING
        </h1>

        <div className="bg-white container   rounded-lg flex flex-col md:flex-row w-full mx-auto ">
          {/* Left Section: Job Description */}
          <div className="md:w-1/2 p-4 px-12 ">
            <h2 className="text-4xl font-serif font-extrabold text-blue-600">
              Office clerk
            </h2>
            <p className="text-gray-500 my-6">COMPANY : KREATE SYSTEMS</p>

            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Languages: English</li>
              <li>Education: Seconday(high) school graduation certificate</li>
              <li>Experience : 1 to less than 7 months </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Job Details</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Location:Innisfail, ABT4G 1N4 </li>
              <li>Salary: 30.00 hourly / 40 hours per Week</li>
              <li>Terms of employment: Permanent employment. Full time</li>
              <li>day/morning</li>
              <li>start date : start as soon as possible </li>
              <li>vacancies : 2 </li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>
                Type and proofread correspondence, forms and other documents
              </li>
              <li>Receive and forward telephone or electronic enquiries</li>
              <li>
                Work on reports from manual or electronic files, inventories and
                databases
              </li>
              <li>
                Sort, process and verify applications, receipts and other
                documents
              </li>
              <li>
                Process incoming and outgoing mail manually or electronically
              </li>
              <li>Send and receive messages</li>
              <li>
                Photocopy and collate documents for distribution, mailing and
                filing
              </li>
              <li>Locate and remove files requested</li>
              <li>Organize and schedule office work</li>
              <li>Prepare and monitor contracts and budgets</li>
              <li>Store, update and retrieve financial data</li>
            </ul>
            <h3 className="  text-md mt-4 font-medium  ">Health benefits </h3>
            <ul className="  list-inside  text-sm text-gray-600 ">
              <li>Dental plan</li>
              <li>Health care plan</li>
            </ul>

            <h3 className="text-lg font-semibold mt-3">How to apply</h3>
            <div className=" text-sm font-medium text-gray-600  ">
              <p>By email</p>

              <a
                href="mailto:kilianholdingltd@gmail.com"
                className="text-blue-500 underline"
              >
                kilianholdingltd@gmail.com
              </a>

              <h3>How-to-apply instructions</h3>
              <p>Here is what you must include in your application:</p>

              <h3>Cover letter</h3>
              <p>
                This job posting includes screening questions. Please answer the
                following questions when applying:
              </p>

              <ul>
                <li>Are you available for the advertised start date?</li>
                <li>Are you currently legally able to work in Canada?</li>
              </ul>
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

        {/* office clerk 2 */}
        <h1 className="text-3xl font-extrabold font-serif   text-center mt-8 mb-4">
          WE ARE HIRING
        </h1>

        <div className="bg-white container   rounded-lg flex flex-col md:flex-row w-full mx-auto ">
          {/* Left Section: Job Description */}
          <div className="md:w-1/2 p-4 px-12 ">
            <h2 className="text-4xl font-serif font-extrabold text-blue-600">
              Office Clerk
            </h2>
            <p className="text-gray-500 my-6">
              COMPANY : Kilian Holdings Limited
            </p>

            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Languages: English</li>
              <li>Education: Seconday(high) school graduation certificate</li>
              <li>Experience : 1 to less than 7 months </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Job Details</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Location:Slave lake , ABTOG 2AO</li>
              <li>Salary: 30.00 hourly / 40 hours per Week</li>
              <li>Terms of employment: Permanent employment/Full time</li>
              <li>Day, Morning </li>
              <li>Start Date: start as soon as possible </li>
              <li>Vacancies: 2 vacancies</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>
                Type and proofread correspondence, forms and other documents{" "}
              </li>
              <li>Receive and forward telephone or electronic enquiries</li>
              <li>
                Work on reports from manual or electronic files, inventories and
                databases
              </li>
              <li>
                Sort, process and verify applications, receipts and other
                documents
              </li>
              <li>
                Process incoming and outgoing mail manually or electronically
              </li>
              <li>Send and receive messages</li>
              <li>Perform basic bookkeeping tasks</li>
              <li>
                Photocopy and collate documents for distribution, mailing and
                filing
              </li>
              <li>Order office supplies and maintain inventory</li>
              <li>Prepare and monitor contracts and budgets</li>
            </ul>

            <h3 className="text-md mt-4 font-medium">Health benefits</h3>
            <ul className="list-inside text-sm text-gray-600">
              <li>Dental plan</li>
              <li>Health care plan</li>
            </ul>

            <h3 className="text-lg font-semibold mt-3">How to apply</h3>
            <div className=" text-sm font-medium text-gray-600  ">
              <p>By email</p>

              <a
                href="mailto:kilianholdingltd@gmail.com"
                className="text-blue-500 underline"
              >
                kilianholdingltd@gmail.com
              </a>

              <h3>How-to-apply instructions</h3>
              <p>Here is what you must include in your application:</p>

              <h3>Cover letter</h3>
              <p>
                This job posting includes screening questions. Please answer the
                following questions when applying:
              </p>

              <ul>
                <li>Are you available for the advertised start date?</li>
                <li>Are you currently legally able to work in Canada?</li>
              </ul>
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

        {/* office clerk 3 */}

        <h1 className="text-3xl font-extrabold font-serif   text-center mt-8 mb-4">
          WE ARE HIRING
        </h1>

        <div className="bg-white container   rounded-lg flex flex-col md:flex-row w-full mx-auto ">
          {/* Left Section: Job Description */}
          <div className="md:w-1/2 p-4 px-12 ">
            <h2 className="text-4xl font-serif font-extrabold text-blue-600">
              Office Clerk
            </h2>
            <p className="text-gray-500 my-6">
              COMPANY : Kilian Holdings Limited
            </p>

            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Languages: English</li>
              <li>Education: Seconday(high) school graduation certificate</li>
              <li>Experience : 1 to less than 7 months </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Job Details</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Location:Barrhead, ABT7N 1L1</li>
              <li>Salary: 30.00 hourly / 40 hours per Week</li>
              <li>Terms of employment: Permanent employment/Full time</li>
              <li>Day, Morning </li>
              <li>Start Date: start as soon as possible </li>
              <li>Vacancies: 2 vacancies</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>
                Type and proofread correspondence, forms and other documents{" "}
              </li>
              <li>Receive and forward telephone or electronic enquiries</li>
              <li>
                Work on reports from manual or electronic files, inventories and
                databases
              </li>
              <li>
                Sort, process and verify applications, receipts and other
                documents
              </li>
              <li>
                Process incoming and outgoing mail manually or electronically
              </li>
              <li>Send and receive messages</li>
              <li>Perform basic bookkeeping tasks</li>
              <li>
                Photocopy and collate documents for distribution, mailing and
                filing
              </li>
              <li>Order office supplies and maintain inventory</li>
              <li>Prepare and monitor contracts and budgets</li>
            </ul>

            <h3 className="text-md mt-4 font-medium">Health benefits</h3>
            <ul className="list-inside text-sm text-gray-600">
              <li>Dental plan</li>
              <li>Health care plan</li>
            </ul>

            <h3 className="text-lg font-semibold mt-3">How to apply</h3>
            <div className=" text-sm font-medium text-gray-600  ">
              <p>By email</p>

              <a
                href="mailto:kilianholdingltd@gmail.com"
                className="text-blue-500 underline"
              >
                kilianholdingltd@gmail.com
              </a>

              <h3>How-to-apply instructions</h3>
              <p>Here is what you must include in your application:</p>

              <h3>Cover letter</h3>
              <p>
                This job posting includes screening questions. Please answer the
                following questions when applying:
              </p>

              <ul>
                <li>Are you available for the advertised start date?</li>
                <li>Are you currently legally able to work in Canada?</li>
              </ul>
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

        {/* office clerk 4 */}
        <h1 className="text-3xl font-extrabold font-serif   text-center mt-8 mb-4">
          WE ARE HIRING
        </h1>

        <div className="bg-white container   rounded-lg flex flex-col md:flex-row w-full mx-auto ">
          {/* Left Section: Job Description */}
          <div className="md:w-1/2 p-4 px-12 ">
            <h2 className="text-4xl font-serif font-extrabold text-blue-600">
              Office Clerk
            </h2>
            <p className="text-gray-500 my-6">
              COMPANY : Kilian Holdings Limited
            </p>

            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Languages: English</li>
              <li>Education: Seconday(high) school graduation certificate</li>
              <li>Experience : 1 to less than 7 months </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Job Details</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Location: Innisfail , AB T4G 1N4</li>
              <li>Salary: 30.00 hourly / 40 hours per Week</li>
              <li>Terms of employment: Permanent employment/Full time</li>
              <li>Day, Morning </li>
              <li>Start Date: start as soon as possible </li>
              <li>Vacancies: 2 vacancies</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>
                Type and proofread correspondence, forms and other documents{" "}
              </li>
              <li>Receive and forward telephone or electronic enquiries</li>
              <li>
                Work on reports from manual or electronic files, inventories and
                databases
              </li>
              <li>
                Sort, process and verify applications, receipts and other
                documents
              </li>
              <li>
                Process incoming and outgoing mail manually or electronically
              </li>
              <li>Send and receive messages</li>
              <li>Perform basic bookkeeping tasks</li>
              <li>
                Photocopy and collate documents for distribution, mailing and
                filing
              </li>
              <li>Order office supplies and maintain inventory</li>
              <li>Prepare and monitor contracts and budgets</li>
            </ul>

            <h3 className="text-md mt-4 font-medium">Health benefits</h3>
            <ul className="list-inside text-sm text-gray-600">
              <li>Dental plan</li>
              <li>Health care plan</li>
            </ul>

            <h3 className="text-lg font-semibold mt-3">How to apply</h3>
            <div className=" text-sm font-medium text-gray-600  ">
              <p>By email</p>

              <a
                href="mailto:kilianholdingltd@gmail.com"
                className="text-blue-500 underline"
              >
                kilianholdingltd@gmail.com
              </a>

              <h3>How-to-apply instructions</h3>
              <p>Here is what you must include in your application:</p>

              <h3>Cover letter</h3>
              <p>
                This job posting includes screening questions. Please answer the
                following questions when applying:
              </p>

              <ul>
                <li>Are you available for the advertised start date?</li>
                <li>Are you currently legally able to work in Canada?</li>
              </ul>
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

        {/* office clerk 5 */}
        <h1 className="text-3xl font-extrabold font-serif   text-center mt-8 mb-4">
          WE ARE HIRING
        </h1>

        <div className="bg-white container   rounded-lg flex flex-col md:flex-row w-full mx-auto ">
          {/* Left Section: Job Description */}
          <div className="md:w-1/2 p-4 px-12 ">
            <h2 className="text-4xl font-serif font-extrabold text-blue-600">
              Office Clerk
            </h2>
            <p className="text-gray-500 my-6">COMPANY : Techware Solution</p>

            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Languages: English</li>
              <li>Education: Seconday(high) school graduation certificate</li>
              <li>Experience : 1 to less than 7 months </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Job Details</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Location: Athabasca, ABT9S 1H5</li>
              <li>Salary: 30.00 hourly / 40 hours per Week</li>
              <li>Terms of employment: Permanent employment/Full time</li>
              <li>Day, Morning </li>
              <li>Start Date: start as soon as possible </li>
              <li>Vacancies: 2 vacancies</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>
                Type and proofread correspondence, forms and other documents{" "}
              </li>
              <li>Receive and forward telephone or electronic enquiries</li>
              <li>
                Work on reports from manual or electronic files, inventories and
                databases
              </li>
              <li>
                Sort, process and verify applications, receipts and other
                documents
              </li>
              <li>
                Process incoming and outgoing mail manually or electronically
              </li>
              <li>Send and receive messages</li>
              <li>Perform basic bookkeeping tasks</li>
              <li>
                Photocopy and collate documents for distribution, mailing and
                filing
              </li>
              <li>Order office supplies and maintain inventory</li>
              <li>Prepare and monitor contracts and budgets</li>
            </ul>

            <h3 className="text-md mt-4 font-medium">Health benefits</h3>
            <ul className="list-inside text-sm text-gray-600">
              <li>Dental plan</li>
              <li>Health care plan</li>
            </ul>

            <h3 className="text-lg font-semibold mt-3">How to apply</h3>
            <div className=" text-sm font-medium text-gray-600  ">
              <p>By email</p>

              <a
                href="mailto: solutionstechware5@gmail.com"
                className="text-blue-500 underline"
              >
                solutionstechware5@gmail.com
              </a>

              <h3>How-to-apply instructions</h3>
              <p>Here is what you must include in your application:</p>

              <h3>Cover letter</h3>
              <p>
                This job posting includes screening questions. Please answer the
                following questions when applying:
              </p>

              <ul>
                <li>Are you available for the advertised start date?</li>
                <li>Are you currently legally able to work in Canada?</li>
              </ul>
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

        {/* software developer  */}
        <h1 className="text-3xl font-extrabold font-serif   text-center mt-8 mb-4">
          WE ARE HIRING
        </h1>

        <div className="bg-white container   rounded-lg flex flex-col md:flex-row w-full mx-auto ">
          {/* Left Section: Job Description */}
          <div className="md:w-1/2 p-4 px-12 ">
            <h2 className="text-4xl font-serif font-extrabold text-blue-600">
              Software Developer
            </h2>
            <p className="text-gray-500 my-6">COMPANY : GREEKOLOGY</p>

            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Languages: English</li>
              <li>
                Education: College, CEGEP or other non-university Certificate or
                diploma from a program of 1 year to 2 years or equivalent
                experience
              </li>
              <li>Experience : 1 year to less than 2 years </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Job Details</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Location: Drayton Valley , AB </li>
              <li>Salary: 30.00 hourly / 40 hours per Week</li>
              <li>Terms of employment: Permanent employment/Full time</li>
              <li>Day, Morning </li>
              <li>Start Date: start as soon as possible </li>
              <li>Vacancies: 1 vacancies</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>
                Consult with clients to develop and document Website
                requirements
              </li>
              <li>
                Maintain existing computer programs by making modifications as
                required
              </li>
              <li>
                Create and optimize content for Website using a variety of
                graphics, database, animation and other software
              </li>
              <li>
                Assist in the development of logical and physical specifications
              </li>
              <li>
                Lead and co-ordinate multidisciplinary teams to develop Website
                graphics, content, capacity and interactivity
              </li>
              <li>
                Plan, design, write, modify, integrate and test Web-site related
                code.
              </li>
            </ul>
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

        {/* Bookkeeper */}
        <h1 className="text-3xl font-extrabold font-serif   text-center mt-8 mb-4">
          WE ARE HIRING
        </h1>

        <div className="bg-white container   rounded-lg flex flex-col md:flex-row w-full mx-auto ">
          {/* Left Section: Job Description */}
          <div className="md:w-1/2 p-4 px-12 ">
            <h2 className="text-4xl font-serif font-extrabold text-blue-600">
              BookKeeper
            </h2>
            <p className="text-gray-500 my-6">
              COMPANY : CALGARY SOFTWARE DEVELOPERS
            </p>

            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Languages: English</li>
              <li>Education: College, CEGEP or equivalent experience</li>
              <li>Experience: 1 year to less than 2 years</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Job Details</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Location: 5211 50 St. Drayton Valley, ABT7A 1C4</li>
              <li>
                Salary: <strong>19.25 hourly</strong> / 40 hours per Week
              </li>
              <li>Terms of employment: Permanent employment/Full time</li>
              <li>Day, Morning</li>
              <li>Start Date: Starts as soon as possible</li>
              <li>Benefits: Health benefits</li>
              <li>Vacancies: 2 vacancies</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Calculate and prepare cheques for payroll</li>
              <li>
                Keep financial records and establish, maintain and balance
                various accounts using manual and computerized bookkeeping
                systems
              </li>
              <li>Maintain general ledgers and financial statements</li>
              <li>Post journal entries</li>
              <li>
                Prepare other statistical, financial and accounting reports
              </li>
              <li>Prepare trial balance of books</li>
              <li>Reconcile accounts</li>
            </ul>

            <h3 className="text-md mt-4 font-medium">Health benefits</h3>
            <ul className="list-inside text-sm text-gray-600">
              <li>Dental plan</li>
              <li>Health care plan</li>
            </ul>
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

        {/* office supervisor */}

        <h1 className="text-3xl font-extrabold font-serif   text-center mt-8 mb-4">
          WE ARE HIRING
        </h1>

        <div className="bg-white container   rounded-lg flex flex-col md:flex-row w-full mx-auto ">
          {/* Left Section: Job Description */}
          <div className="md:w-1/2 p-4 px-12 ">
            <h2 className="text-4xl font-serif font-extrabold text-blue-600">
              Office Supervisor
            </h2>
            <p className="text-gray-500 my-6">
              COMPANY : CALGARY SOFTWARE DEVELOPERS
            </p>

            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Languages: English</li>
              <li>Education: College, CEGEP or equivalent experience</li>
              <li>Experience: 1 year to less than 2 years</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Job Details</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Location: 5211 50 St. Drayton Valley, ABT7A 1C4</li>
              <li>
                Salary: <strong>19.25 hourly</strong> / 40 hours per Week
              </li>
              <li>Terms of employment: Permanent employment/Full time</li>
              <li>Day, Morning</li>
              <li>Start Date: Starts as soon as possible</li>
              <li>Benefits: Health benefits</li>
              <li>Vacancies: 2 vacancies</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Train workers in duties and policies</li>
              <li>Ensure smooth operation of equipment</li>
              <li>
                Resolve work problems, provide technical advice and recommend
                measures to improve productivity and product quality
              </li>
              <li>Co-ordinate, assign and review work</li>
              <li>Establish work schedules and procedures</li>
              <li>Requisition or order materials, equipment and supplies</li>
              <li>
                Co-ordinate activities with other work units or departments
              </li>
            </ul>

            <h3 className="text-md mt-4 font-medium">Health benefits</h3>
            <ul className="list-inside text-sm text-gray-600">
              <li>Dental plan</li>
              <li>Health care plan</li>
            </ul>
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

        {/* Administrative assistance */}
        <h1 className="text-3xl font-extrabold font-serif   text-center mt-8 mb-4">
          WE ARE HIRING
        </h1>

        <div className="bg-white container   rounded-lg flex flex-col md:flex-row w-full mx-auto ">
          {/* Left Section: Job Description */}
          <div className="md:w-1/2 p-4 px-12 ">
            <h2 className="text-4xl font-serif font-extrabold text-blue-600">
              Administrative Assistant
            </h2>
            <p className="text-gray-500 my-6">
              COMPANY : CALGARY SOFTWARE DEVELOPERS
            </p>

            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Languages: English</li>
              <li>Education: College, CEGEP or equivalent experience</li>
              <li>Experience: 1 year to less than 2 years</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Job Details</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Location: Drayton Valley, ABT7A 1C4</li>
              <li>
                Salary: <strong>19.25 hourly</strong> / 40 hours per Week
              </li>
              <li>Terms of employment: Permanent employment/Full time</li>
              <li>Day, Morning</li>
              <li>Start Date: Starts as soon as possible</li>
              <li>Benefits: Health benefits</li>
              <li>Vacancies: 2 vacancies</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>
                Record and prepare minutes of meetings, seminars, and
                conferences
              </li>
              <li>Determine and establish office procedures and routines</li>
              <li>Schedule and confirm appointments</li>
              <li>Manage contracts</li>
              <li>Answer telephone and relay telephone calls and messages</li>
              <li>
                Set up and maintain manual and computerized information systems
              </li>
              <li>Perform data entry</li>
              <li>Maintain and manage digital database</li>
            </ul>

            <h3 className="text-md mt-4 font-medium">Health benefits</h3>
            <ul className="list-inside text-sm text-gray-600">
              <li>Dental plan</li>
              <li>Health care plan</li>
            </ul>
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

        {/* Admin Assistant */}

        <h1 className="text-3xl font-extrabold font-serif   text-center mt-8 mb-4">
          WE ARE HIRING
        </h1>

        <div className="bg-white container   rounded-lg flex flex-col md:flex-row w-full mx-auto ">
          {/* Left Section: Job Description */}
          <div className="md:w-1/2 p-4 px-12 ">
            <h2 className="text-4xl font-serif font-extrabold text-blue-600">
              Administrative Assistant
            </h2>
            <p className="text-gray-500 my-6">COMPANY : KREATE SYSTEMS</p>

            <div className="job-posting text-gray-800">
              <h2 className="text-xl font-bold mb-4">Job Overview</h2>
              <p className="mb-4">
                We are seeking a detail-oriented and organized{" "}
                <strong>Admin Assistant</strong> to join our team. The ideal
                candidate will play a crucial role in ensuring the smooth
                operation of our office. This position requires strong customer
                support skills, proficiency in data entry, and the ability to
                manage various administrative tasks efficiently. The
                Administrator will be responsible for maintaining accurate
                records, handling communication via phone systems, and providing
                exceptional service to{" "}
                <strong>Kreate Systems - IT Company</strong>.
              </p>

              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="mb-4">4804 42 Ave, Innisfail, AB T4G 1N4</p>

              <p className="font-semibold text-black">
                RELOCATION ASSISTANCE REQUIRED
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">
                Responsibilities
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                <li>
                  Prepare, key in, edit, and proofread correspondence, invoices,
                  presentations, brochures, publications, reports, and related
                  materials.
                </li>
                <li>
                  Open and distribute incoming regular and electronic mail and
                  coordinate the flow of information internally and externally.
                </li>
                <li>Schedule and confirm appointments and meetings.</li>
                <li>Order office supplies and maintain inventory.</li>
                <li>
                  Answer telephone and electronic inquiries, relay calls and
                  messages.
                </li>
                <li>
                  Set up and maintain manual and computerized filing systems.
                </li>
                <li>Determine and establish office procedures.</li>
                <li>
                  Greet visitors, ascertain their needs, and direct them
                  accordingly.
                </li>
                <li>Record and prepare minutes of meetings.</li>
                <li>Arrange travel schedules and make reservations.</li>
                <li>
                  Compile data, statistics, and other information to support
                  research activities.
                </li>
                <li>
                  Supervise and train office staff in procedures and current
                  software.
                </li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-2">
                Employment Requirements
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                <li>Completion of secondary school is usually required.</li>
                <li>
                  Completion of a one- or two-year college or other program for
                  administrative assistants or secretaries <strong>or</strong>{" "}
                  previous clerical experience.
                </li>
                <li>
                  Strong customer support skills with a friendly demeanor.
                </li>
                <li>
                  Experience with Google Suite (Docs, Sheets, Calendar) is
                  highly desirable.
                </li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-2">Job Details</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                <li>
                  <strong>Job Type:</strong> Full-time
                </li>
                <li>
                  <strong>Pay:</strong> $25.75 per hour
                </li>
                <li>
                  <strong>Expected Hours:</strong> 40 per week
                </li>
                <li>
                  <strong>Overtime Pay:</strong> 1.5 times the regular rate
                </li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-2">Benefits</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                <li>Extended health care</li>
                <li>Paid time off</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-2">Schedule</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                <li>8-hour shift</li>
                <li>Day shift</li>
                <li>Monday to Friday</li>
                <li>Morning shift</li>
                <li>Overtime</li>
                <li>Weekends as needed</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-2">
                Language Requirement
              </h3>
              <p className="text-sm text-gray-600">
                English proficiency needed
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Work Location</h3>
              <p className="text-sm text-gray-600">In-person</p>
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
    </>
  );
};

export default Jobmail;
