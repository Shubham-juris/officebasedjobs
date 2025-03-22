import React from 'react'

const KsOfficeManager = () => {
  return (
    <div className="w-full mx-auto">
    {/* form starts here */}
    <h1 className="text-2xl font-extrabold font-serif drop-shadow-md text-center mt-8 mb-4">
      WE ARE HIRING!
    </h1>

    {/* office manager */}
    <div className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8">
      {/* Left Section: Job Description */}
      <div className="md:w-1/2 p-4 px-12">
        <h2 className="text-4xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
          Office Manager
        </h2>
        <p className="text-gray-600 mb-2">KREATE SYSTEMS</p>
        <p className="text-gray-600 mb-2">4804 42 Ave, Innisfail, AB T4G 1N4</p>

        <h3 className="text-lg font-semibold mb-2">Job Details</h3>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Pay: $26.54 an hour</li>
          <li>Job type: Permanent, Full-time</li>
          <li>Location: 4804 42 Ave, Innisfail, AB T4G 1N4</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Full Job Description</h3>
          <p className="text-sm text-gray-600 mb-2">
            Education: College, CEGEP or other non-university certificate or diploma from a program of 1 year to 2 years
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Experience: 1 year to less than 2 years or equivalent experience
          </p>

          <h4 className="text-md font-medium mb-2">Tasks</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Review and evaluate new administrative procedures</li>
            <li>Establish work priorities and ensure procedures are followed and deadlines are met</li>
            <li>Carry out administrative activities of establishment</li>
            <li>Assist in the preparation of operating budget and maintain inventory and budgetary controls</li>
            <li>Assemble data and prepare periodic and special reports, manuals and correspondence</li>
            <li>Oversee and co-ordinate office administrative procedures</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Work Conditions and Physical Capabilities</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Ability to work independently</li>
            <li>Attention to detail</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Personal Suitability</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Organized</li>
            <li>Reliability</li>
            <li>Ability to multitask</li>
            <li>Adaptability</li>
            <li>Team player</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Screening Questions</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Are you currently a student?</li>
            <li>Are you currently legally able to work in Canada?</li>
            <li>Do you currently reside in proximity to the advertised location?</li>
            <li>Do you have previous experience in this field of employment?</li>
            <li>What is the highest level of study you have completed?</li>
          </ul>

          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Work Term: Permanent</li>
            <li>Work Language: English</li>
            <li>Hours: 30 to 40 hours per week</li>
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
  )
}

export default KsOfficeManager