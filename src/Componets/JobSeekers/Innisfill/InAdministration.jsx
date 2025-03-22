import React from 'react'

const InAdministration = () => {
  return (
   
    <div className="w-full mx-auto">
    {/* form starts here */}
    <h1 className="text-2xl font-extrabold font-serif drop-shadow-md text-center mt-8 mb-4">
      WE ARE HIRING!
    </h1>

    {/* Manager Administration & Operations */}
    <div className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8">
      {/* Left Section: Job Description */}
      <div className="md:w-1/2 p-4 px-12">
        <h2 className="text-2xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
          Manager Administration & Operations
        </h2>
        <p className="text-gray-600 mb-2">Stevenson Memorial Hospital Foundation</p>
        <p className="text-gray-600 mb-2">Alliston, ON</p>
        <p className="text-gray-600 mb-2">Hybrid work</p>

        <h3 className="text-lg font-semibold mb-2">Job Details</h3>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Pay: $69,000–$82,000 a year</li>
          <li>Job type: Full-time</li>
          <li>Location: Alliston, ON</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Benefits</h3>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Company pension</li>
          <li>Dental care</li>
          <li>Extended health care</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Full Job Description</h3>
        <p className="text-sm text-gray-600 mb-4">
          JOB POSTING
          <br/>
          STEVENSON MEMORIAL HOSPITAL FOUNDATION
          <br/>
          Position Title: Manager Administration & Operations (MAO)
          <br/>
          Reports to: Chief Executive Officer (CEO)
          <br/>
          Posting Date: March 17, 2025
        </p>

        <h4 className="text-md font-medium mb-2">Role & Responsibilities</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Oversees daily administrative operations, making sure they align with SMHF objectives.</li>
          <li>Oversees annual budget process, including the development of the Foundation’s operational work plan.</li>
          <li>Manages and tracks all volunteer information.</li>
          <li>Develop and implement operational strategies and procedures.</li>
          <li>Coordinates annual general Board meeting.</li>
          <li>Works with SMHF Executive Assistant (EA) to support all Board activity.</li>
          <li>Ensures efficient support to all ad hoc and standing committees.</li>
          <li>Reviews and manages all Board policies.</li>
          <li>Monitors and manages operational costs.</li>
          <li>Manages resources and processes to ensure budget adherence.</li>
          <li>Coordinates team schedules to ensure office coverage.</li>
          <li>Other duties as assigned.</li>
        </ul>

        <h4 className="text-md font-medium mb-2">Qualifications and Competencies</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          <li>Bachelor’s degree or Community College diploma in a related field.</li>
          <li>Minimum seven years’ experience in an operations management role.</li>
          <li>Strong organizational and leadership skills.</li>
          <li>Experience with fundraising/CRM database applications.</li>
          <li>Excellent team management and communication skills.</li>
          <li>Proficiency in MS Office and data analysis.</li>
          <li>Ability to manage confidential information professionally.</li>
          <li>Ability to proactively resolve issues and multitask.</li>
        </ul>

        <h4 className="text-md font-medium mb-2">How to Apply</h4>
        <p className="text-sm text-gray-600 mb-4">
          Interested applicants are asked to submit a PDF cover letter and resume by email to foundation@smhosp.on.ca.
          <br/>
          No phone calls, please. We thank all applicants for their interest; however, only those selected for an interview will be contacted.
          This job posting will remain active until the position is filled.
        </p>
      </div>

      {/* Right Section: Application Form */}
      <div className="w-full md:w-1/2 p-6">
        <div className="flex justify-start mb-4">
          <button className="text-black font-thin">APPLY NOW</button>
        </div>

        <form>
          <div className="mb-4">
            <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <input type="tel" placeholder="Phone" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email*" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <textarea placeholder="Cover letter" className="w-full p-2 border border-gray-300 rounded" rows="5"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition">
            SUBMIT APPLICATION
          </button>
        </form>
      </div>
    </div>
  </div>
  );
};



export default InAdministration