import React from "react";

const DrAssistantManager = () => {
  return (
    <div className="w-full mx-auto">
      {/* form starts here */}
      <h1 className="text-2xl font-extrabold font-serif drop-shadow-md text-center mt-8 mb-4">
        WE ARE HIRING!
      </h1>

      {/* Assistant Manager */}
      <div className="bg-white container rounded-lg flex flex-col md:flex-row w-full mx-auto mb-8">
        {/* Left Section: Job Description */}
        <div className="md:w-1/2 p-4 px-12">
          <h2 className="text-2xl text-blue-600 drop-shadow-md font-serif font-extrabold mb-1">
            Assistant Manager (Part-time)
          </h2>
          <p className="text-gray-600 mb-2">Landmark Cinemas</p>
          <p className="text-gray-600 mb-2">5014 56 Ave, Drayton Valley, AB T7A 1L8</p>
          
          <h3 className="text-lg font-semibold mb-2">Job Details</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Job type: Part-time</li>
            <li>Location: 5014 56 Ave, Drayton Valley, AB T7A 1L8</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Full Job Description</h3>
          <div className="text-sm text-gray-600 space-y-4">
            <p>WHO WE ARE:</p>
            <p>
              At Landmark Cinemas, we are the Cast & Crew of Canada’s second largest motion picture, theatre exhibition company, and WE love movies as much as YOU love movies…. But it’s more than just a movie. That’s why our Cast & Crew are valuable and why we are always focused on creating an exceptional movie experience for our Guests; why the quality of our popcorn matters and why a perfect presentation is understood. Every detail is important to us, which is why we think like owners and remain steadfast in accomplishing our goals. It’s why we opened our first theatre in 1965, and why we’ll continue making the movie experience the best that it can be.
            </p>
            <p>
              People are at the core of our business - we are for ALL Movie Lovers and this means we embrace a culture of inclusion and mutual respect by valuing the uniqueness of all Cast & Crew, Guests, and business partners. We value respectful behavior above individual achievements, and we are committed to having our workforce reflect the communities we serve.
            </p>
            <p>
              We are proud to support Kids Help Phone. As a National Sponsor of Walk So Kids Can Talk, Landmark Cinemas is committed to supporting the mental health and well-being of young Movie Lovers, including our Cast & Crew.
            </p>

            <p>WHO YOU ARE:</p>
            <p>
              You are an all-star team motivator that has experience leading by example and directing the Cast and Crew in delivering the ultimate movie-going experience by radiating our Company Values and applying policies and procedures. You understand what it takes to provide exceptional Guest Service and are energized by communicating with others. In supporting the Theatre Management Team, you will demonstrate many accountabilities, and enjoy having fun and encouraging a work environment that maintains team focus and demonstrates results... and YOU love movies!
            </p>

            <p>THE JOB:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Manage daily operations of the theatre complex...</li>
              <li>Assist with the execution of operational policies and procedures...</li>
              <li>Assist with the selection, training & development...</li>
              <li>Assist with the administration and operation of all pertinent systems...</li>
              <li>Communicate on an ongoing basis with the management team...</li>
              <li>Communicate and respond to outside resources...</li>
              <li>Keep abreast of industry and facility related information...</li>
              <li>Assist with the monitoring of Guest satisfaction...</li>
              <li>Greet and engage Guests and make them feel special...</li>
              <li>Be available and visible to Cast and Guests...</li>
              <li>Provide consistent performance feedback...</li>
              <li>Work safely and ensure Cast members are made aware...</li>
            </ul>

            <p>THE PERKS:</p>
            <ul className="list-disc list-inside ml-4">
              <li>This position offers a $2 premium on the provincial minimum wage</li>
              <li>Stay in the know on the latest Hollywood blockbusters with FREE movies</li>
              <li>Discounted popcorn and concession snacks...need we say more?</li>
              <li>Flexible scheduling options that work with your busy life</li>
              <li>Work with your friends in an engaging environment</li>
              <li>Opportunities for advancement in theater management</li>
            </ul>

            <p>REQUIREMENTS</p>
            <ul className="list-disc list-inside ml-4">
              <li>Minimum 1 year experience motivating and managing a dynamic team...</li>
              <li>Proven track record in a leadership role...</li>
              <li>Commitment to excellence in Guest service...</li>
              <li>An individual who sets actionable goals...</li>
              <li>Proficiency with food production, revenue control...</li>
              <li>Prior experience with projection or audio-visual equipment...</li>
              <li>Excellent written, verbal, and listening communication skills...</li>
            </ul>

            <p>
              A subsidiary of Kinepolis Group NV, Belgium, Landmark is Canada’s second largest motion picture, theatre exhibition company...
            </p>
            <p>
              Landmark Cinemas welcomes applications from people with disabilities...
            </p>
          </div>
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
                placeholder="Email"
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

export default DrAssistantManager;
