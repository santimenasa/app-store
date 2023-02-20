import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <div className="navBar">
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Tabs >
            <Tab textColor="primary" label="About Us"/>
            <Tab textColor="primary" label="Products"/>
            <Tab textColor="primary" label="Home"/>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
