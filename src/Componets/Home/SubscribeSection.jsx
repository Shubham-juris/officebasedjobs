import React from "react";
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Container,
  InputAdornment,
  useMediaQuery
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

// Custom styled components
const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    color: "white",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: theme.shape.borderRadius,
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.3)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255, 255, 255, 0.7)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "white",
  },
  "& .MuiInputBase-input::placeholder": {
    color: "rgba(255, 255, 255, 0.7)",
    opacity: 1,
  },
}));

const SubscribeSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        // backgroundColor: theme.palette.primary.main,
        color: "white",
        py: 10,
        px: 2,
      }}
    >
      {/* <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              fontFamily: "serif",
              mb: 1,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            Subscribe
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              opacity: 0.9,
              fontSize: { xs: "0.875rem", md: "1rem" },
            }}
          >
            Sign up to hear from us about specials, sales, and events.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            maxWidth: "500px",
            mx: "auto"
          }}
        >
          <Box sx={{ width: isMobile ? "100%" : "70%" }}>
            <StyledTextField
              fullWidth
              placeholder="Email"
              variant="outlined"
              size={isMobile ? "medium" : "large"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon sx={{ color: "rgba(255, 255, 255, 0.7)" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          
          <Box sx={{ width: isMobile ? "100%" : "30%" }}>
            <Button
              variant="contained"
              fullWidth={isMobile}
              size="large"
              sx={{
                bgcolor: "white",
                color: theme.palette.primary.main,
                fontWeight: 700,
                borderRadius: "50px",
                px: 4,
                py: 1.5,
                fontFamily: "monospace",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.9)",
                },
                transition: "all 0.3s ease",
              }}
            >
              SIGN UP
            </Button>
          </Box>
        </Box>
      </Container> */}
    </Box>
  );
};

export default SubscribeSection;