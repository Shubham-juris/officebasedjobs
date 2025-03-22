import React from 'react';

const EdAccountsPayableClerk = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto p-6">
      {/* Left Section: Job Description */}
      <div className="w-full md:w-1/2 md:pr-6 mb-6 md:mb-0">
      
        <h2 className="text-2xl font-bold mb-4">Accounts Payable Clerk</h2>
        <p><strong>Company:</strong> Cornerstone Christian Church of God Edmonton</p>
        <p><strong>Location:</strong> Edmonton, AB T6B 3B6</p>
        <p><strong>Pay:</strong> $29.50 an hour</p>
        <p><strong>Job Type:</strong> Part-time, Permanent, Full-time</p>
        <p><strong>Benefits:</strong> Dental care, Extended health care</p>
        <br />
        <p><strong>Work Term:</strong> Permanent</p>
        <p><strong>Work Language:</strong> English</p>
        <p><strong>Hours:</strong> 30 hours per week</p>
        <p><strong>Education:</strong> College, CEGEP or other non-university certificate or diploma from a program of 1 year to 2 years</p>
        <p><strong>Experience:</strong> 2 years to less than 3 years</p>
        <p><strong>Work Setting:</strong> Associations and non profit organizations, Religious organization</p>
        <br />
        <p><strong>Tasks:</strong></p>
        <ul className="list-disc ml-6">
          <li>Manage accounts payable</li>
          <li>Open and close books for auditors</li>
          <li>Prepare bank reconciliations</li>
          <li>Review on the behaviour with regard to deposits and withdrawals, overdraws, defaults, dishonoured payments and spending patterns</li>
          <li>Invoice clients</li>
          <li>Collect payments from debtors</li>
          <li>Store, update and retrieve financial data</li>
          <li>Perform clerical duties, such as maintain filing and record systems</li>
          <li>Perform general office duties</li>
          <li>Address customers' complaints or concerns</li>
          <li>Organize and maintain inventory</li>
          <li>Prepare financial statements and reports</li>
          <li>Prepare reports</li>
          <li>Manage cash</li>
          <li>Send invoices</li>
          <li>Process money, cheques and credit/debit card payments</li>
          <li>Receive and issue payments</li>
        </ul>
        <br />
        <p><strong>Computer and Technology Knowledge:</strong> QuickBooks, MS Windows</p>
        <p><strong>Area of Specialization:</strong> Accounting</p>
        <p><strong>Transportation/Travel Information:</strong> Own transportation</p>
        <br />
        <p><strong>Personal Suitability:</strong> Accurate, Client focus, Excellent oral communication, Organized, Reliability, Team player</p>
        <br />
        <p><strong>Screening Questions:</strong></p>
        <ul className="list-disc ml-6">
          <li>Are you currently legally able to work in Canada?</li>
          <li>Do you currently reside in proximity to the advertised location?</li>
          <li>Do you have previous experience in this field of employment?</li>
        </ul>
        <br />
        <p><strong>Health Benefits:</strong> Dental plan, Health care plan</p>
        <p><strong>Support for Newcomers and Refugees:</strong> Does not require Canadian work experience</p>
        <p><strong>Support for Indigenous People:</strong> Offers mentorship, coaching and/or networking opportunities for Indigenous workers</p>
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

export default EdAccountsPayableClerk;
