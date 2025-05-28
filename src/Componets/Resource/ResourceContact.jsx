import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ResourceContact = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // TODO: Submit to your backend or email API
  //   console.log("Form submitted:", formData);
  // };

  const [showHours, setShowHours] = useState(false);

  const hours = {
    Monday: "09:00 a.m. – 05:00 p.m.",
    Tuesday: "09:00 a.m. – 05:00 p.m.",
    Wednesday: "09:00 a.m. – 05:00 p.m.",
    Thursday: "09:00 a.m. – 05:00 p.m.",
    Friday: "09:00 a.m. – 05:00 p.m.",
    Saturday: "Closed",
    Sunday: "Closed",
  };

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <section className="w-full px-4 py-16 bg-white text-center">
      <h2 className="py-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">
        Contact Us
      </h2>
      {/* Office Info Section */}
      <div className="mt-10 text-center">
        <h3 className="uppercase tracking-wide text-sm font-semibold text-gray-700 py-3 sm:text-base md:text-lg">
          Better yet, see us in person!
        </h3>
        <p className="text-gray-600 py-3 text-sm sm:text-base md:text-lg">
          We love our customers, so feel free to visit during normal business
          hours.
        </p>

        {/* <div className="py-3">
          <p className="uppercase font-semibold text-sm text-gray-800 py-3 sm:text-base md:text-lg">
            Office Based Jobs
          </p>
          <a
            href="mailto:monashah44271@gmail.com"
            className="text-blue-600 underline text-sm sm:text-base md:text-lg"
          >
            monashah44271@gmail.com
          </a>
        </div> */}

        {/* <div className="mt-8">
          <p className="uppercase text-sm text-gray-800 font-semibold py-3 sm:text-base md:text-lg">
            Hours
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center text-gray-600 cursor-pointer"
            onClick={() => setShowHours(!showHours)}
          >
            <p className="mr-0 sm:mr-2 text-sm sm:text-base md:text-lg">
              Open today{" "}
              <span className="text-blue-700 font-medium">{hours[today]}</span>
            </p>
            {showHours ? (
              <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600 mt-2 sm:mt-0" />
            ) : (
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600 mt-2 sm:mt-0" />
            )}
          </div>

          {showHours && (
            <ul className="text-sm text-gray-700 mt-3 space-y-1 text-center sm:text-base md:text-lg">
              {Object.entries(hours).map(([day, time]) => (
                <li key={day}>
                  {day}:{" "}
                  <span
                    className={`font-medium ${
                      day === today ? "text-blue-700" : "text-gray-800"
                    }`}
                  >
                    {time}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div> */}
      </div>
    </section>
  );
};

export default ResourceContact;
