import React from 'react'

const InReceptionist = () => {
  return (
    <div className="w-full mx-auto">
    {/* form starts here */}
    <h1 className="text-2xl font-extrabold font-serif drop-shadow-md text-center mt-8 mb-4">
      WE ARE HIRING!
    </h1>

    {/* Receptionist */}
    <div className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8">
      {/* Left Section: Job Description */}
      <div className="md:w-1/2 p-4 px-12">
        <h2 className="text-2xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
          Receptionist
        </h2>
        <p className="text-gray-600 mb-2">Mallory Insurance Brokers LTD.</p>
        <p className="text-gray-600 mb-2">45 Collier Street, Barrie, ON L4M 1G5</p>

        <h3 className="text-lg font-semibold mb-2">Job Details</h3>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Job type: Part-time</li>
          <li>Shift and schedule: No weekends, Monday to Friday</li>
          <li>Location: 45 Collier Street, Barrie, ON L4M 1G5</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Full Job Description</h3>
        <p className="text-sm text-gray-600 mb-2">
          We are looking for a passionate and committed receptionist to join our Brokerage. The successful candidate must have excellent written and oral communication skills, a professional demeanor, and an interest in performing administrative tasks. We are looking for an organized individual who can follow the appropriate protocols for greeting clients, answering the phone, and other administrative tasks.
        </p>

        <h4 className="text-md font-medium mb-2">This job might be right for you if you have:</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>At least one year customer service experience in a similar environment.</li>
          <li>Knowledge of computers and relevant software applications.</li>
          <li>Keyboard skills</li>
          <li>Knowledge of administrative roles.</li>
          <li>Strong communication skills.</li>
        </ul>

        <h4 className="text-md font-medium mb-2">Responsibilities:</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Greet and welcome clients in a friendly and professional manner.</li>
          <li>Promptly answer and direct telephone calls in a friendly, professional manner.</li>
          <li>Assist with administrative tasks such as filing and copying.</li>
          <li>Ordering and maintaining supplies for the office.</li>
          <li>Schedule and prepare couriers and mail; both incoming and outgoing.</li>
          <li>Dictation.</li>
        </ul>

        <h4 className="text-md font-medium mb-2">Schedule:</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Part Time - days and hours to be discussed.</li>
          <li>Must be willing to cover staff holidays.</li>
          <li>No weekends.</li>
        </ul>

        <h4 className="text-md font-medium mb-2">Salary:</h4>
        <p className="text-sm text-gray-600 mb-4">Hourly wage according to experience.</p>

        <p className="text-sm text-gray-600 mb-4">
          We thank all candidates interested in this position, however, only those that meet the qualifications will be contacted.
        </p>

        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Job Type: Part-time</li>
          <li>Schedule: Monday to Friday</li>
          <li>Work Location: In person</li>
         
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

export default InReceptionist