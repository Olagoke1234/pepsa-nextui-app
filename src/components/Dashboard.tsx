import React, { useState } from "react";
import { Card, Avatar, Spacer, Divider } from "@nextui-org/react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pepsa from "../assets/Pepsa-white.png";
import {
  faBars,
  faWallet,
  faShoppingCart,
  faBolt,
  faHistory,
  faTruck,
  // faStore,
  faExchangeAlt,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Button, ButtonGroup } from "@heroui/button";

const Dashboard: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "#f9f9f9",
        height: "100vh",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      {/* Header with Hamburger Menu */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <FontAwesomeIcon
          icon={faBars}
          size="lg"
          onClick={toggleMenu}
          style={{ cursor: "pointer", color: "#9d0208" }}
        />
        <div
          className="header-icons"
          style={{
            display: "flex",
            gap: "0.5rem",
            cursor: "pointer",
            color: "#9d0208",
          }}
        >
          <FontAwesomeIcon icon={faWallet} size="lg" />
          <FontAwesomeIcon icon={faWallet} size="lg" />
          <FontAwesomeIcon icon={faWallet} size="lg" />
        </div>
      </div>

      {/* Dropdown Menu (Optional for Hamburger) */}
      {menuOpen && (
        <Dropdown>
          <DropdownTrigger>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Menu Options">
            <DropdownItem key="profile">Profile</DropdownItem>
            <DropdownItem key="settings">Settings</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}

      {/* Wallet Balance */}
      <div style={{ padding: "0rem 2rem", width: "100%" }}>
        <Grid container alignItems="center">
          <Grid
            style={{
              // backgroundColor: "#fff",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "0.3rem",
            }}
          >
            <Typography style={{ fontSize: "12px", fontWeight: "bold" }}>
              Wallet Balance
            </Typography>
            <Typography style={{ fontSize: "12px" }}>₦150,901.00</Typography>
            <FontAwesomeIcon
              icon={faExchangeAlt}
              style={{
                marginRight: "8px",
                color: "#9d0208",
              }}
            />
          </Grid>
        </Grid>
      </div>

      <Spacer y={1} />

      <Card
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#9d0208",
          padding: "0.5rem",
        }}
      >
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#9d0208",
            // height: "100%",
          }}
        >
          <ButtonGroup size="sm">
            <Button
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#9d0208",
                color: "#fff",
                // marginRight: "8px",
              }}
            >
              <FontAwesomeIcon
                icon={faExchangeAlt}
                style={{ marginRight: "8px", marginBottom: "-10px" }}
              />
              Transfer
            </Button>
            <Button
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#9d0208",
                color: "#fff",
                // marginRight: "8px",
              }}
            >
              <FontAwesomeIcon
                icon={faBolt}
                style={{ marginRight: "8px", marginBottom: "-10px" }}
              />
              Airtime
            </Button>
            <Button
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#9d0208",
                color: "#fff",
                // marginRight: "8px",
              }}
            >
              <FontAwesomeIcon
                icon={faSyncAlt}
                style={{ marginRight: "8px", marginBottom: "-10px" }}
              />
              Electricity
            </Button>
            <Button
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#9d0208",
                color: "#fff",
                // marginRight: "8px",
              }}
            >
              <FontAwesomeIcon
                icon={faHistory}
                style={{ marginRight: "8px", marginBottom: "-10px" }}
              />
              History
            </Button>
            <Button
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#9d0208",
                color: "#fff",
                // marginRight: "8px",
              }}
            >
              <FontAwesomeIcon
                icon={faHistory}
                style={{ marginRight: "8px", marginBottom: "-10px" }}
              />
              History
            </Button>
          </ButtonGroup>
        </Grid>
      </Card>

      <Spacer y={1} />

      {/* Quick Navigation */}
      <div
        style={{
          // backgroundColor: "#fff",
          // padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0.3rem",
        }}
      >
        <Typography style={{ textAlign: "left", fontSize: "14px" }}>
          Quick Navigation
        </Typography>
        {/* <Spacer y={1} /> */}
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "0.5rem",
            width: "100%",
          }}
        >
          {[
            { name: "Delivery", icon: faTruck },
            { name: "Shop", icon: faShoppingCart },
            { name: "Convert", icon: faExchangeAlt },
            { name: "Switch", icon: faSyncAlt },
          ].map((item, index) => (
            <Grid
              item
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.3rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "12px",
                  // backgroundColor: "#9d0208",
                }}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  style={{
                    marginRight: "8px",
                    color: "#9d0208",
                    background: "white",
                    padding: "0.7rem",
                    width: "25px",
                    height: "25px",
                    borderRadius: "10px",
                  }}
                />
                {item.name}
              </div>
            </Grid>
          ))}
        </Grid>
      </div>

      <Spacer y={1} />
      {/* Search Space */}

      <div>
        <input
          type="search"
          placeholder="Search Item or Vendor"
          style={{ padding: "10px", borderRadius: "5px", width: "100%" }}
        />
      </div>

      <Spacer y={1} />
      {/* Recent Transactions */}
      <div style={{ background: "rgb(249,249,249)", padding: "0.6rem" }}>
        <ButtonGroup
          size="sm"
          style={{
            marginTop: "0rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            style={{ background: "#fff", color: "#9d0208", fontWeight: "bold" }}
          >
            Recent Payment
          </Button>
          <Button
            style={{ background: "#9d0208", color: "#fff", fontWeight: "bold" }}
          >
            Recent Delivery
          </Button>
          <Button
            style={{ background: "#9d0208", color: "#fff", fontWeight: "bold" }}
          >
            Recent Purchase
          </Button>
        </ButtonGroup>

        <Typography
          style={{
            marginTop: "1rem",
            fontSize: "14px",
            background: "rgb(249,249,249)",
          }}
        >
          More Reports
        </Typography>

        {/* <Divider style={{ marginBottom: "1rem", marginTop: "1rem" }} /> */}

        {[
          {
            title: "Delivery Deposit",
            amount: "+₦1,208.06",
            status: "Status Report",
            date: "Tue, May 25th, 12:00:45 PM",
            color: "success",
          },
          {
            title: "Bank Withdraw",
            amount: "-₦1,208.06",
            status: "Successful",
            date: "Tue, May 25th, 12:00:45 PM",
            color: "error",
          },
          {
            title: "Electricity/Bills",
            amount: "-₦1,208.06",
            status: "Status Report",
            date: "Tue, May 25th, 12:00:45 PM",
            color: "error",
          },
          {
            title: "Airtime/Data Purchase",
            amount: "+₦1,208.06",
            status: "Status Report",
            date: "Tue, May 25th, 12:00:45 PM",
            color: "success",
          },
        ].map((transaction, index) => (
          <div key={index}>
            <Grid
              container
              // gap={1}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#fff",
                borderRadius: "10px",
                padding: "0.5rem",
                marginBottom: "0.8rem",
              }}
              alignItems="center"
            >
              <Grid
                item
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "5px",
                }}
              >
                <Avatar
                  color={transaction.color === "error" ? "danger" : "success"}
                  style={{ width: "30px", height: "30px" }}
                >
                  {transaction.title.charAt(0)}
                </Avatar>
                <div>
                  <Typography style={{ fontSize: "12px" }}>
                    {transaction.title}
                  </Typography>
                  <Typography style={{ fontSize: "10px" }}>
                    {transaction.date}
                  </Typography>
                </div>
              </Grid>

              <Grid
                item
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <div style={{ textAlign: "right" }}>
                  <Typography
                    color={transaction.color}
                    style={{ fontSize: "14px" }}
                  >
                    {transaction.amount}
                  </Typography>
                  <Typography style={{ fontSize: "10px" }}>
                    {transaction.status}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        ))}
      </div>
      <Card
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#9d0208",
          padding: "0.5rem",
        }}
      >
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#9d0208",
            // height: "100%",
          }}
        >
          <ButtonGroup size="sm">
            <Button
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#9d0208",
                color: "#fff",
                // marginRight: "8px",
              }}
            >
              <FontAwesomeIcon
                icon={faExchangeAlt}
                style={{ marginRight: "8px", marginBottom: "-10px" }}
              />
              Transfer
            </Button>
            <Button
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#9d0208",
                color: "#fff",
                // marginRight: "8px",
              }}
            >
              <FontAwesomeIcon
                icon={faBolt}
                style={{ marginRight: "8px", marginBottom: "-10px" }}
              />
              Airtime
            </Button>
            <img src={Pepsa} alt="Pepsa Logo" width={50} height={50} />
            <Button
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#9d0208",
                color: "#fff",
                // marginRight: "8px",
              }}
            >
              <FontAwesomeIcon
                icon={faHistory}
                style={{ marginRight: "8px", marginBottom: "-10px" }}
              />
              History
            </Button>
            <Button
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#9d0208",
                color: "#fff",
                // marginRight: "8px",
              }}
            >
              <FontAwesomeIcon
                icon={faHistory}
                style={{ marginRight: "8px", marginBottom: "-10px" }}
              />
              History
            </Button>
          </ButtonGroup>
        </Grid>
      </Card>
    </div>
  );
};

export default Dashboard;
