import React from "react";
import Header from "./Header";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SearchIcon from "@mui/icons-material/Search";
import { Typography, Divider, Button } from "@mui/material";
import image from "../images/Image.png";

function Hero() {
  return (
    <div className="Hero">
      <Header />
      <div className="container">
        <div className="half">
          <div className="search">
            <div className="left">
              <div>
                <Typography variant={"body1"}>Campaign Type</Typography>
                <Typography variant={"caption"} style={{ color: "#999999" }}>
                  What kind of post?
                </Typography>
              </div>
              <KeyboardArrowDownIcon />
            </div>
            <Divider orientation="vertical" flexItem variant="middle" />
            <div className="mid">
              <div>
                <Typography variant={"body1"}>Budget</Typography>
              </div>
              <div>
                <Typography variant={"caption"} style={{ color: "#999999" }}>
                  $ Min
                </Typography>
              </div>
            </div>
            <Divider orientation="vertical" flexItem variant="middle" />
            <div className="right">
              <Typography variant={"caption"} style={{ color: "#999999" }}>
                $ Max
              </Typography>
            </div>
            <div className="circle">
              <SearchIcon />
            </div>
          </div>
          <div
            style={{
              textAlign: "left",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          >
            <Typography
              style={{ color: "#ffffff" }}
              className="textHead"
              variant={"h4"}
            >
              Make your music go viral!
            </Typography>
            <br />
            <Typography
              style={{ color: "#ffffff" }}
              className="textBody"
              variant={"body 1"}
            >
              We connect artists & creators to break new <br />
              music through compelling content.
            </Typography>
          </div>
          <div className="row">
            <Button className="action">Get started</Button>
            <p
              className="btnText"
              style={{
                color: "#CCDB00",
                display: "flex",
                alignItems: "center",
                marginLeft: "30px",
              }}
            >
              <PlayCircleIcon style={{ marginRight: "10px" }} /> How it works?
            </p>
          </div>
          <div
            style={{
              textAlign: "left",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          >
            <p className="btnText" style={{ color: "#ffffff" }}>
              Trusted by
            </p>
            <div
              className="row"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <img src={image} alt="trust" />
              <img src={image} alt="trust" />
              <img src={image} alt="trust" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
