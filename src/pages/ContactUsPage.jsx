import React from "react";
import ContactPageImg from "../assets/Image/AboutUs.jpg";
import ContactPagebgImg from "../assets/Image/ContactUs.jpg";
import { 
  Box, 
  Grid, 
  Typography, 
  Button, 
  Container,
  Paper
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const ContactUsPage = () => {
  
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      
      {/* Contact Section */}
      <Box sx={{ width: "100%", color: "white", py: 2, position: "relative" }}>
        <div className="w-full mx-auto">
          <div className="grid bg-blue-800 grid-cols-2 py-8 px-4 gap-4">
            <div className="flex items-center justify-center">
              <img
                src={ContactPageImg}
                alt="Office jobs illustration"
                className="h-80"
              />
            </div>
            <div className="p-4 gap-8 text-white flex flex-col justify-center items-center">
              <h1 className="text-4xl font-extrabold font-serif">CONTACT US</h1>
              <p className="font-normal text-center">
                At Office Based Jobs, we're here to assist you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </Box>

      {/* Services Section */}
      <Box sx={{ width: "100%", bgcolor: "white", py: 8 }}>
        <Container>
          <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center", mb: 6 }}>
            Services for Businesses
          </Typography>
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={8}>
              <Box sx={{ textAlign: "left", pl: { md: 6 } }}>
                {[
                  "EMPLOYEE ONBOARDING",
                  "HR COMPLIANCE",
                  "EMPLOYEE TRAINING",
                ].map((title, index) => (
                  <Box key={index} sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                      {title}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: "1.125rem", lineHeight: 1.6 }}>
                      {title === "EMPLOYEE ONBOARDING"
                        ? "We offer comprehensive onboarding services that help your new hires feel welcome and prepared for their new roles. From paperwork to orientation, we've got you covered."
                        : title === "HR COMPLIANCE"
                        ? "We stay up-to-date on the latest HR regulations and make sure your business stays compliant. We offer HR audits, policy development, and more."
                        : "We provide customized training programmes for your employees, from soft skills to technical skills. Investing in your employees helps your business grow."}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Modal Section */}
      <Box
        sx={{
          backgroundImage: `url(${ContactPagebgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h3" fontWeight="bold" p="10px" color="Blue" gutterBottom>
            Contact Us
          </Typography>
          <Paper elevation={3} sx={{ p: 4, maxWidth: "600px", height: "430px", textAlign: "center" }}>
            <Typography variant="subtitle1" fontWeight="bold" fontSize="1.2rem" p="10px" gutterBottom>
              BETTER YET, SEE US IN PERSON!
            </Typography>
            <Typography variant="body2" fontSize="1rem" color="text.secondary" p="10px" gutterBottom>
              We love our customers, so feel free to visit during normal business hours.
            </Typography>
            <Typography variant="subtitle2" fontSize="1rem" fontWeight="bold" p="10px" mt={2}>
              OFFICE BASED JOBS
            </Typography>
            <Typography variant="subtitle2" fontSize="1rem" fontWeight="bold" p="20px" mt={1}>
              HOURS
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                mt: 1,
              }}
            >
              Open today 09:00 a.m. – 05:00 p.m.
              <ExpandMoreIcon fontSize="small" sx={{ ml: 1 }} />
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 3 }}>
              DROP US A LINE!
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactUsPage;
