import React from 'react'

const EdCollisionDataClerk = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 gap-6">
      {/* Left Section: Job Description */}
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-2xl text-blue-600 font-bold">Collision Data Clerk</h2>
        <p><strong>City of Edmonton || 10111 104 Ave NW, Edmonton, AB</strong></p>
        <p><strong>Pay:</strong> $25.17–$31.26 an hour</p>
        <p><strong>Job type:</strong> Full-time</p>
        <p><strong>Location:</strong> 10111 104 Ave NW, Edmonton, AB</p>
        <p><strong>Job Number:</strong> 51940</p>
        <p>The City of Edmonton is committed to Vision Zero, a strategy to eliminate traffic-related fatalities and serious injuries by 2032. We are looking for a Collision Data Clerk to join our Safe Mobility Section and play a key role in achieving this goal.</p>
        <p>The Collision Data Clerk is responsible for the accurate and timely entry, validation, and maintenance of collision data. This information is critical to the Safe Mobility Section's work in identifying trends, developing safety programs, and evaluating the effectiveness of our efforts. The ideal candidate will have a strong attention to detail, excellent data entry skills, and a commitment to accuracy.</p>
        <p><strong>What will you do?</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>Enter and validate collision data in the Motor Vehicle Collision Information System (MVCIS)</li>
          <li>Review and check collision reports for errors</li>
          <li>Collaborate with staff to reach data entry goals and targets</li>
          <li>Maintain and update MVCIS, including location codes</li>
          <li>Create warnings for incorrect location information</li>
          <li>Liaise with Edmonton Police Service and collision reporting partners to clarify information</li>
          <li>Support MVCIS and Safety Data Administrator with updating documentation</li>
          <li>Support collision data requests and reporting for stakeholders</li>
        </ul>
        <p><strong>Qualifications:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>Completion of the twelfth school grade including business subjects related to word and information processing or completion of an appropriate certificate program from an approved business school/college</li>
          <li>Two years progressively responsible information processing experience including:</li>
          <li>Experience working with databases, such as the Motor Vehicle Collision Information System</li>
          <li>Experience working with ArcGIS and/or similar geomapping software</li>
          <li>Experience working with compiling, summarizing and interpreting data</li>
          <li>Experience with creating data visualizations (such as tables, charts and graphs)</li>
          <li>Knowledge and experience working with internal and external stakeholder organizations to share data and for data reporting</li>
        </ul>
        <p><strong>Assets:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>Experience working with collision data and/or safety incident report data</li>
          <li>Knowledge of the City of Edmonton's Safe Mobility Strategy</li>
          <li>Experience working with confidential and sensitive information</li>
        </ul>
        <p><strong>Skills required for success:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>Strong data entry skills and a high level of accuracy</li>
          <li>Knowledge and experience working with Google applications and Office programs, including use of word processing documents and spreadsheets</li>
          <li>Excellent attention to detail</li>
          <li>Ability to work independently and as part of a team</li>
          <li>Ability to meet deadlines and manage multiple tasks</li>
          <li>Strong communication and interpersonal skills</li>
          <li>Alignment to our Cultural Commitments and Leadership Competencies</li>
          <li>Embracing a culture of equity, diversity, reconciliation and inclusion</li>
        </ul>
        <p><strong>Conditions of Employment:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>Hire is dependent on a Criminal Records Check (CRC) security clearance that is satisfactory to the City of Edmonton and is a requirement of this position</li>
          <li>There may be a cost associated with this requirement</li>
        </ul>
        <p><strong>Work Environment:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>This position is performed in a typical office setting. A significant portion of this role involves repetitive tasks, such as data entry, verification, and filing</li>
          <li>Travel between City of Edmonton work locations is occasionally required. Arranging own transportation between these locations is required</li>
          <li>This position may be eligible for a hybrid work arrangement as per the Letter of Understanding between the City of Edmonton and Civic Service Union 52</li>
          <li>The weekly hours of work for this position are currently under review and may change in the future in accordance with the collective agreement</li>
        </ul>
        <p>The City of Edmonton values applicants with a diverse range of skills, experiences and competencies, and encourages you to apply.</p>
        <p><strong>Additional Details:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>Hours of Work: 33.75 hours per week</li>
          <li>Salary Range: $25.172 - $31.257 (Hourly)</li>
          <li>Up to 2 temporary full-time positions for up to 11 months</li>
          <li>Classification Title: Clerk II</li>
          <li>Union: CSU 52</li>
          <li>Department: Parks and Roads Services</li>
          <li>Work Location(s): 16th Floor Edmonton Tower, 10111 104 Avenue Edmonton T5J 0J4</li>
          <li>Posting Date: Mar 10, 2025</li>
          <li>Closing Date: Mar 24, 2025 11:59:00 PM (MDT)</li>
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
  )
}

export default EdCollisionDataClerk
