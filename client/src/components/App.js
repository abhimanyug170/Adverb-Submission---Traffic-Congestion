import React, { useState, useEffect } from "react";
import api from "../api";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Result from "./Result";
import { Loader } from "semantic-ui-react";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [junctions, setJunctions] = useState([]);

  useEffect(() => {
    api
      .get("/junctions")
      .then((res) => {
        console.log(res);
        setLoading(false);
        setJunctions(res.data.junctions);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  if (loading)
    return (
      <div>
        <Loader
          active
          inline="centered"
          style={{
            marginTop: "50vh",
          }}
        />
      </div>
    );
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        component={(props) => (
          <Home
            history={props.history}
            location={props.location}
            junctions={junctions}
          />
        )}
      />
      <Route
        exact
        path="/lights"
        component={(props) => (
          <Result
            history={props.history}
            location={props.location}
            junctions={junctions}
          />
        )}
      />
    </BrowserRouter>
  );
};

export default App;
