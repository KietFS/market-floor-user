import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        columnGap: "12px",
        alignItems: "center",
      }}
    >
      <Image
        alt="/logo"
        src={require("@/assets/icons/logo.png")}
        style={{ width: 36, height: 36 }}
      />
      <Typography
        sx={{ margin: 0, padding: 0 }}
        fontWeight="500"
        variant="h4"
        gutterBottom
      >
        Market
      </Typography>
    </Box>
  );
};

export default Logo;
