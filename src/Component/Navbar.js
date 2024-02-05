import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";

export default function Navbar() {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#0a192f", boxShadow: "none",zIndex:"2" }}
      >
        <Toolbar>
          <Tabs>
            <Tab
              sx={{ color: "#ccd6f6" }}
              label="Home"
              component={Link}
              to="/"
            />
            <Tab style={{color:"#ccd6f6"}} label="About" component={Link} to="/about" />
            <Tab
              sx={{ color: "#ccd6f6" }}
              label="Work"
              component={Link}
              to="/work"
            />
            <Tab
              sx={{ color: "#ccd6f6" }}
              label="Contact"
              component={Link}
              to="/contact"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
}
