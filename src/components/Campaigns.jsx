import React from "react";
import center from "../images/Rectangle 25.png";
import { Button, Card } from "@mui/material";

function Campaigns() {
  return (
    <div className="container" style={{ marginTop: "60px" }}>
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
      <div
        className="row"
        style={{
          marginTop: "40px",
          marginBottom: "40px",
          justifyContent: "space-evenly",
        }}
      >
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            width: "250px",
            height: "278px",
            backgroundColor: "#F7FAFF",
          }}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img className="back" src={center} alt="music" />
          </div>
          <div
            className="row"
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              bottom: 0,
            }}
          >
            <div style={{ textAlign: "left" }}>
              <p className="textBody">Music</p>
              <p className="caption">200 listening</p>
            </div>
            <img
              style={{ width: "20px", height: "20px" }}
              src={center}
              alt="smaller"
            />
          </div>
        </Card>
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            width: "250px",
            height: "278px",
            backgroundColor: "#F7FAFF",
          }}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img className="back" src={center} alt="music" />
          </div>
          <div
            className="row"
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              bottom: 0,
            }}
          >
            <div style={{ textAlign: "left" }}>
              <p className="textBody">Gaming</p>
              <p className="caption">200 listening</p>
            </div>
            <img
              style={{ width: "20px", height: "20px" }}
              src={center}
              alt="smaller"
            />
          </div>
        </Card>
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            width: "250px",
            height: "278px",
            backgroundColor: "#F7FAFF",
          }}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img className="back" src={center} alt="music" />
          </div>
          <div
            className="row"
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              bottom: 0,
            }}
          >
            <div style={{ textAlign: "left" }}>
              <p className="textBody">Fashion</p>
              <p className="caption">200 listening</p>
            </div>
            <img
              style={{ width: "20px", height: "20px" }}
              src={center}
              alt="smaller"
            />
          </div>
        </Card>
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            width: "250px",
            height: "278px",
            backgroundColor: "#F7FAFF",
          }}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img className="back" src={center} alt="music" />
          </div>
          <div
            className="row"
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              bottom: 0,
            }}
          >
            <div style={{ textAlign: "left" }}>
              <p className="textBody">Beauty</p>
              <p className="caption">200 listening</p>
            </div>
            <img
              style={{ width: "20px", height: "20px" }}
              src={center}
              alt="smaller"
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Campaigns;
