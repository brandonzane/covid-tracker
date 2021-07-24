import React from "react";
import './App.css';
import { 
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core"

function App() {
  return (
    <div className="app">
      <h1>Covid 19 tracker app</h1>
      <FormControl className="app__dropdown"></FormControl>
      <Select 
        variant="outlined"
        value="abc"
      >
        <MenuItem value="worldwide">Worldwide</MenuItem>
        <MenuItem value="worldwide">Worldwide</MenuItem>
        <MenuItem value="worldwide">Worldwide</MenuItem>
        <MenuItem value="worldwide">Worldwide</MenuItem>
      </Select>
      {/* Header */}
      {/* Title + Select input dropdown field */}

      {/* InfoBox */}
      {/* InfoBox */}
      {/* InfoBox */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
