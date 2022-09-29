import React from "react";

const sectionHorizontal = {
  fontsize: "25px",
  fontHeight: "600px",
  width: "50%",
  textAlign: "center",
  borderBottom: "1px solid #ced4da",
  lineHeight: "0.1em",
  margin: "60px auto 25px auto",
};

const sectionSpan = {
  padding: "0 10px",
  backgroundColor: "white",
};

const part = {
  width: "100%",
  textAlign: "center",
};

const Horizantal = (props) => {
  return (
    <div style={part}>
      <h3 style={sectionHorizontal}>
        <span style={sectionSpan}>{props.title}</span>
      </h3>
    </div>
  );
};

export default Horizantal;
