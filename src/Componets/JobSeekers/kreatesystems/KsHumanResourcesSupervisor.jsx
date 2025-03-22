import React from 'react'

const KsHumanResourcesSupervisor = () => {
  return (
    <div className="w-full mx-auto">
    {/* form starts here */}
    <h1 className="text-2xl font-extrabold font-serif drop-shadow-md text-center mt-8 mb-4">
      WE ARE HIRING!
    </h1>

    {/* Human Resources Supervisor */}
    <div className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8">
      {/* Left Section: Job Description */}
      <div className="md:w-1/2 p-4 px-12">
        <h2 className="text-4xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
          Human Resources Supervisor
        </h2>
        <p className="text-gray-600 mb-2">KREATE SYSTEMS</p>
        <p className="text-gray-600 mb-2">4804 42 Ave, Innisfail, AB T4G 1N4</p>

        <h3 className="text-lg font-semibold mb-2">Job Details</h3>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Pay: $44 an hour</li>
          <li>Job type: Permanent, Part-time, Full-time</li>
          <li>Location: 4804 42 Ave, Innisfail, AB T4G 1N4</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Full Job Description</h3>
        <p className="text-sm text-gray-600 mb-2">Education: Bachelor's degree</p>
        <p className="text-sm text-gray-600 mb-4">Experience: 3 years to less than 5 years or equivalent experience</p>

        <h4 className="text-md font-medium mb-2">Tasks</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Assign projects to subordinates and staff relating to employment, compensation, labour relations and employee relations</li>
          <li>Coordinate the activities of the HR department in order to ensure they meet the organization's goals</li>
          <li>Evaluate daily operations</li>
          <li>Plan, develop, implement and evaluate human resources policies and programs</li>
          <li>Review HR projects to assure compliance with laws and regulations</li>
          <li>Plan, develop and implement recruitment strategies</li>
          <li>Research and prepare occupational classifications, job descriptions and salary scales</li>
          <li>Manage contracts</li>
          <li>Oversee the analysis of employee data and information</li>
          <li>Oversee the preparation of reports</li>
          <li>Hire, train and supervise staff</li>
          <li>Recruit and hire staff</li>
          <li>Evaluate work environments, programs and procedures to control, eliminate, and prevent disease or injury</li>
        </ul>

        <h4 className="text-md font-medium mb-2">Computer and Technology Knowledge</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>MS Excel</li>
          <li>MS Outlook</li>
          <li>MS Windows</li>
          <li>MS Word</li>
          <li>Electronic mail</li>
          <li>Internet</li>
        </ul>

        <h4 className="text-md font-medium mb-2">Work Conditions and Physical Capabilities</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Ability to work independently</li>
          <li>Fast-paced environment</li>
          <li>Work under pressure</li>
          <li>Tight deadlines</li>
          <li>Attention to detail</li>
        </ul>

        <h4 className="text-md font-medium mb-2">Personal Suitability</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Excellent oral communication</li>
          <li>Excellent written communication</li>
          <li>Flexibility</li>
          <li>Judgement</li>
          <li>Organized</li>
          <li>Team player</li>
          <li>Client focus</li>
          <li>Efficient interpersonal skills</li>
          <li>Reliability</li>
          <li>Values and ethics</li>
          <li>Ability to multitask</li>
          <li>Accountability</li>
        </ul>

        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Work Term: Permanent</li>
          <li>Work Language: English</li>
          <li>Hours: 30 hours per week</li>
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

export default KsHumanResourcesSupervisor