import React, { useEffect, useState } from "react";
import Map from "mapmyindia-react";
export default function App({childToParent}) {
  const [latlng, setLatLong] = useState({ lat: "28.7041", lng: "77.1025" });
  const [dest, setDest] = useState({});
  useEffect(()=>{
    childToParent(dest);
  }, [dest])
  return (
    <>
      <Map
        zoom={4}
        markers={[
          {
            position: [latlng.lat, latlng.lng],
            draggable: true,
            title: `${latlng.lat + " " + latlng.lng}`,
            onClick: (e) => {
              console.log("clicked ");
            },
            onDragend: (e) => {
              setDest(e.target._latlng);
              setLatLong(e.target._latlng);
              console.log(e.target._latlng);
            }
          }
        ]}
      />
    </>
  );
}