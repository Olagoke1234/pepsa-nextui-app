import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Image } from "@nextui-org/react";
import { Typography } from "@mui/material";
import CheckCircle from "../assets/Check-circle.png";

const Checkout: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        margin: "auto",
        background: "9d0208",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <Image
            src={CheckCircle}
            alt="Check Circle"
            width={100}
            height={100}
            style={{ marginBottom: "20px" }}
          />
        </div>
        <div>
          <Typography style={{ color: "#ddd" }}>You're Good to Go!</Typography>
        </div>
        <div style={{ marginTop: "20px", width: "100%" }}>
          <Button
            style={{ width: "75%", background: "#9d0208", color: "#fff" }}
            onClick={handleGetStartedClick}
          >
            Go to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
