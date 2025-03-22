import React from "react";

const AiAccountingCoordinator = () => {
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
            Accounting Coordinator
          </h2>
          <p className="text-gray-600 mb-2">Company: Alpine Infotech</p>
          <p className="text-gray-600 mb-2">
            10030 106 St Westlock Alberta T7P 2K4
          </p>

          <h3 className="text-lg font-semibold mb-2">Job Details</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Pay: $34–$36 an hour</li>
            <li>Job type: Fixed term contract, Full-time</li>
            <li>Location: 10030 106 St Westlock Alberta T7P 2K4</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Full Job Description</h3>
          <p className="text-sm text-gray-600 mb-2">
            Job Title: Accounting Coordinator<br />
            Location: Calgary, AB<br />
            Employment Type: Full-Time, 6-Month Contract
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Are you looking to make a lasting impact in the waste management industry?
          </p>
          <p className="text-sm text-gray-600 mb-2">
            At Mission Environmental Services Group, we’ve been dedicated to investing in and improving locally owned waste companies across Western Canada and the United States. We are more than just a business—we are trusted partners who help preserve the legacies of the companies we work with, ensuring their staff, customers, and values are taken care of as they transition into the next phase of growth.
          </p>
          <p className="text-sm text-gray-600 mb-2">
            If you’re passionate about contributing to the growth of sustainable businesses and making a real difference, we want you to join our team!
          </p>

          <h4 className="text-md font-medium mb-2">Why Join Us?</h4>
          <p className="text-sm text-gray-600 mb-2">
            Competitive Compensation: Starting rate at $34.00-$36.00/hour (negotiable based on experience)
          </p>

          <h4 className="text-md font-medium mb-2">Position Overview:</h4>
          <p className="text-sm text-gray-600 mb-2">
            Reporting to the Group Controller and working under the direction of the Group Finance team, the Accounting Coordinator is responsible for leading the daily accounting processes of the business, ensuring reliable and timely financial reporting. The position is responsible for establishing processes in the coordination of accounts payable and receivable, reconciling cash and credit card accounts, and conducting an initial review of the completeness and accuracy of month-end transactions. This position requires strong organizational skills, a high level of accuracy, the ability to work within deadlines, and the ability to take ownership of the accounting activities performed by the business.
          </p>

          <h4 className="text-md font-medium mb-2">Key Responsibilities:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Perform accounting duties, including bank deposits, bank reconciliations, credit card reconciliations, weekly accounts payable, accounts receivable, and establishing and maintaining processes to enable a timely monthly financial statement close.</li>
            <li>Manage the accounting email inbox, responding to queries and capturing invoices.</li>
            <li>Ensure customer payments are allocated to the correct accounts on a timely basis.</li>
            <li>Collect and reconcile credit card support.</li>
            <li>Manage and execute remote cheque deposits, as well as processing Electronic Fund Transfers (EFT) and Pre-Authorized Debit orders (PAD).</li>
            <li>Prepare a weekly payables listing for the Controller to review and approve, then create payments on the banking platform for the Controller to submit.</li>
            <li>In collaboration with the Office Administrator, reconcile invoicing and billing by reviewing all invoice batches to ensure they were sent and match the sales journal.</li>
            <li>Report to the Controller and be a trusted partner, providing support with ad hoc tasks as needed.</li>
            <li>These responsibilities will apply to two companies: one operational company (80% workload) and one management company (20% workload).</li>
            <li>Other duties as assigned.</li>
          </ul>

          <h4 className="text-md font-medium mb-2">Qualifications and Skills:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Proven work experience as a bookkeeper, accounting coordinator, or staff accountant.</li>
            <li>Minimum 2-year diploma with a second-year accounting designation.</li>
            <li>Demonstrates initiative and works proactively to resolve issues.</li>
            <li>Ability to prioritize tasks, meet deadlines, and streamline processes.</li>
            <li>Experience with QuickBooks Online and Microsoft Excel.</li>
            <li>Knowledge of CRA regulations, Labour Standards, WCB, and GST rules.</li>
            <li>Exceptional attention to detail and a high level of accuracy.</li>
            <li>Strong organizational skills with effective communication and interpersonal abilities.</li>
            <li>Familiarity with programs such as Scotia Connect and Navusoft is considered an asset.</li>
            <li>Experience in the waste management or related industry is an asset.</li>
          </ul>

          <p className="text-sm text-gray-600 mb-2">
            At MissionESG, we are an inclusive and diverse team with an entrepreneurial spirit. Accountability, Safety, and Care are fundamental to our culture and our operations. As an equal opportunity employer, we encourage all qualified applicants to apply, to help us build a diverse workforce that reflects the communities where we live and work.
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Must be legally authorized to work in Canada. MissionESG is unable to assist candidates in obtaining Canadian work authorization.
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

export default AiAccountingCoordinator;
