import React from "react";
import img from "../../assets/Image/jobs.png";

const ResourceSection = () => {
  return (
    <div className="relative top-[3.5em] px-4 md:px-16">
      <h1 className="text-[2em] md:text-[2.5em] text-center md:text-left">
        OUR RESOURCES
      </h1>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-[40%]">
          <p className="mt-7 mb-3 text-center md:text-left">WHITEPAPERS</p>
          <span className="text-neutral-500 block text-center md:text-left">
            Access our comprehensive whitepapers covering a range of topics
            crucial to your recruitment success. From in-depth market analyses
            to actionable strategies for attracting top talent, our whitepapers
            provide valuable insights to inform your hiring decisions
          </span>

          <p className="mt-7 mb-3 text-center md:text-left">WEBINARS</p>
          <span className="text-neutral-500 block text-center md:text-left">
            Join our engaging webinars led by industry thought leaders and
            experienced recruiters. Gain valuable knowledge on the latest
            recruitment techniques, emerging trends in the job market, and best
            practices for optimizing your hiring processes.{" "}
          </span>

          <p className="mt-7 mb-3 text-center md:text-left">CASE STUDIES</p>
          <span className="text-neutral-500 block text-center md:text-left">
            Explore our case studies showcasing successful recruitment
            partnerships between Office Based Jobs and businesses like yours.
            Learn how our tailored solutions have helped companies overcome
            hiring challenges and achieve their goals.
          </span>
        </div>
        <div className="w-full md:w-[60%] mt-8 md:mt-0 flex justify-center md:justify-end">
          <img
            className="max-w-[80%] h-auto p-4"
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ResourceSection;
