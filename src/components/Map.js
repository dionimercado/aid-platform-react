import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Task from "./Task";

function Map({ getLocation, tasks }) {
  const [map, setMap] = useState(null);
  const [content, setContent] = useState({});
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 13,
    });

    setMap(map);

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        map.setCenter({ lat: latitude, lng: longitude })
    );

    map.addListener("click", getLocation);
  }, []);

  const addMarkers = (markers) => {
    markers.map((item) => {
      const marker = new window.google.maps.Marker({
        position: { lat: item.lat, lng: item.lng },
        map,
        icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
        title: item.type,
      });

      marker.addListener("click", () => setContent(item));
    });
  };

  addMarkers(tasks);

  return (
    <>
      {Object.keys(content).length > 0 && <Task task={content} />}
      <Wrapper ref={mapRef} />
    </>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - 56px);
  width: 100%;
`;

export default Map;
