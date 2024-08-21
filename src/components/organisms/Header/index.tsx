"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Box,
  Divider,
  Link,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchBar from "@/components/organisms/SearchBar";
import Logo from "@/components/atom/Logo";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isProfileMenuOpen = Boolean(profileAnchorEl);

  return (
    <div className="w-full flex flex-col items-center px-3 md:px-10 hidden md:flex bg-[#FAFAFC]">
      <Toolbar
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          columnGap: "16px",
        }}
      >
        <Logo />
        <Box sx={{ width: "70%" }}>
          <SearchBar
            onCategoryChange={() => {}}
            category=""
            onChange={() => {}}
            placeholder="Search anything, any words"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            width: "auto",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Login
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Join Us
          </Link>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          {/* <IconButton color="inherit" onClick={handleProfileMenuOpen}>
            <AccountCircleIcon />
          </IconButton> */}
        </Box>
      </Toolbar>

      {/* <Divider sx={{ width: "100%", height: 4 }} /> */}

      <Menu
        anchorEl={profileAnchorEl}
        open={isProfileMenuOpen}
        onClose={handleProfileMenuClose}
      >
        <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>My account</MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Header;
