import React from "react";

const CustomerServiceMail = () => {
  return (
    <div className="w-full mx-auto">
      {/* form starts here */}
      <h1 className="text-2xl font-extrabold font-serif drop-shadow-md text-center mt-8 mb-4">
        WE ARE HIRING!
      </h1>

      {/* Job section */}
      <div className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8">
        {/* Left Section: Job Description */}
        <div className="md:w-1/2 p-4 px-12">
          <h2 className="text-2xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
            Customer Service Clerks Supervisor
          </h2>
          <p className="text-gray-600 mb-2">Triple Three Trading Ltd.</p>
          <p className="text-gray-600 mb-2">Calgary, AB T2G 1V3</p>

          <h3 className="text-lg font-semibold mb-2">Job Details</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Pay: $36 an hour</li>
            <li>Job type: Part-time, Permanent, Full-time</li>
            <li>Shift and schedule: Overtime</li>
            <li>Location: Calgary, AB T2G 1V3</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Full Job Description</h3>
          <p className="text-sm text-gray-600 mb-2">Education: College/CEGEP</p>
          <p className="text-sm text-gray-600 mb-4">
            Experience: 1 year to less than 2 years
          </p>

          <h4 className="text-md font-medium mb-2">Tasks</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Identify workers' training needs</li>
            <li>Prepare and submit reports</li>
            <li>
              Resolve work problems, provide technical advice and recommend
              measures to improve productivity and product quality
            </li>
            <li>
              Train staff/workers in job duties, safety procedures and company
              policies
            </li>
            <li>Perform same duties as workers supervised</li>
            <li>Co-ordinate, assign and review work</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Supervision</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Customer service clerk</li>
          </ul>

          <h4 className="text-md font-medium mb-2">
            Computer and Technology Knowledge
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>MS Office</li>
          </ul>

          <h4 className="text-md font-medium mb-2">
            Work Conditions and Physical Capabilities
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Attention to detail</li>
            <li>Fast-paced environment</li>
            <li>Large workload</li>
            <li>Overtime required</li>
            <li>Tight deadlines</li>
            <li>Work under pressure</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Personal Suitability</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Accurate</li>
            <li>Client focus</li>
            <li>Dependability</li>
            <li>Efficient interpersonal skills</li>
            <li>Excellent oral communication</li>
            <li>Excellent written communication</li>
            <li>Initiative</li>
            <li>Interpersonal awareness</li>
            <li>Judgement</li>
            <li>Organized</li>
            <li>Reliability</li>
            <li>Team player</li>
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
  );
};

export default CustomerServiceMail;
