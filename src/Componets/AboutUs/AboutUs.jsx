import { Box, Typography, Container } from "@mui/material";
import {
  Group as GroupIcon,
  Search as SearchIcon,
  Support as SupportIcon,
} from "@mui/icons-material";
import TopImg from "../../assets/Image/AboutUsMain.jpg";
import Img from "../../assets/Image/AboutUs.jpg";

const AboutUs = () => {
  return (
    <Box sx={{ py: 5 }}>
      {/* Hero Section */}
      {/* <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            backgroundColor: "#150AFF",
            color: "white",
            p: 5,
            borderRadius: "8px",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <img
              src={TopImg}
              alt="Office"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Box>
          <Box sx={{ flex: 1, textAlign: "left", px: 3 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              ABOUT US
            </Typography>
            <Typography variant="body1">
              At Office Based Jobs, we're more than just a recruitment agency;
              we're your strategic partner in talent acquisition. With years of
              industry expertise and a passion for connecting top talent with
              leading companies.
            </Typography>
          </Box>
        </Box> */}
      <div className="w-full mx-auto">
        <div className="grid bg-blue-800 grid-cols-2 py-8 px-4 gap-4">
          <div className="flex items-center justify-center">
            <img src={TopImg} alt="Office jobs illustration" className="h-80" />
          </div>
          <div className="p-4 gap-8 text-white flex flex-col justify-center items-center">
            <h1 className="text-4xl font-extrabold font-serif">ABOUT US</h1>
            <p className="font-normal text-center ">
              At Office Based Jobs, we're more than just a recruitment agency;
              we're your strategic partner in talent acquisition. With years of
              industry expertise and a passion for connecting top talent with
              leading companies.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
          mt: 5,
        }}
      >
        {/* Left Text Section */}
        <Box sx={{ flex: 1, px: 8 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            About Office Based Jobs
          </Typography>
          <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
            OUR MISSION
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, lineHeight: 1.6 }}>
            Our mission at Office Based Jobs is to empower individuals to
            achieve their career aspirations while assisting businesses in
            finding the perfect talent to drive growth and innovation.
          </Typography>

          <Typography variant="h6" fontWeight="bold" sx={{ mt: 3 }}>
            OUR VISION
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, lineHeight: 1.6 }}>
            Our vision is to become the leading provider of office-based
            recruitment solutions, recognized for our commitment to excellence,
            innovation, and integrity.
          </Typography>
        </Box>

        {/* Right Image Section */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={Img}
            alt="Office Team Working"
            style={{ width: "100%", maxWidth: "500px", borderRadius: "8px" }}
            loading="lazy"
          />
        </Box>
      </Box>

      {/* Our Services Section */}
      <Box
        sx={{
          backgroundColor: "#150AFF",
          color: "white",
          py: 5,
          mt: 5,
          borderRadius: "8px",
        }}
      >
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          OUR SERVICES
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-around",
            textAlign: "center",
            gap: 4,
            mt: 3,
          }}
        >
          {/* Service 1 */}
          <Box sx={{ maxWidth: 300 }}>
            <GroupIcon sx={{ fontSize: 80 }} />
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
              Talent Acquisition
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Leveraging cutting-edge recruitment techniques and a vast network
              of candidates, we help businesses find top talent across
              office-based roles.
            </Typography>
          </Box>

          {/* Service 2 */}
          <Box sx={{ maxWidth: 300 }}>
            <SearchIcon sx={{ fontSize: 80 }} />
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
              Candidate Screening
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Our rigorous screening process ensures that only the most
              qualified candidates are presented to our clients.
            </Typography>
          </Box>

          {/* Service 3 */}
          <Box sx={{ maxWidth: 300 }}>
            <SupportIcon sx={{ fontSize: 80 }} />
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
              Continuous Support
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Our commitment to excellence doesn’t end once a placement is made.
              We provide ongoing support to ensure long-term success.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
