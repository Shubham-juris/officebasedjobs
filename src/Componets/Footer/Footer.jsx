import React from 'react';
import { Box, Typography, IconButton, Link, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        bottom: 0,
        width: '100%',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)',
        padding: { xs: 3, md: 6 },
        color: '#424242',
        borderTop: '1px solid #e0e0e0',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: { xs: 4, md: 2 },
        }}
      >
        {/* Company Info Section */}
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 30%' } }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 700, color: '#1976d2', mb: 2 }}
          >
            Office Based Jobs
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: '#757575' }}>
            Connecting job seekers with the best office-based opportunities
            across industries. Your career starts here!
          </Typography>
          <Typography variant="body2" sx={{ color: '#757575' }}>
            © {new Date().getFullYear()} Office Based Jobs. All rights reserved.
          </Typography>
        </Box>

        {/* Links Section */}
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 20%' } }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 700, color: '#1976d2', mb: 2 }}
          >
            Quick Links
          </Typography>
          <Box>
            {['Home', 'About', 'Job Seekers', 'Employers'].map((link) => (
              <Typography
                key={link}
                variant="body2"
                component={Link}
                href={`#${link.toLowerCase()}`}
                sx={{
                  display: 'block',
                  mb: 1,
                  color: '#424242',
                  textDecoration: 'none',
                  '&:hover': { color: '#1976d2', transition: 'color 0.3s' },
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Contact Section */}
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 20%' } }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 700, color: '#1976d2', mb: 2 }}
          >
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, color: '#757575' }}>
            Email: info@officebasedjobs.com
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, color: '#757575' }}>
            Phone: +1-800-123-4567
          </Typography>
          <Typography variant="body2" sx={{ color: '#757575' }}>
            Hours: Mon-Fri, 9:00 AM - 5:00 PM
          </Typography>
        </Box>

        {/* Social Media Section */}
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 20%' }, textAlign: 'center' }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 700, color: '#1976d2', mb: 2 }}
          >
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton
              color="inherit"
              href="https://facebook.com"
              target="_blank"
              sx={{
                color: '#3b5998',
                '&:hover': { color: '#1976d2', transform: 'scale(1.2)' },
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://twitter.com"
              target="_blank"
              sx={{
                color: '#00acee',
                '&:hover': { color: '#1976d2', transform: 'scale(1.2)' },
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://linkedin.com"
              target="_blank"
              sx={{
                color: '#0072b1',
                '&:hover': { color: '#1976d2', transform: 'scale(1.2)' },
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://instagram.com"
              target="_blank"
              sx={{
                color: '#e1306c',
                '&:hover': { color: '#1976d2', transform: 'scale(1.2)' },
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Divider */}
      <Divider sx={{ my: 4, borderColor: '#e0e0e0' }} />

      {/* Footer Bottom */}
      <Box
        sx={{
          textAlign: 'center',
          color: '#757575',
          fontSize: '0.875rem',
        }}
      >
        <Typography variant="body2">
          Powered by Office Based Jobs | Terms of Service | Privacy Policy
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;