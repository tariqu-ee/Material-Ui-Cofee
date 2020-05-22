import React from "react";
import { Grid } from "@material-ui/core";
import OutlinedCard from "./card";
import CofeeList from "./mydata";

function Content() {
  const cofeeCard = (cofeeObject) => {
    return (
      <Grid item xs={12} sm={4}>
        <OutlinedCard
          {...cofeeObject}
          props={cofeeCard}
          style={{ position: "static" }}
        />
      </Grid>
    );
  };
  return (
    <Grid container spacing={2}>
      {CofeeList.map((cofeeObject) => cofeeCard(cofeeObject))}
    </Grid>
  );
}

export default Content;
