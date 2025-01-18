import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Input, Spacer, Button } from "@nextui-org/react";
import { Typography } from "@mui/material";

const VerifyNumber1: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(120); // 2 minutes in seconds
  const [timerEnded, setTimerEnded] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId);
          setTimerEnded(true); // Timer ended
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleResendCode = () => {
    setTimerEnded(false);
    setTimeLeft(120); // Restart timer
  };

  const handleVerifyClick = () => {
    navigate("/set-pin"); // Navigate to SetPin after phone number verification
  };

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        maxWidth: "400px",
        margin: "auto",
        padding: "2rem",
      }}
    >
      <Typography
        variant="h1"
        sx={{ color: "#9d0208", textAlign: "center", fontSize: 24 }}
      >
        Verify your phone number
      </Typography>

      <Typography
        sx={{
          color: "$accents6",
          textAlign: "center",
          marginBottom: "1rem",
          fontSize: 12,
        }}
      >
        We sent a four-digit code to your phone via SMS
      </Typography>

      <Spacer y={2} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          marginBottom: "1.5rem",
        }}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <Input
            key={index}
            style={{
              width: "2rem",
              height: "2rem",
              textAlign: "center",
              fontSize: "1.5rem",
            }}
            maxLength={1}
            type="text"
          />
        ))}
      </div>

      <Typography
        sx={{ color: "$accents6", textAlign: "right", width: "100%" }}
      >
        {timerEnded ? (
          <Typography
            sx={{ color: "blue", cursor: "pointer" }}
            onClick={handleResendCode}
          >
            Resend code
          </Typography>
        ) : (
          `Resend code in ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
        )}
      </Typography>

      <Spacer y={5} />

      <Button
        style={{ width: "75%", backgroundColor: "#9d0208", color: "#fff" }}
        onClick={handleVerifyClick}
      >
        Verify Number
      </Button>
    </Card>
  );
};

export default VerifyNumber1;
