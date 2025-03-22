import React from 'react'

const KsSupervisor = () => {
  return (
    <div className="w-full mx-auto">
    {/* form starts here */}
    <h1 className="text-2xl font-extrabold font-serif drop-shadow-md text-center mt-8 mb-4">
      WE ARE HIRING!
    </h1>

    {/* Operations Supervisor */}
    <div className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8">
      {/* Left Section: Job Description */}
      <div className="md:w-1/2 p-4 px-12">
        <h2 className="text-4xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
          Operations Supervisor
        </h2>
        <p className="text-gray-600 mb-2">KREATE SYSTEMS</p>

        <h3 className="text-lg font-semibold mb-2">Job Details</h3>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Job type: Full-time</li>
          <li>Location: 4804 42 Ave, Innisfail, AB T4G 1N4</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Full Job Description</h3>
        <p className="text-sm text-gray-600 mb-2">Ride the next mile with us!</p>
        <p className="text-sm text-gray-600 mb-4">
          Why choose Intelcom and become one of our Operations Supervisor?
        </p>

        <h4 className="text-md font-medium mb-2">Responsibilities</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Ensure the seamless running of our delivery business day-to-day</li>
          <li>Utilize communication and leadership skills with employees and Independent Delivery Contractors</li>
          <li>Ensure on-time deliveries and outstanding customer experience</li>
          <li>Manage undelivered packages and complete daily reports</li>
          <li>Adapt quickly to business needs by making quick decisions and problem-solving situations</li>
          <li>Participate in the development and monitoring of procedures and working methods</li>
          <li>Promote and follow safe work methods and behaviors</li>
        </ul>

        <h4 className="text-md font-medium mb-2">Requirements</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Resourceful and autonomous</li>
          <li>Curious about the transport industry</li>
          <li>Strong leadership skills</li>
        </ul>

        <p className="text-sm text-gray-600 mb-4">
          If this job interests you, send us your application and we’ll get in touch with you as soon as possible.
        </p>
        <h3 className="text-lg font-semibold mb-2">How to Apply</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li className="list-none text-sm text-gray-600 mb-2">By email: <a className='text-blue-800' href='#'>kreatesystems8@gmail.com</a></li>
          <li className="list-none text-md font-medium mb-2">How-to-apply instructions</li>
          <li className="list-none text-sm text-gray-600 mb-2">Here is what you must include in your application</li>
            <li className='list-none'>Cover letter</li>   
          </ul>
          <p className="text-sm text-gray-600 mb-2">This job posting includes screening questions. Please answer the following questions when applying:</p>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li className='list-none'>Are you available for the advertised start date?</li>
            <li className='list-none'>Are you currently legally able to work in Canada?</li>
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

export default KsSupervisor