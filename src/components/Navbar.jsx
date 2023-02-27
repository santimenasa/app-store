import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import StorefrontIcon from '@mui/icons-material/Storefront';
import React from "react";

const Navbar = () => {
  return (
    <div className="navBar">
      <AppBar position="sticky" color="primary" >
        <Toolbar>
          <StorefrontIcon sx={{fontSize : "4em"}}/>
          <Tabs sx={{ml: "80%"}}>
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
