import React from "react";
import { useLocation } from "react-router-dom";

export default function Navigator() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      {/* <p>hi</p> */}
      {/* <p>{location.pathname}</p> */}
    </div>
  );
}
