import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FC = () => {
  return (
    <>
      <Divider sx={{ width: "100%", height: 4 }} />
      <Box
        sx={{
          bgcolor: "#f9fafb",
          py: 6,
          px: 8,
        }}
      >
        <Container maxWidth={false} disableGutters>
          <Grid container spacing={4}>
            {/* Brand Logo and Slogan */}
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <img
                  src="/path/to/logo.png"
                  alt="Brand Logo"
                  style={{ width: "150px", marginBottom: "16px" }}
                />
                <Typography variant="h6" gutterBottom>
                  Market Floor
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Your one-stop shop for everything.
                </Typography>
              </Box>
            </Grid>

            {/* Company Information */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" gutterBottom>
                Company
              </Typography>
              <Link
                href="#"
                variant="body2"
                display="block"
                gutterBottom
                sx={{ fontWeight: "300" }}
              >
                About Us
              </Link>
              <Link
                href="#"
                variant="body2"
                display="block"
                gutterBottom
                sx={{ fontWeight: "300" }}
              >
                Careers
              </Link>
              <Link
                href="#"
                variant="body2"
                display="block"
                gutterBottom
                sx={{ fontWeight: "300" }}
              >
                Blog
              </Link>
            </Grid>

            {/* Customer Service */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" gutterBottom>
                Customer Service
              </Typography>
              <Link
                href="#"
                variant="body2"
                display="block"
                gutterBottom
                sx={{ fontWeight: "300" }}
              >
                Contact Us
              </Link>
              <Link
                href="#"
                variant="body2"
                display="block"
                gutterBottom
                sx={{ fontWeight: "300" }}
              >
                FAQs
              </Link>
              <Link
                href="#"
                variant="body2"
                display="block"
                gutterBottom
                sx={{ fontWeight: "300" }}
              >
                Returns
              </Link>
            </Grid>

            {/* Social Media */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <IconButton href="#" color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton href="#" color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton href="#" color="inherit">
                <LinkedInIcon />
              </IconButton>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Contact
              </Typography>
              <Typography variant="body2" display="block" gutterBottom>
                123 Market Street
              </Typography>
              <Typography variant="body2" display="block" gutterBottom>
                San Francisco, CA 94103
              </Typography>
              <Typography variant="body2" display="block" gutterBottom>
                Phone: (123) 456-7890
              </Typography>
              <Typography variant="body2" display="block" gutterBottom>
                Email: info@marketfloor.com
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
