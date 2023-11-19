import { React } from "react";
import TextField from "@mui/material/TextField";

function SearchBar() {
  return (
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          size="small"
        />
      </div>
  );
}

export default SearchBar;
