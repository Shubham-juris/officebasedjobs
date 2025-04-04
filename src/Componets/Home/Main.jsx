import React from "react";
import { Box, Typography } from "@mui/material";
import jobsImage from "../../assets/Image/jobs.png"; // Imported image
import officeman from "../../assets/Image/officeman.png";
import { FileSearch, Lightbulb, MessageSquareText } from "lucide-react";

const Main = () => {
  return (
    <>
      {/* section-1 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          height: { xs: "auto", md: "600px" },
          overflow: "hidden",
        }}
      >
        {/* Left Section: Text on Blue Background */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "1 1 50%" },
            backgroundColor: "#1976d2",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: { xs: 3, md: 6 },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", md: "3rem" } }}
          >
            Unlock Your Office Potential
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.5rem" },
            }}
          >
            FIND YOUR DREAM JOB WITH OFFICE BASED JOBS
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              fontSize: { xs: "0.9rem", md: "1.1rem" },
              lineHeight: 1.6,
            }}
          >
            At Office Based Jobs, we specialize in connecting job seekers with a
            wide range of office-based positions across various industries.
            Whether you’re an administrative professional, a marketing guru, a
            finance expert, or an IT wizard, we have opportunities tailored to
            your skills and aspirations.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "0.9rem", md: "1.1rem" }, lineHeight: 1.6 }}
          >
            From entry-level positions to senior roles, our platform features a
            diverse selection of office jobs to suit every career path. Whether
            you prefer a fast-paced startup environment or a corporate
            setting...
          </Typography>
        </Box>

        {/* Right Section: Image */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "1 1 50%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: { xs: "300px", md: "100%" },
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={jobsImage}
            alt="Office workers collaborating"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
      {/* section-2 */}
      <div className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={officeman}
            alt="Business Man"
            className="h-[300px] md:h-[600px] object-cover"
          />
        </div>

        {/* Right Section - Text Content */}
        <div className="w-full flex flex-col items-start justify-between gap-6 md:w-1/2 text-center md:text-left md:mt-0 px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-gray-900">
            Discover Top Talent for <br /> Your Business Needs
          </h2>
          <p className="text-gray-600 mt-4 font-sans w-full md:w-3/4">
            At Office Based Jobs, we understand that the success of any business
            relies on its people. That’s why we’re dedicated to helping
            companies like yours find the perfect candidates to drive growth and
            innovation. With our extensive network and personalized approach to
            recruitment, we connect you with professionals.
          </p>

          {/* Button */}
          <button className="mt-6 px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all my-4 mx-auto md:mx-0">
            CONTACT TALENTS
          </button>
        </div>
      </div>
      {/* section 3 */}
      <div className="bg-blue-600 w-full flex flex-col items-center justify-between py-16">
        <h1 className="text-white font-bold text-2xl md:text-4xl font-serif py-12">
          Job Seekers Services
        </h1>

        <div className="grid w-5/6 container grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {/* 1st col */}
          <div className="p-4 py-2 text-white text-center flex flex-col gap-4 md:gap-8 items-center justify-start">
            <h1 className="font-bold font-serif text-xl md:text-2xl">
              Tailored Guidance
            </h1>
            {/* icon */}
            <FileSearch size={60} mdSize={80} />

            <p className="w-full md:w-4/5 text-sm md:text-md">
              We start by understanding your company's unique needs and culture
              through strategic consultation. Our team works closely with you to
              develop a tailored recruitment strategy that aligns with your
              goals and objectives.
            </p>
          </div>
          {/* 2nd col */}
          <div className="p-4 py-2 text-white text-center flex flex-col gap-4 md:gap-8 items-center justify-start">
            <h1 className="font-bold font-serif text-xl md:text-2xl">
              Innovative Recruitment
            </h1>
            {/* icon */}
            <Lightbulb size={60} mdSize={80} />

            <p className="w-full md:w-4/5 text-sm md:text-md">
              Using innovative recruitment methods and technology, we identify
              and attract top talent in your industry. From targeted sourcing to
              advanced screening techniques, we ensure that only the best
              candidates are presented to you.
            </p>
          </div>
          {/* 3rd col */}
          <div className="p-4 py-2 text-white text-center flex flex-col gap-4 md:gap-8 items-center justify-start">
            <h1 className="font-bold font-serif text-xl md:text-2xl">
              Transparent Communication
            </h1>
            {/* icon */}
            <MessageSquareText size={60} mdSize={80} />

            <p className="w-full md:w-4/5 text-sm md:text-md">
              We believe in transparent communication throughout the entire
              recruitment process. You'll receive regular updates and feedback,
              keeping you informed and involved at every stage.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
