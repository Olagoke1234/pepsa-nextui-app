import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Input, Button } from "@nextui-org/react";
import { Typography } from "@mui/material";

const SetPin: React.FC = () => {
  const navigate = useNavigate();

  const [pin, setPin] = useState<string>("");
  const [confirmPin, setConfirmPin] = useState<string>("");

  const handleSetPinClick = () => {
    // You can change the URL to wherever the flow continues
    navigate("/user-identification");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <Typography variant="h5" style={{ color: "#9d0208" }}>
        Set your transaction pin
      </Typography>
      <Typography color="textSecondary" style={{ fontSize: "12px" }}>
        Create a 4-digit transaction pin
      </Typography>
      <Card
        style={{
          width: "100%",
          padding: "20px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <form>
          <div style={{ marginBottom: "20px" }}>
            <Input
              isClearable
              label="Transaction Pin"
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="****"
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Input
              isClearable
              label="Confirm Transaction Pin"
              type="password"
              value={confirmPin}
              onChange={(e) => setConfirmPin(e.target.value)}
              placeholder="****"
            />
          </div>
          <div style={{ textAlign: "center", width: "100%" }}>
            <Button
              style={{
                width: "75%",
                backgroundColor: "#9d0208",
                color: "#fff",
              }}
              onClick={handleSetPinClick}
            >
              Continue
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SetPin;
