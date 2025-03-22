import React from "react";

const EdReceptionistConcierge = () => {
  return (
    <div className="w-full mx-auto">
      {/* form starts here */}
      <h1 className="text-2xl font-extrabold font-serif drop-shadow-md text-center mt-8 mb-4">
        WE ARE HIRING!
      </h1>

      {/* receptionist/concierge */}
      <div className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8">
        {/* Left Section: Job Description */}
        <div className="md:w-1/2 p-4 px-12">
          <h2 className="text-2xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
            Receptionist/Concierge
          </h2>
          <p className="text-gray-600 mb-2">Chartwell</p>
          <p className="text-gray-600 mb-2">
            6101 Eton Boulevard, Sherwood Park, AB
          </p>

          <h3 className="text-lg font-semibold mb-2">Job Details</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Job type: Part-time</li>
            <li>Location: 6101 Eton Boulevard, Sherwood Park, AB</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Full Job Description</h3>
          <p className="text-sm text-gray-600 mb-4">
            As a Receptionist/Concierge you will perform a variety of accounting
            functions as well as confidential clerical and receptionist duties
            associated with the daily operations at the residence, while
            consistently maintaining a safe and secure environment. As an
            employee of Chartwell, you can enjoy growing your career and be a
            part of a dedicated team that positively impacts the lives of the
            residents.
            <br />
            <br />
            What You Will Do:
            <br />
            <br />· Maintain department files, including correspondence, forms
            and routine office records and reports.
            <br />· Receive incoming mail, co-ordinate distribution and process
            outgoing mail.
            <br />· Answer telephone and greets visitors to respond to routine
            inquiries in person and by phone and relay the messages to the
            appropriate personnel.
            <br />· Process daily bank deposits, accounts payable and accounts
            receivable including verification of totals and coding.
            <br />· Respond to resident or family member concern and ensure
            appropriate action is taken within decision-making authority and/or
            bring to the attention of the General Manager.
            <br />· Perform other related duties as required.
            <br />
            <br />
            What You Will Need:
            <br />
            <br />· Secondary school education or equivalent
            <br />· Previous experience working in a similar position (including
            a working knowledge of office procedures and elementary
            bookkeeping)
            <br />· Computer skills with a working knowledge of Word and Excel
            <br />
            <br />
            At Chartwell, we’re all about Making People’s Lives BETTER: the
            lives of our residents and their families, and the lives of our
            employees. Join an exceptional group of diverse, inspiring, and
            caring people who are empowered to provide personalized, human
            experiences for our residents and staff through the connections
            they make every day within our communities. Chartwell’s commitment
            to diversity and inclusivity is a commitment to hiring people whose
            skills and abilities contribute the most to the success of the
            organization and who reflect the communities in which we live and
            work. We are an equal opportunity employer and welcome applications
            from a wide range of qualified candidates, including people with
            disabilities. If you have questions or require assistance with the
            application process, please email accessibility@chartwell.com or
            call 1-888-663-6448. We thank all applicants for their interest,
            however, only those selected for further consideration will be
            contacted.
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

export default EdReceptionistConcierge;
