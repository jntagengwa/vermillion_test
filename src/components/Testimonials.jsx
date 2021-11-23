import React from "react";
import { Divider } from "@mui/material";
import img from "../images/Group 25.png";

function Testimonies() {
  return (
    <div className="container">
      <div
        className="row"
        style={{
          marginTop: "30px",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div className="row" style={{ height: "72px", alignItems: "center" }}>
          <img src={img} alt="profile" />
          <div style={{ textAlign: "left", marginLeft: "20px" }}>
            <p className="textBody" style={{ fontWeight: 600 }}>
              Nas Testimonial
            </p>
            <p className="textBody">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            </p>
          </div>
        </div>
        <div className="row" style={{ height: "72px", alignItems: "center" }}>
          <img src={img} alt="profile" />
          <div style={{ textAlign: "left", marginLeft: "20px" }}>
            <p className="textBody">Toby Testimonial</p>
            <p className="textBody" style={{ fontWeight: 400 }}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            </p>
          </div>
        </div>
        <div className="row" style={{ height: "72px", alignItems: "center" }}>
          <img src={img} alt="profile" />
          <div style={{ textAlign: "left", marginLeft: "20px" }}>
            <p className="textBody"> Nas Testimonial</p>
            <p className="textBody" style={{ fontWeight: 400 }}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            </p>
          </div>
        </div>
        <div className="row" style={{ height: "72px", alignItems: "center" }}>
          <img src={img} alt="profile" />
          <div style={{ textAlign: "left", marginLeft: "20px" }}>
            <p className="textBody">Biggie Testimonial</p>
            <p className="textBody" style={{ fontWeight: 400 }}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            </p>
          </div>
        </div>
      </div>
      <Divider style={{ marginTop: "30px" }} />
    </div>
  );
}

export default Testimonies;
