import React from "react";
import { Image } from "@nextui-org/react";
// import { Typography, Container } from "@mui/material";
import HamburgerMenu from "./Hamburger";
import Scanner from "../assets/iconamoon_scanner-thin.png";
import Messages from "../assets/messages.png";
import Notification from "../assets/Vector.png";
// import Add from "../assets/add.png";
// import Eye from "../assets/eye.png";

const Dashboard: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "400px",
        margin: "auto",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <HamburgerMenu />
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <Image src={Scanner} alt="Scanner" width={32} height={32} />
          <Image src={Messages} alt="Messages" width={32} height={32} />
          <Image
            src={Notification}
            alt="Notifications"
            width={32}
            height={32}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
