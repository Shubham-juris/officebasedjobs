// administrativeAssistant.jsx
import React from "react";

const DrAdministrativeAssistant = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white text-black">
      {/* Left Section: Job Description */}
      <div className="w-full lg:w-1/2 p-6 overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-1">Administrative Assistant</h2>
        <p className="text-sm text-gray-600 mb-4">Vital Safety Training Ltd. || Drayton Valley, AB T7A 1R7</p>

        <h3 className="font-semibold mt-4 mb-2">Job details</h3>
        <p><strong>Pay:</strong> $25.64 an hour</p>
        <p><strong>Job type:</strong> Permanent, Full-time</p>
        <p><strong>Shift and schedule:</strong> On call</p>

        <h3 className="font-semibold mt-4 mb-2">Full job description</h3>
        <p><strong>Work Term:</strong> Permanent</p>
        <p><strong>Work Language:</strong> English</p>
        <p><strong>Hours:</strong> 30 to 35 hours per week</p>
        <p><strong>Education:</strong> Secondary (high) school graduation certificate</p>
        <p><strong>Experience:</strong> 2 years to less than 3 years</p>

        <h3 className="font-semibold mt-4 mb-2">Work setting</h3>
        <p>Education</p>

        <h3 className="font-semibold mt-4 mb-2">Tasks</h3>
        <ul className="list-disc ml-5 space-y-1">
          <li>Arrange and co-ordinate seminars, conferences, etc.</li>
          <li>Record and prepare minutes of meetings, seminars and conferences</li>
          <li>Determine and establish office procedures and routines</li>
          <li>Schedule and confirm appointments</li>
          <li>Answer telephone and relay telephone calls and messages</li>
          <li>Order office supplies and maintain inventory</li>
          <li>Arrange travel, related itineraries and make reservations</li>
          <li>Greet people and direct them to contacts or service areas</li>
          <li>Set up and maintain manual and computerized information filing systems</li>
          <li>Perform data entry</li>
          <li>Provide customer service</li>
          <li>Perform basic bookkeeping tasks</li>
          <li>Supervise office and volunteer staff</li>
          <li>Perform personal and business errands for employers</li>
          <li>Oversee and co-ordinate office administrative procedures</li>
          <li>Prepare invoices and bank deposits</li>
          <li>Establish work priorities and ensure procedures are followed and deadlines are met</li>
          <li>Assemble data and prepare periodic and special reports, manuals and correspondence</li>
          <li>Open and distribute regular and electronic incoming mail and other material</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">Certificates, licences, memberships, and courses</h3>
        <p>First Aid Certificate</p>

        <h3 className="font-semibold mt-4 mb-2">Computer and technology knowledge</h3>
        <p>MS Excel, MS PowerPoint, MS Access, QuickBooks</p>

        <h3 className="font-semibold mt-4 mb-2">Transportation/travel information</h3>
        <p>Valid driver's licence</p>

        <h3 className="font-semibold mt-4 mb-2">Work conditions and physical capabilities</h3>
        <p>Attention to detail, Work with minimal supervision</p>

        <h3 className="font-semibold mt-4 mb-2">Personal suitability</h3>
        <p>Ability to multitask, Excellent oral communication, Organized, Team player, Client focus</p>

        <h3 className="font-semibold mt-4 mb-2">Screening questions</h3>
        <p>Are you available for shift or on-call work?</p>

        <h3 className="font-semibold mt-4 mb-2">Other benefits</h3>
        <ul className="list-disc ml-5 space-y-1">
          <li>Support for newcomers and refugees</li>
          <li>Supports social and labour market integration of newcomers and/or refugees</li>
          <li>Provides diversity and cross-cultural trainings</li>
          <li>Support for Indigenous people</li>
          <li>Provides cultural competency training and/or awareness training</li>
        </ul>
      </div>

      {/* Right Section: Application Form */}
      <div className="w-full lg:w-1/2 p-6">
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
  );
};

export default DrAdministrativeAssistant;
