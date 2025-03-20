import React from "react";
import image from "../../assets/Image/jobs.png";
const Header = () => {
  return (
    <>
      <div className="w-full  mx-auto">
        <div className="grid  bg-blue-800 grid-cols-2 grid-rows-1 py-8 px-4  gap-4">
          <div className="flex items-center justify-center">
            <img src={image} alt="image" className="h-80" />
          </div>
          <div className="p-4 gap-8 text-white flex flex-col  justify-center items-center">
            <h1 className="text-4xl font-extrabold  font-serif">
              Elevate Your Career
            </h1>
            <p className="font-normal ">
              Expand your career Possibilities with office Based Jobs
            </p>
          </div>
        </div>
        <div className=" w-full  flex justify-center items-center py-8  mt-6 p-4">
          <p className="font-serif font-extrabold   text-3xl ">
            Discover Office jobs Tailored just for you with us.
          </p>
        </div>
        <div className="grid   grid-cols-2 grid-rows-1 py-8 px-4  gap-4">
          <div className="p-4 gap-12 text-black flex flex-col  justify-between items-start">
            <h1 className="text-base tracking-widest font-extrabold  font-serif">
              Unlock the full potential of your team with office based jobs!
            </h1>
            <p className="font-light text-lg ">
              At Office Based Jobs, we believe that every business has the
              potential to achieve great things with the right team in place.
              That's why we offer a range of services to help you attract,
              develop, and retain top talent. Whether you're seeking your next
              challenge or looking to take the next step in your career, we
              offer a range of services tailored to meet your needs.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <img src={image} alt="image" className="h-80" />
          </div>
        </div>

        {/* form starts here */}
        <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-4xl">
          {/* Left Section: Job Description */}
          <div className="md:w-1/2 p-6 border-r border-gray-200">
            <h1 className="text-4xl font-bold text-center mb-4">
              WE ARE HIRING
            </h1>
            <h2 className="text-3xl font-semibold text-blue-600">
              Receptionist
            </h2>
            <p className="text-gray-500 mb-4">Greekology</p>

            <p className="text-sm text-gray-600 mb-2">
              <strong>Date posting:</strong> 2024-03-06
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Date Expiry:</strong> 2024-08-22
            </p>

            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>5211 50 Street Drayton Valley, AB T7A 1C4</li>
              <li>Salary: 22.50 hourly / 40 hours per Week</li>
              <li>Terms of employment: Permanent employment/Full time</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Languages</h3>
            <p className="text-sm text-gray-600 mb-4">English</p>

            <h3 className="text-lg font-semibold mb-2">Education</h3>
            <p className="text-sm text-gray-600 mb-4">
              Secondary (high) school graduation certificate
            </p>

            <h3 className="text-lg font-semibold mb-2">Experience</h3>
            <p className="text-sm text-gray-600 mb-4">
              1 to less than 7 months
            </p>

            <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
            <h4 className="text-md font-medium mb-2">Tasks</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Greet people and direct them to contacts or service areas</li>
              <li>Provide basic information to clients and the public</li>
            </ul>
          </div>

          {/* Right Section: Application Form */}
          <div className="md:w-full  p-6">
            <div className="flex justify-end mb-4">
              <button className="text-blue-600 font-semibold">APPLY NOW</button>
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
    </>
  );
};

export default Header;
