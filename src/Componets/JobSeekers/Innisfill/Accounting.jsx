import React from 'react'

const Accounting = () => {
  return (
    <div className="w-full mx-auto">
    {/* form starts here */}
    <h1 className="text-2xl font-extrabold font-serif drop-shadow-md text-center mt-8 mb-4">
      WE ARE HIRING!
    </h1>

    {/* Accounting Clerk */}
    <div className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8">
      {/* Left Section: Job Description */}
      <div className="md:w-1/2 p-4 px-12">
        <h2 className="text-2xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
          Accounting Clerk
        </h2>
        <p className="text-gray-600 mb-2">The Humberview Group</p>
        <p className="text-gray-600 mb-2">Barrie, ON</p>

        <h3 className="text-lg font-semibold mb-2">Job Details</h3>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Pay: $45,000–$50,000 a year</li>
          <li>Shift and schedule: Weekends as needed, Monday to Friday</li>
          <li>Location: Barrie, ON</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Full Job Description</h3>
        <p className="text-sm text-gray-600 mb-2">Bayfield Lincoln Ford is looking for an Accounting Clerk to join their team in Barrie.</p>
        <p className="text-sm text-gray-600 mb-4">The Accounting Clerk is responsible for general administrative duties.</p>
        
        <h4 className="text-md font-medium mb-2">Tasks</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Process accounting files for various departments.</li>
          <li>Responsible for cash balancing and bank reconciliation.</li>
          <li>Prepare and post daily deposits.</li>
          <li>Process accounts receivables and collections.</li>
          <li>Initiate credit and reference checks with credit institutions when necessary.</li>
          <li>Process and reconcile receivables from manufacturer.</li>
          <li>Assist in preparation of monthly statements through reconciliation of various accounts.</li>
          <li>Perform any other duties as required.</li>
        </ul>

        <h4 className="text-md font-medium mb-2">What We Look For</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Experience in a dealership accounting role is preferred, but not required.</li>
          <li>Entry-level accounting abilities.</li>
          <li>Experience using CDK and One-Eighty is an asset.</li>
          <li>Willing to learn.</li>
          <li>Mathematical aptitude.</li>
          <li>Strong time management skills.</li>
          <li>Basic computer skills and familiarity with Microsoft Office.</li>
          <li>A keen eye for detail.</li>
          <li>Friendly and a trustworthy individual.</li>
          <li>A desire to achieve the very best in customer service and teamwork.</li>
        </ul>
        <p className="text-sm text-gray-600 mt-4">
            At The Humberview Group, finding great people who are enthusiastic and driven is most important. At HG, we can provide you with the skills and knowledge you need to be successful. Our team leaders take great pride in mentoring which ensures we are investing in great people for the long term. Having a great corporate culture with team members who share our values is what makes us stand out.
          </p>
          <p className="text-sm text-gray-600 mt-4">
            Whether you’re new to the automotive industry or you’re looking for more growth opportunities, we would love to meet you!
          </p>
          <p className="text-sm text-gray-600 mt-4">
            We are an equal opportunity employer and welcome applications from all candidates, including persons with disabilities. Accommodations are available upon request for candidates taking part in any stage of the selection process. We thank all candidates, but only those selected for an interview will be contacted.
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
  )
}

export default Accounting