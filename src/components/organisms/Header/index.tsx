"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Button,
  Menu,
  MenuItem,
  Box,
  Divider,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchBar from "@/components/organisms/SearchBar";

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
    <AppBar position="static" sx={{ bgcolor: "white", color: "black" }}>
      <Toolbar
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          columnGap: "16px",
        }}
      >
        <Typography variant="h6">Market Floor</Typography>

        <Box sx={{ width: "60%" }}>
          <SearchBar
            onCategoryChange={() => {}}
            category=""
            onChange={() => {}}
            placeholder="Search anything, any words"
          />
        </Box>

        <Box sx={{ width: "20%" }}></Box>
      </Toolbar>

      <Divider sx={{ width: "100%", height: 4 }} />
    </AppBar>
  );
};

export default Header;
