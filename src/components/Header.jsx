import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, Divider, Button, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import logo from "../images/Logo.png";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="header">
      <div className="container">
        <div
          style={{
            width: "100%",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", lignItems: "center" }}>
            <img alt="" src={logo} />
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              Marketplace{" "}
              {anchorEl === null ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowUpIcon />
              )}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Apple Music</MenuItem>
              <MenuItem onClick={handleClose}>Google Play</MenuItem>
              <MenuItem onClick={handleClose}>Spotify</MenuItem>
            </Menu>
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              Music{" "}
              {anchorEl === null ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowUpIcon />
              )}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>List 1</MenuItem>
              <MenuItem onClick={handleClose}>list 2</MenuItem>
              <MenuItem onClick={handleClose}>List 3</MenuItem>
            </Menu>
            <Button to="#">Labels</Button>
            <Button to="#">Agency</Button>
          </div>
          <div className="end">
            <Button to="#">Log in</Button>
            <Button className="action" to="#">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
