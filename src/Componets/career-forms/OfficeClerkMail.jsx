import React from "react";

const OfficeClerkMail = () => {
  return (
    <div className="w-full mx-auto">
      <h1 className="text-2xl font-extrabold font-serif drop-shadow-md text-center mt-8 mb-4">
        WE ARE HIRING!
      </h1>

      <div className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8">
        {/* Left Section: Job Description */}
        <div className="md:w-1/2 p-4 px-12">
          <h2 className="text-3xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
            Office Clerk
          </h2>
          <p className="text-gray-600 mb-2">Ricoh</p>
          <p className="text-gray-600 mb-2">Calgary, AB</p>

          <h3 className="text-lg font-semibold mb-2">Job Details</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Job type: Full-time</li>
            <li>Location: Calgary, AB</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Full Job Description</h3>
          <p className="text-sm text-gray-600 mb-4">
            The Office Clerk is responsible for supporting the daily operations of one or more Managed Services locations including any or all of the following: copy, print and scanning production and finish work, operation of a mail and courier centre, maintaining billing logs and reports. The position supports the region's Managed Services during implementation, fills in for absences and vacations throughout the Ricoh Managed Services locations. Responsible for supporting operational objectives at all existing customer sites within a geographic territory.
          </p>

          <h4 className="text-md font-medium mb-2">Responsibilities</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Maintains accurate, complete and up-to-date Site Procedure Guides, forms and logs</li>
            <li>Collects data for the monthly management report</li>
            <li>Orders paper, toner and office supplies</li>
            <li>Assist Site Manager/Supervisor with process improvements</li>
            <li>Assist in training of employees</li>
            <li>Work at various client locations as needed</li>
            <li>Other duties as assigned</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Reception & Guest Management</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Greet and assist visitors</li>
            <li>Manage check-ins and badges</li>
            <li>Answer phone calls and emails</li>
            <li>Provide concierge-style guest support</li>
            <li>Coordinate vendor services and facility requests</li>
            <li>Manage meeting rooms and supplies</li>
            <li>Submit IT and printer support requests</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Mail</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Process incoming and outgoing mail</li>
            <li>Mail fulfillment and shipments</li>
            <li>Document filing and labeling</li>
            <li>Shipping/receiving and courier service</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Copy</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Copy center assistance, binding, laminating, etc.</li>
            <li>Document scanning and indexing</li>
            <li>Basic troubleshooting of equipment</li>
          </ul>

          <h4 className="text-md font-medium mb-2">General</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Front desk duties</li>
            <li>Coordinate work assignments</li>
            <li>Manage Ricoh Centre in absence of manager</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Qualifications</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>High School Diploma or equivalent</li>
            <li>1+ year experience in mail room, copy center or customer service</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Skills</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Use of photocopier, scanner, printer, etc.</li>
            <li>Strong interpersonal and multitasking skills</li>
            <li>Motivated and results-driven</li>
            <li>Excellent communication skills</li>
            <li>Microsoft Office 365 knowledge</li>
            <li>Professional demeanor</li>
            <li>Ability to lift up to 50 lbs.</li>
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

export default OfficeClerkMail;
