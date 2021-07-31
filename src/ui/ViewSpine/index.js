import React from "react";

const ViewPort = ({ key, id }) => {
  return (
    <div key={key} id={id} style={{ width: "100%", height: "500px" }}></div>
  );
};

export default ViewPort;
