import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button, Card } from "@mui/material";

function Influencer() {
  return (
    <div className="container">
      <div
        className="row"
        style={{
          textAlign: "left",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p className="textHead">Explore campaigns</p>
          <p className="textBody">
            Duis cursus, est a interdum imperdiet, felis ipsum bibendum ex,
          </p>
        </div>
        <Button className="bbtn">View more</Button>
      </div>
      <div className="row" style={{ marginTop: "30px", width: "100%" }}>
        <div style={{ width: "60%", textAlign: "left" }}>
          <Card
            style={{
              margin: "10px",
              padding: "10px",
              border: "1px solid #DDDDDD",
            }}
          >
            <div className="row" style={{ alignItems: "center" }}>
              <CheckCircleIcon style={{ color: "black" }} />{" "}
              <p className="caption">300 Entertainment</p>
            </div>
            <p className="textHead" style={{ fontWeight: 400 }}>
              Migos Straightenin Launch Campaign
            </p>
          </Card>
          <Card
            style={{
              margin: "10px",
              padding: "10px",
              border: "1px solid #DDDDDD",
            }}
          >
            <div className="row" style={{ alignItems: "center" }}>
              <CheckCircleIcon style={{ color: "black" }} />{" "}
              <p className="caption">300 Entertainment</p>
            </div>
            <p className="textHead" style={{ fontWeight: 400 }}>
              Migos Straightenin Launch Campaign
            </p>
          </Card>
        </div>
        <Card
          style={{
            width: "40%",
            margin: "10px",
            padding: "10px",
            border: "1px solid #DDDDDD",
          }}
        >
          <div className="row" style={{ alignItems: "center" }}>
            <CheckCircleIcon style={{ color: "black" }} />{" "}
            <p className="caption">300 Entertainment</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Influencer;
