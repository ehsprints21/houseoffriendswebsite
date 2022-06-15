import React, { useEffect, useState } from "react";
import Map from "mapmyindia-react";
export default function App(props) {
  const [latlng, setLatLong] = useState({ lat: props.Latitude, lng: props.Longitude });
  return (
    <>
      <Map
        zoom={15}
        markers={[
          {
            position: [latlng.lat, latlng.lng],
            draggable: false,
            title: `${latlng.lat + " " + latlng.lng}`,
            onClick: (e) => {
              console.log("clicked ");
            },
            onDragend: (e) => {
              console.log("dragged");
            }
          }
        ]}
      />
    </>
  );
}