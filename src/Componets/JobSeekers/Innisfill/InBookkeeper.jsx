import React from 'react'

const InBookkeeper = () => {
  return (
    <div className="w-full mx-auto">
    {/* form starts here */}
    <h1 className="text-2xl font-extrabold font-serif drop-shadow-md text-center mt-8 mb-4">
      WE ARE HIRING!
    </h1>

    {/* bookkeeper */}
    <div className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8">
      {/* Left Section: Job Description */}
      <div className="md:w-1/2 p-4 px-12">
        <h2 className="text-2xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
          Bookkeeper
        </h2>
        <p className="text-gray-600 mb-2">Jonathan Audette Professional Corporation</p>
        <p className="text-gray-600 mb-2">Barrie, ON L4M 5N6</p>

        <h3 className="text-lg font-semibold mb-2">Job Details</h3>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Pay: $25 an hour</li>
          <li>Job type: Permanent, Full-time</li>
          <li>Location: Barrie, ON L4M 5N6</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Full Job Description</h3>
        <p className="text-sm text-gray-600 mb-2">
          Education: College, CEGEP or other non-university certificate or diploma from a program of 3 months to less than 1 year
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Experience: 1 year to less than 2 years
        </p>

        <h4 className="text-md font-medium mb-2">Tasks</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Calculate and prepare cheques for payroll</li>
          <li>Calculate fixed assets and depreciation</li>
          <li>Keep financial records and establish, maintain and balance various accounts using <br/>manual and computerized bookkeeping systems</li>
          <li>Maintain general ledgers and financial statements</li>
          <li>Post journal entries</li>
          <li>Prepare other statistical, financial and accounting reports</li>
          <li>Prepare tax returns</li>
          <li>Prepare trial balance of books</li>
          <li>Reconcile accounts</li>
        </ul>

        <h4 className="text-md font-medium mb-2">Computer and Technology Knowledge</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Quick Books</li>
          <li>Simply Accounting</li>
          <li>TaxPrep</li>
          <li>Sage Accounting Software</li>
        </ul>

        <h4 className="text-md font-medium mb-2">Work Conditions and Physical Capabilities</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Ability to work independently</li>
          <li>Attention to detail</li>
          <li>Repetitive tasks</li>
          <li>Tight deadlines</li>
          <li>Work under pressure</li>
        </ul>

        <h4 className="text-md font-medium mb-2">Personal Suitability</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Accurate</li>
          <li>Client focus</li>
          <li>Dependability</li>
          <li>Organized</li>
          <li>Reliability</li>
          <li>Team player</li>
          <li>Time management</li>
          <li>Work Term: Permanent</li>
          <li>Work Language: English</li>
          <li>Hours: 35 hours per week</li>
        </ul>

        {/* <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
        </ul> */}
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

export default InBookkeeper