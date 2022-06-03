import React, {useEffect, useRef} from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function MyMapComponent({
    center,
    zoom,
  }) {
    const ref = useRef();
  
    useEffect(() => {
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
    });
  
    return <div ref={ref} id="map" />;
  }

const render = (status) => {
  switch (status) {
    // case Status.LOADING:
    //   return <Spinner />;
    // case Status.FAILURE:
    //   return <ErrorComponent />;
    case Status.SUCCESS:
      return <MyMapComponent />;
  }
};

const MyApp = () => <Wrapper apiKey={"YOUR_API_KEY"} render={render} />;