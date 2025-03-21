import React from "react";

const OfficeAssistantPartTime = () => {
  return (
    <div className="w-full mx-auto">
      {/* form starts here */}
      <h1 className="text-2xl  font-extrabold font-serif drop-shadow-md text-center mt-8 mb-4">
        WE ARE HIRING!
      </h1>

      {/* Office Assistant (Part-Time) */}
      <div className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8">
        {/* Left Section: Job Description */}
        <div className="md:w-1/2 p-4 px-12">
          <h2 className="text-2xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
            Office Assistant (Part-Time)
          </h2>
          <p className="text-gray-600 mb-2">TriSummit Utilities Inc.</p>
          <p className="text-gray-600 mb-2">Calgary, AB</p>

          <h3 className="text-lg font-semibold mb-2">Job Details</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Job type: Part-time</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Full Job Description</h3>
          <p className="text-sm text-gray-600 mb-4">
            TriSummit Utilities Inc. (TSU) is an energy company with natural gas distribution utilities and long-term contracted renewable power generation assets. TSU’s mission is to make communities a better place to live, by connecting them to the energy they want, when they need it, now and into the future. In an ever-changing world, our vision is to adapt, using our energy infrastructure to provide increasing value to our communities and investors. Our people take great pride in supporting and having a positive impact in the communities where we live and work. If you share our passion for these values and are eager to make a meaningful impact, we invite you to join our dedicated team.
          </p>

          <h4 className="text-md font-medium mb-2">What You Will Do:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Maintain receptionist duties and support employees and the Senior Office Administrator</li>
            <li>Welcome guests and visitors</li>
            <li>Process and distribute mail, couriers, and deliveries</li>
            <li>Handle catering requests</li>
            <li>Answer and redirect calls, respond to information requests</li>
            <li>Ensure office is stocked and fully operational</li>
            <li>Track facility issues and coordinate with maintenance</li>
            <li>Support specialized project initiatives</li>
            <li>Assist with employee events and functions</li>
            <li>Help complete expenses and other assigned office duties</li>
          </ul>

          <h4 className="text-md font-medium mb-2">What You Will Need to Succeed:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>1-2 years experience in an office or customer service role</li>
            <li>High school diploma and/or post-secondary education in administration</li>
            <li>Proficiency with Microsoft Office (Word, Excel, PowerPoint, SharePoint)</li>
            <li>Strong communication, interpersonal, and customer service skills</li>
            <li>Reliable, detail-oriented, and a strong team player</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Inclusive Workplace:</h4>
          <p className="text-sm text-gray-600 mb-4">
            TriSummit Utilities Inc. is committed to creating an inclusive workplace that celebrates the unique strengths, perspectives, and experiences of all employees. Applications are welcomed from candidates of all backgrounds.
          </p>

          <h4 className="text-md font-medium mb-2">Ready to Join Us?</h4>
          <p className="text-sm text-gray-600 mb-4">
            Submit your resume and cover letter to the Human Resources Department. We look forward to your application!
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
  );
};

export default OfficeAssistantPartTime;
