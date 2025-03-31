import React from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ChatIcon from "@mui/icons-material/Chat";

const ContactUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        maxWidth: "1400px",
        margin: "0 auto",
        padding: { xs: 2, md: 4 },
        minHeight: "90vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      {/* Left Section: Contact Form */}
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "1 1 55%" },
          padding: { xs: 3, md: 5 },
          background: "linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%)",
          borderRadius: { xs: 0, md: "16px 0 0 16px" },
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.05)",
          transition: "transform 0.3s ease",
          "&:hover": { transform: "translateY(-5px)" },
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 800,
            color: "#1976d2",
            textTransform: "uppercase",
            letterSpacing: "1px",
            mb: 4,
            fontSize: { xs: "1.5rem", md: "2.5rem" },
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: "#424242",
            textTransform: "uppercase",
            mb: 4,
            fontSize: { xs: "1rem", md: "1.5rem" },
          }}
        >
          Drop Us A Line!
        </Typography>

        {/* Form Fields */}
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          sx={{ mb: 3, "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
        />
        <TextField
          fullWidth
          label="Email*"
          variant="outlined"
          sx={{ mb: 3, "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
        />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          sx={{ mb: 3, "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
        />

        {/* Attach Files and Send Button */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <IconButton color="primary" sx={{ mr: 1 }}>
            <AttachFileIcon />
          </IconButton>
          <Typography variant="body2" color="text.secondary">
            Attach Files (0)
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #1976d2, #42a5f5)",
            color: "#fff",
            textTransform: "uppercase",
            padding: "12px 40px",
            borderRadius: "50px",
            fontWeight: 700,
            boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
            "&:hover": {
              background: "linear-gradient(90deg, #1565c0, #2196f3)",
              boxShadow: "0 6px 16px rgba(25, 118, 210, 0.4)",
            },
          }}
        >
          Send Message
        </Button>

        {/* reCAPTCHA Text */}
        <Typography
          variant="caption"
          sx={{ mt: 2, display: "block", color: "#757575" }}
        >
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </Typography>
      </Box>

      {/* Right Section: Visit In Person */}
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "1 1 45%" },
          padding: { xs: 3, md: 5 },
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          transition: "transform 0.3s ease",
          "&:hover": { transform: "translateY(-5px)" },
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: "#424242",
            textTransform: "uppercase",
            mb: 3,
            fontSize: { xs: "1rem", md: "1.5rem" },
          }}
        >
          Better Yet, See Us In Person!
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 3, color: "#757575", fontSize: { xs: "0.9rem", md: "1rem" } }}
        >
          We love our customers, so feel free to visit during normal business
          hours.
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: "#424242",
            mb: 1,
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          Office Based Jobs
        </Typography>
        <Typography
          variant="body2"
          sx={{ mb: 2, color: "#757575", fontSize: { xs: "0.8rem", md: "1rem" } }}
        >
          Hours
        </Typography>
        <Typography
          variant="body1"
          color="primary"
          sx={{
            fontWeight: 500,
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          Open today 09:00 a.m. - 05:00 p.m. ▼
        </Typography>
        <IconButton
          color="primary"
          sx={{
            mt: 4,
            backgroundColor: "#1976d2",
            color: "#fff",
            "&:hover": { backgroundColor: "#1565c0" },
          }}
        >
          <ChatIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ContactUs;
