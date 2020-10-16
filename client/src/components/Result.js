import React, { useEffect } from "react";
import { Grid, Button, Container,Card } from "semantic-ui-react";
import Map from "./Map";
import TrafficLight from "./TrafficLight";
import "./Result.css"

const Result = (props) => {
  useEffect(() => {
    if (!props.location.state) {
      props.history.push("/");
    }
  }, []);

  const onClick = () => {
    props.history.push("/");
  };

  return (
    <Container>
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Grid.Row style={{ height: "15vh" }}>
          <header className="label">Traffomatic</header>
          <div
            className="header"
          >
            <Button color="pink" onClick={onClick}>
              Change Location
            </Button>
          </div>
        </Grid.Row>
        <Grid.Row style={{ height: "85vh" }}>
          <Grid.Column mobile={16} tablet={10} computer={10}>
            <Card style={{height : "30vw", width : "90%", marginLeft : "5%", marginTop : "3vw", minHeight : "300px"}}>
            <Map
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                />
              }
              mapElement={<div style={{ height: `100%` }} />}
              state={props.location.state}
            />
            </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={6} computer={6}>
            <TrafficLight state={props.location.state} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Result;
