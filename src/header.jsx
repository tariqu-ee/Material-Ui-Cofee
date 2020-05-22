import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { makeStyles } from "@material-ui/styles";

function Header() {
  return (
    <AppBar style={{ width: "100%" }} position="static">
      <Toolbar>
        <Typography>Tarique</Typography>
        <AcUnitIcon />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
