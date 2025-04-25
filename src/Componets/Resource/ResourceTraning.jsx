import React from "react";
import { IoGlobeOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { FaComputer } from "react-icons/fa6";

function ResourceTraning() {
  return (
    <>
      <div className="flex flex-col justify-center mx-auto max-w-7xl">
        <p
          className="text-[2em] md:text-[3em] text-center mt-5"
          style={{ color: "blue" }}
        >
          <b>Training Resource</b>
        </p>

        <div
          className="flex flex-col md:flex-row items-center justify-around gap-[1em] mt-5"
          style={{ color: "blue" }}
        >
          <div className="text-center">
            <CiSettings className="text-[5em] lg:text-[7em] mx-auto" />
            <h1 className="text-stone-800 text-[1.5em] lg:text-[2em] font-bold">
              Recruitment Skills <br /> Workshops{" "}
            </h1>
            <p className="text-stone-800 mt-3 w-[90%] md:w-[15em] mx-auto">
              Host interactive workshops focused on honing essential recruitment
              skills such as sourcing, screening, and interviewing candidates.
              Offer hands-on exercises and role-playing scenarios to practice.{" "}
            </p>
          </div>
          <div className="text-center">
            <IoGlobeOutline className="text-[5em] lg:text-[7em] mx-auto" />
            <h1 className="text-stone-800 text-[1.5em] lg:text-[2em] font-bold">
              Online Learning
              <br />
              Modules
            </h1>
            <p className="text-stone-800 mt-3 w-[90%] md:w-[15em] mx-auto">
              Develop a series of online learning modules covering key topics in
              recruitment, accessible anytime and anywhere for convenience.
              Offer engaging multimedia content, including videos, quizzes, and
              resources.{" "}
            </p>
          </div>
          <div className="text-center">
            <FaComputer className="text-[5em] lg:text-[7em] mx-auto mb-2" />
            <h1 className="text-stone-800 text-[1.5em] lg:text-[2em] font-bold">
              Expert-Led <br /> Webinars{" "}
            </h1>
            <p className="text-stone-800 mt-3 w-[90%] md:w-[15em] mx-auto">
              Organize regular webinars featuring industry experts sharing
              insights and best practices in recruitment. Cover a range of
              relevant topics such as employer branding and candidate.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResourceTraning;
