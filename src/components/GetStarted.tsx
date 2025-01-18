import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Image, Card, Spacer } from "@nextui-org/react";
import BuyAirtime from "../assets/Buy_airtime.png";
import FindConnect from "../assets/Find_and_connect.png";
import DeliveryService from "../assets/Delivery_services.png";
import SecuredWallet from "../assets/Secured_wallet.png";
import Pepsa from "../assets/Pepsa.co (2).png";
import { Typography, Container } from "@mui/material";

interface Flash {
  h1: string;
  h2: string;
  p: string;
  image: string;
  button?: JSX.Element;
  footer?: JSX.Element;
}

const flashes: Flash[] = [
  {
    h1: "",
    h2: ``,
    p: ``,
    image: Pepsa,
  },
  {
    h1: "Skip",
    h2: `Find and connect with vendors & stores near you.`,
    p: `Seamless purchase, payment, delivery & more`,
    image: FindConnect,
    button: (
      <Link to="/create-account">
        <Button color="primary" style={{ marginTop: "1rem" }}>
          Get Started
        </Button>
      </Link>
    ),
    footer: (
      <Typography
        variant="body2"
        style={{ marginTop: "1rem", color: "#757575" }}
      >
        Already have an account? <Link to="/login">Log In</Link>
      </Typography>
    ),
  },
  {
    h1: "Skip",
    h2: `Buy airtime, data and pay bills effortlessly.`,
    p: `Seamless purchase, payment, delivery & more`,
    image: BuyAirtime,
    button: (
      <Link to="/create-account">
        <Button color="primary" style={{ marginTop: "1rem" }}>
          Get Started
        </Button>
      </Link>
    ),
    footer: (
      <Typography
        variant="body2"
        style={{ marginTop: "1rem", color: "#757575" }}
      >
        Already have an account? <Link to="/login">Log In</Link>
      </Typography>
    ),
  },
  {
    h1: "Skip",
    h2: `Enjoy fast and reliable delivery services.`,
    p: `Seamless purchase, payment, delivery & more`,
    image: DeliveryService,
    button: (
      <Link to="/create-account">
        <Button color="primary" style={{ marginTop: "1rem" }}>
          Get Started
        </Button>
      </Link>
    ),
    footer: (
      <Typography
        variant="body2"
        style={{ marginTop: "1rem", color: "#757575" }}
      >
        Already have an account? <Link to="/login">Log In</Link>
      </Typography>
    ),
  },
  {
    h1: "",
    h2: `Secured wallet, money-back guarantee for transactions.`,
    p: `Seamless purchase, payment, delivery & more`,
    image: SecuredWallet,
    button: (
      <Link to="/create-account">
        <Button color="primary" style={{ marginTop: "1rem" }}>
          Get Started
        </Button>
      </Link>
    ),
    footer: (
      <Typography
        variant="body2"
        style={{ marginTop: "1rem", color: "#757575" }}
      >
        Already have an account?{" "}
        <Link to="/login" style={{ color: "#9d0208" }}>
          Log In
        </Link>
      </Typography>
    ),
  },
];

const GetStarted: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/create-account");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % flashes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
      }}
    >
      <Container
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Typography
            variant="body2"
            style={{ marginTop: "1rem", color: "#9d0208" }}
          >
            {flashes[current].h1}
          </Typography>
        </div>
      </Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          color: "#9d0208",
        }}
      >
        <Typography style={{ textAlign: "center" }}>
          {flashes[current].h2}
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Typography
          style={{ textAlign: "center", fontSize: "12px", color: "#999" }}
        >
          {flashes[current].p}
        </Typography>
      </div>
      <Image
        src={flashes[current].image}
        alt="Visual Representation"
        style={{ maxWidth: "100%", height: "" }}
      />
      <Spacer y={2} />
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        {current !== 0 && (
          <Button
            onPress={handleGetStartedClick}
            style={{ width: "75%", backgroundColor: "#9d0208", color: "#fff" }}
          >
            Get Started
          </Button>
        )}
      </div>
      <Spacer y={1} />
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        {flashes[current].footer}
      </Container>
    </Card>
  );
};

export default GetStarted;
