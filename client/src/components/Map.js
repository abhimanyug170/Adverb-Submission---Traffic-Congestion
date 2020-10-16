import React from 'react';
import { withScriptjs, withGoogleMap,GoogleMap, Marker,TrafficLayer } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: props.state.coordinate.lat, lng: props.state.coordinate.lon }}
    
  >
    {props.isMarkerShown && <Marker position={{ lat: props.state.coordinate.lat, lng: props.state.coordinate.lon }} />}
    {props.isMarkerShown && <Marker label="A" position={{ lat: props.state.roads[0].lat, lng: props.state.roads[0].lon }} />}
    {props.isMarkerShown && <Marker label="B" position={{ lat: props.state.roads[1].lat, lng: props.state.roads[1].lon }} />}
    {props.isMarkerShown && <Marker label="C" position={{ lat: props.state.roads[2].lat, lng: props.state.roads[2].lon }} />}
    {props.isMarkerShown && <Marker label="D" position={{ lat: props.state.roads[3].lat, lng: props.state.roads[3].lon }} />}
    <TrafficLayer autoUpdate />
  </GoogleMap>
))

export default MyMapComponent;
