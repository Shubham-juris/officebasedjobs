import React from "react";

const SoftwareDeveloper = () => {
  return (
    <div className="w-full mx-auto">
      {/* form starts here */}
      <h1 className="text-2xl font-extrabold font-serif drop-shadow-md text-center mt-8 mb-4">
        WE ARE HIRING!
      </h1>

      <div className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8">
        {/* Left Section: Job Description */}
        <div className="md:w-1/2 p-4 px-12">
        
          <h2 className="text-2xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
            Student - Software Developer (Co-op)
          </h2>
          <p className="text-gray-600 mb-2">WestJet</p>
          <p className="text-gray-600 mb-2">Calgary, AB || Hybrid work</p>

          <h3 className="text-lg font-semibold mb-2">Job Details</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Job type: Internship / Co-op</li>
            <li>Location: Calgary, AB</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Full Job Description</h3>
          <p className="text-sm text-gray-600 mb-2">
            Please note: This is a hybrid work position in Calgary Alberta and requires in-person collaboration at the WestJet Campus (22 Aerial Place NE). This hybrid work plan allows for critically important learning, collaboration and networking with our colleagues. Specific days in the office are agreed upon by the team.
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Every WestJet journey has the potential to enrich lives; a career with us is no exception.
          </p>
          <p className="text-sm text-gray-600 mb-2">
            WestJet arrived on the Canadian airline scene in 1996 and changed the industry for the better. We made air travel more affordable for Canadians and now we're going global.
          </p>
          <p className="text-sm text-gray-600 mb-2">Join us, this is where your career story takes off.</p>

          <h4 className="text-md font-medium mb-2">Overview of the role</h4>
          <p className="text-sm text-gray-600 mb-2">
            Focused on emerging technology and leveraging WestJet’s extensive network, flight schedule and remarkable guest experience; we have one of the most respected corporate cultures, uniquely spirited with our dedication to community involvement and environmental leadership.
          </p>
          <p className="text-sm text-gray-600 mb-2">
            The student information technology developer will engage in an exciting relationship with an appointed mentor and work with the greater team creating high quality software solutions. Specific areas of learning will cover application of industry standard processes, practices, and techniques to develop web-based applications and APIs.
          </p>
          <p className="text-sm text-gray-600 mb-2">
            The potential of enhancing existing software systems to ensure ongoing usability, performance and maintainability is endless.
          </p>
          <p className="text-sm text-gray-600 mb-2">
            This role can start June 1st or September 1st with an end date of August 30, 2026.
          </p>

          <h4 className="text-md font-medium mb-2">Key Deliverables</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Understanding WestJet’s product features and environments</li>
            <li>Exposure to design, development methodologies, coding standards</li>
            <li>Participation in workshops and training</li>
            <li>Define and prepare design specifications</li>
            <li>Code reviews, task pairing and demos</li>
            <li>Write automated unit and integration tests</li>
            <li>Work with operational partners</li>
            <li>Document system components</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Education & Business Acumen</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Enrolled in a relevant university program or recent graduate</li>
            <li>Excellent communication, planning and organizational skills</li>
            <li>Analytical and effective problem-solving abilities</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Technical Skills</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>JavaScript, Node.js</li>
            <li>Java, SpringBoot</li>
            <li>REST APIs, GraphQL, JSON, XML</li>
            <li>Neo4J, Azure Cosmos DB</li>
            <li>Gradle, npm</li>
            <li>GIT, Docker, Kubernetes, Azure</li>
            <li>Splunk, Azure App Insights</li>
            <li>Cucumber, Hapi Code, Junit</li>
            <li>Azure DevOps, JIRA</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Fun</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Engaging, inclusive mindset and effective communication</li>
            <li>Critical thinking and creative solutions</li>
            <li>Fun, friendly, and guest-centric approach</li>
          </ul>

          <h4 className="text-md font-medium mb-2">The benefits of being a WestJetter</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Fun and friendly culture</li>
            <li>Travel privileges from your start date</li>
            <li>Flexible savings and benefits programs</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Our Commitment to Diversity and Inclusion</h4>
          <p className="text-sm text-gray-600 mb-2">
            WestJet is committed to creating an inclusive workplace that celebrates our differences by way of diversity, equity, and inclusion. We welcome unique skills, experiences, and backgrounds — if you’re passionate and excited about this role, we encourage you to apply even if you do not meet every single qualification.
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

export default SoftwareDeveloper;
