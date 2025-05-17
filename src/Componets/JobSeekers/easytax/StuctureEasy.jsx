import React from "react";

const jobListings = [
  {
    "title": "Bookkeeper",
    "postedDate": "April 22, 2025",
    "employer": "Easytax & Books keeping",
    "location": "Calgary, AB",
    "workplace": "On site",
    "salary": "$37.00 hourly / 30 to 40 hours per week",
    "employmentType": "Permanent employment, Full time",
    "startDate": "As soon as possible",
    "vacancies": 2,
    "jobBankId": "3286326",
    "language": "English",
    "education": "College/CEGEP",
    "experience": "1 year to less than 2 years",
    "responsibilities": [
      "Keep financial records and establish, maintain and balance various accounts using manual and computerized bookkeeping systems",
      "Maintain general ledgers and financial statements",
      "Post journal entries",
      "Prepare other statistical, financial and accounting reports",
      "Prepare tax returns",
      "Reconcile accounts"
    ],
    "benefits": [
      "Dental plan",
      "Health care plan"
    ]
  },
  {
    "title": "Office Manager",
    "postedDate": "April 28, 2025",
    "employer": "Easytax & Books keeping",
    "location": "2115 27 avenue ne, Calgary, AB T2E 7E4",
    "workplace": "On site",
    "salary": "$36.50 hourly / 30 to 40 hours per week",
    "employmentType": "Permanent employment, Full time",
    "startDate": "As soon as possible",
    "vacancies": 2,
    "jobBankId": "3293540",
    "language": "English",
    "education": "College/CEGEP",
    "experience": "1 year to less than 2 years",
    "responsibilities": [
      "Implement new administrative procedures",
      "Review and evaluate new administrative procedures",
      "Establish work priorities and ensure procedures are followed and deadlines are met",
      "Carry out administrative activities of establishment",
      "Administer policies and procedures related to the release of records in processing requests under government access to information and privacy legislation",
      "Co-ordinate and plan for office services such as accommodation, relocation, equipment, supplies, forms, disposal of assets, parking, maintenance and security services",
      "Assist in the preparation of operating budget and maintain inventory and budgetary controls",
      "Assemble data and prepare periodic and special reports, manuals and correspondence",
      "Train staff",
      "Oversee and co-ordinate office administrative procedures",
      "Resolve conflict situations",
      "Monitor and evaluate"
    ],
    "benefits": [
      "Dental plan",
      "Health care plan"
    ]
  },
  {
    "title": "Receptionist",
    "postedDate": "April 25, 2025",
    "employer": "Easytax & Books keeping",
    "location": "Calgary, AB",
    "workplace": "On site",
    "salary": "$20.00 hourly / 30 to 40 hours per week",
    "employmentType": "Permanent employment, Full time",
    "startDate": "As soon as possible",
    "vacancies": 1,
    "jobBankId": "TBD",
    "language": "English",
    "education": "High school diploma",
    "experience": "Experience an asset",
    "responsibilities": [
      "Answer telephone and relay calls and messages",
      "Greet people and direct them to contacts or service areas",
      "Schedule appointments",
      "Perform clerical duties, such as filing and data entry"
    ],
    "benefits": [
      "Health care plan"
    ]
  },
  {
    "title": "Office Administrative Assistant",
    "postedDate": "April 26, 2025",
    "employer": "Easytax & Books keeping",
    "location": "Calgary, AB",
    "workplace": "On site",
    "salary": "$22.00 hourly / 35 hours per week",
    "employmentType": "Permanent employment, Full time",
    "startDate": "As soon as possible",
    "vacancies": 1,
    "jobBankId": "TBD",
    "language": "English",
    "education": "College/CEGEP",
    "experience": "1 year to less than 2 years",
    "responsibilities": [
      "Answer electronic enquiries",
      "Compile data, statistics and other information",
      "Order office supplies and maintain inventory",
      "Type and proofread correspondence, forms and other documents"
    ],
    "benefits": [
      "Dental plan",
      "Health care plan"
    ]
  },
  {
    "title": "Office Clerk",
    "postedDate": "April 27, 2025",
    "employer": "Easytax & Books keeping",
    "location": "Calgary, AB",
    "workplace": "On site",
    "salary": "$21.00 hourly / 30 to 40 hours per week",
    "employmentType": "Permanent employment, Full time",
    "startDate": "As soon as possible",
    "vacancies": 1,
    "jobBankId": "TBD",
    "language": "English",
    "education": "Secondary (high) school graduation certificate",
    "experience": "Experience an asset",
    "responsibilities": [
      "Receive and forward telephone or electronic enquiries",
      "Process incoming and outgoing mail",
      "Sort, process and verify applications, receipts and other documents",
      "File material in storage area"
    ],
    "benefits": [
      "Health care plan"
    ]
  },
  {
    "title": "Office Assistant",
    "postedDate": "April 27, 2025",
    "employer": "Easytax & Books keeping",
    "location": "Calgary, AB",
    "workplace": "On site",
    "salary": "$19.00 hourly / 30 hours per week",
    "employmentType": "Permanent employment, Part time",
    "startDate": "As soon as possible",
    "vacancies": 1,
    "jobBankId": "TBD",
    "language": "English",
    "education": "High school diploma",
    "experience": "Experience an asset",
    "responsibilities": [
      "Organize office filing systems",
      "Assist with administrative procedures",
      "Photocopy and collate documents",
      "Support staff with clerical tasks"
    ],
    "benefits": [
      "Health care plan"
    ]
  }
]


const JobListings = () => {
  return (
    <div className="w-full mx-auto py-8">
      {jobListings.map((job, index) => (
        <div key={index} className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8 relative ">
          <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-extrabold font-serif text-center bg-white px-4 py-2 rounded-lg">
            WE ARE HIRING!
          </h1>

          {/* Left: Job Description */}
          <div className="md:w-1/2 p-4 px-12 mt-8">
            <h2 className="text-4xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
              {job.title}
            </h2>
            <p className="text-gray-600 mb-2">{job.employer}</p>

            <h3 className="text-lg font-semibold mb-2">Job Details</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Job type: {job.employmentType}</li>
              <li>Location: {job.location}</li>
              <li>Pay: {job.salary}</li>
              <li>Vacancies: {job.vacancies}</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Qualifications</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Education: {job.education}</li>
              <li>Experience: {job.experience}</li>
              <li>Language: {job.language}</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              {job.responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-2">Benefits</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              {job.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>

          {/* Right: Application Form */}
          <div className="w-full md:w-1/2 p-6 mt-8">
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
      ))}
    </div>
  );
};

export default JobListings;
