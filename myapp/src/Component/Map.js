import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";
import axios from "axios"
// import {Data} from "./Data"
import {Maps}  from "./db"
mapboxgl.accessToken =
  "pk.eyJ1IjoiYXNodXRvc2hqcyIsImEiOiJjbDM5dWhhbDMwYmM5M2pwamFybDYxdWNiIn0.nyQKMAsGP4FJqz7EJciMEQ";

export const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState([]);
  const [lat, setLat] = useState([]);
  const [zoom, setZoom] = useState(2);

  // Initialize map when component mounts
  
   

//   const datahandle = () =>{
//          axios.get("http://localhost:3000/Maps").then((res) => {
//  return res
//    });
//     }




//  console.log(lat, lng);  
  useEffect(() => {

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
Maps.forEach((e)=>{
  console.log(e)
  con
  let marker = new mapboxgl.Marker().setLngLat([e.lat,e.lng]).addTo(map);
})
   
   


    
  

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="sidebarStyle">
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className="map-container" ref={mapContainerRef} />
      {/* <Data datahandle={datahandle}></Data> */}
    </div>
  );
};


