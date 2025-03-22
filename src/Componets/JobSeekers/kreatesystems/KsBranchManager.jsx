import React from 'react'

const KsBranchManager = () => {
  return (
    <div className="w-full mx-auto">
      {/* form starts here */}
      <h1 className="text-2xl font-extrabold font-serif drop-shadow-md text-center mt-8 mb-4">
        WE ARE HIRING!
      </h1>

      {/* Branch Manager */}
      <div className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8">
        {/* Left Section: Job Description */}
        <div className="md:w-1/2 p-4 px-12">
          <h2 className="text-4xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
            Branch Manager
          </h2>
          <p className="text-gray-600 mb-2">KREATE SYSTEMS</p>

          <h3 className="text-lg font-semibold mb-2">Job Details</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Job type: Full-time</li>
            <li>Shift and schedule: Monday to Friday</li>
            <li>Location:4804 42 Ave, Innisfail, AB T4G 1N4</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Benefits</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Life insurance</li>
            <li>Paid vacation</li>
            <li>Profit sharing</li>
            <li>Tuition reimbursement</li>
            <li>Wellness program</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Full Job Description</h3>
          <p className="text-sm text-gray-600 mb-2">
            At Wolseley Canada, our leading-edge is the knowledge and insight found in every corner of our organization. Here, you’ll build strong relationships and support critical industries that touch the lives of Canadians.
          </p>

          <h4 className="text-md font-medium mb-2">What’s in it for you?</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Regular business hours Monday to Friday</li>
            <li>Comprehensive benefits with premiums fully paid</li>
            <li>Career development and training opportunities</li>
            <li>Retirement savings programs</li>
            <li>Paid vacation and sick time</li>
            <li>Bonus programs</li>
            <li>Employee discounts</li>
            <li>Education reimbursement</li>
          </ul>

          <h4 className="text-md font-medium mb-2">What you will do:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Manage day-to-day branch operations</li>
            <li>Train and supervise inside sales and warehouse teams</li>
            <li>Ensure superior customer service levels</li>
            <li>Cultivate and manage key business relationships</li>
            <li>Identify new business opportunities</li>
            <li>Manage work schedules and labor costs</li>
          </ul>

          <h4 className="text-md font-medium mb-2">What you will bring:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Knowledge of Plumbing & HVAC industry</li>
            <li>Proven leadership and team-building skills</li>
            <li>Exceptional customer service skills</li>
            <li>Strong problem-solving abilities</li>
            <li>Experience with Microsoft Office programs</li>
            <li>Bilingual in French and English is an asset</li>
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

export default KsBranchManager