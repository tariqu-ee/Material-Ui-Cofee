import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import Content from "./content";
const useStyles = makeStyles((theme) => ({
  spacingButton: {
    marginLeft: "5em",
  },
  spacingHolder: {
    marginLeft: "2em",
  },
}));

export default function SearchBar() {
  // const [count, setCount] = React.useState(" ");
  // const [searchresult, setSearchResult] = React.useState([]);

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setCount(e.target.value);
  // };

  // React.useEffect(() => {
  //   console.log(props);
  //   const result = props.filter((data) => {
  //     data.title.toLowerCase().includes(count);
  //   });
  //   setSearchResult(result);
  // }, [count]);

  const classes = useStyles();
  return (
    <Paper component="form">
      <InputBase
        // onChange={handleChange}
        // value={count}
        className={classes.spacingHolder}
        placeholder="Search "
        inputProps={{ "aria-label": "search " }}
      />
      <IconButton
        className={classes.spacingButton}
        type="submit"
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
