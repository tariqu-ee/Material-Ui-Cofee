import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./header";
import Content from "./content";
import SearchBar from "./seacrh";

function App() {
  const [count, setCount] = React.useState(" ");

  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container style={{ margin: "3em 0em" }}>
        <Grid item xs={false} sm={4} />
        <Grid item xs={false} sm={4}>
          <SearchBar style={{ position: "static" }} />
        </Grid>
        <Grid item xs={false} sm={4} />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
