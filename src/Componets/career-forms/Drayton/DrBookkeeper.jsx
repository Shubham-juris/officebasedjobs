import React from "react";

const DrBookkeeper = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-10 gap-8">
      {/* Left Section: Job Description */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold">Bookkeeper</h1>
        <p className="text-gray-600">
          <strong>Drayton Valley Daycare & OSC</strong> || Drayton Valley, AB T7A 1H3
        </p>
        <p><strong>Pay:</strong> $28.85 an hour</p>
        <p><strong>Job type:</strong> Part-time | Permanent | Full-time</p>
        <p><strong>Location:</strong> Drayton Valley, AB T7A 1H3</p>

        <h2 className="text-xl font-semibold mt-4">Full job description</h2>
        <p><strong>Education:</strong> Secondary (high) school graduation certificate</p>
        <p><strong>Experience:</strong> 1 year to less than 2 years</p>

        <h3 className="text-lg font-semibold mt-2">Tasks</h3>
        <ul className="list-disc list-inside">
          <li>Calculate and prepare cheques for payroll</li>
          <li>Keep financial records and establish, maintain and balance various accounts using manual and computerized bookkeeping systems</li>
          <li>Prepare tax returns</li>
          <li>Prepare trial balance of books</li>
          <li>Reconcile accounts</li>
        </ul>

        <h3 className="text-lg font-semibold mt-2">Work conditions and physical capabilities</h3>
        <ul className="list-disc list-inside">
          <li>Attention to detail</li>
          <li>Fast-paced environment</li>
          <li>Repetitive tasks</li>
          <li>Work under pressure</li>
        </ul>

        <h3 className="text-lg font-semibold mt-2">Screening questions</h3>
        <ul className="list-disc list-inside">
          <li>Are you currently legally able to work in Canada?</li>
          <li>Do you have previous experience in this field of employment?</li>
        </ul>

        <p><strong>Work Term:</strong> Permanent</p>
        <p><strong>Work Language:</strong> English</p>
        <p><strong>Hours:</strong> 30 hours per week</p>
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
  );
};

export default DrBookkeeper;
