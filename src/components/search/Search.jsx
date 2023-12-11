import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  return (
    <TextField
      size="small"
      color="primary"
      id="outlined-basic"
      label="search"
      variant="outlined"
      focused
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default Search;
