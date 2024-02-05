import React from "react";
import { Box, Typography } from "@mui/material";
import { divStyle, homeStyle, ty1, ty2, ty3 } from "./home_style";

export default function Home() {
  return (
    <Box sx={homeStyle}>
      <Box sx={divStyle}>
        <Typography sx={ty1}>Hi, my name is </Typography>
        <Typography style={ty2}> Vinay Garg. </Typography>
        <Typography style={ty3}>I am a React developer.</Typography>
        <Typography variant="body1" style={{ color: "#8892b0" }}>
          I am currently learning Web-development and Data Structure and
          algorithm and I am doing my engineering in Electronics And
          Communication from NIT KURUKSHETRA
        </Typography>
      </Box>
    </Box>
  );
}
