import React, { Fragment, useState, useEffect } from "react";
import { Dropdown, Button } from "semantic-ui-react";
import "./Home.css";
const dummyData = [
  {
    key: 1,
    value: {
      name: "Temp Name 1",
      lat: 23,
      lon: 12,
    },
    text: "Temp Name 1",
  },
  {
    key: 2,
    value: {
      name: "Temp Name 2",
      lat: 73,
      lon: 54,
    },
    text: "Temp Name 2",
  },
  {
    key: 3,
    value: {
      name: "Temp Name 3",
      lat: 39,
      lon: 10,
    },
    text: "Temp Name 3",
  },
];

const Home = ({ history, junctions }) => {
  const [value, setValue] = useState(null);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    let optns = junctions.map((j, index) => {
      return {
        key: j._id,
        value: j,
        text: j.name || "Temp Name",
      };
    });
    setOptions(optns);
  }, []);

  const handleChange = (e, { value }) => {
    setValue(value);
  };

  const onClick = () => {
    console.log(value);
    if (value) history.push({ pathname: "/lights", state: value });
  };
  const DropdownExampleSearchSelection = () => (
    <Dropdown
      onChange={handleChange}
      placeholder="Select Location"
      fluid
      selection
      options={options}
      value={value}
    />
  );
  return (
    <Fragment>
      <div className="home-div">
        <DropdownExampleSearchSelection></DropdownExampleSearchSelection>
      </div>
      <div className="button-div">
        <Button color="pink" onClick={onClick}>
          Show Congestion
        </Button>
      </div>
    </Fragment>
  );
};

export default Home;
