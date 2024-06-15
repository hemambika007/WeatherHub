import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./component/Navbar";
import Home from "./component/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    width: "100%",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/patient" element={<Patient/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
