import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import StorefrontIcon from '@mui/icons-material/Storefront';
import React from "react";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navBar">
      <AppBar position="sticky" color="primary" >
        <Toolbar>
          <StorefrontIcon sx={{fontSize : "4em"}}/>
          <Tabs sx={{ml: "80%"}}>
           <Link to="/About"><Tab textColor="primary" label="About Us"/></Link> 
           <Link to="/products"><Tab textColor="primary" label="Products"/></Link> 
            <Tab textColor="primary" label="Home"/>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
