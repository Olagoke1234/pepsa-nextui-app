import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Input, Spacer, Button } from "@nextui-org/react";
import { Typography } from "@mui/material";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@heroui/dropdown";

const CreateAccount: React.FC = () => {
  const navigate = useNavigate();

  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const handleCreateAccountClick = () => {
    navigate("/verify-number-1");
  };

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) =>
    (currentYear - i).toString()
  );

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        minHeight: "100vh",
        maxWidth: "400px",
        margin: "auto",
        padding: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        <h1 style={{ fontSize: "24px", color: "#9d0208", textAlign: "left" }}>
          Get Started Now!
        </h1>
        <p style={{ fontSize: "16px", color: "#999" }}>
          Create an account to get started
        </p>
      </div>
      <Spacer y={4} />
      <Input
        fullWidth
        label="Full Name"
        placeholder="First-name, then surname as on ID"
        required
      />

      <Spacer y={4} />
      <Typography variant="body2" color="textSecondary">
        Date of Birth
      </Typography>

      <Spacer y={1} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <Dropdown>
          <DropdownTrigger>
            <button
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            >
              {selectedDay || "Day"}
            </button>
          </DropdownTrigger>
          <DropdownMenu
            style={{
              maxHeight: "400px", // Adjust height as needed
              overflowY: "auto", // Ensure scrollability
            }}
          >
            <DropdownSection>
              {days.map((day) => (
                <DropdownItem key={day} onClick={() => setSelectedDay(day)}>
                  {day}
                </DropdownItem>
              ))}
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <DropdownTrigger>
            <button
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            >
              {selectedMonth || "Month"}
            </button>
          </DropdownTrigger>
          <DropdownMenu
            style={{
              maxHeight: "400px", // Adjust height as needed
              overflowY: "auto", // Ensure scrollability
            }}
          >
            <DropdownSection>
              {months.map((month) => (
                <DropdownItem
                  key={month}
                  onClick={() => setSelectedMonth(month)}
                >
                  {month}
                </DropdownItem>
              ))}
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <DropdownTrigger>
            <button
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            >
              {selectedYear || "Year"}
            </button>
          </DropdownTrigger>
          <DropdownMenu
            style={{
              maxHeight: "400px", // Adjust height as needed
              overflowY: "auto", // Ensure scrollability
            }}
          >
            <DropdownSection>
              {years.map((year) => (
                <DropdownItem key={year} onClick={() => setSelectedYear(year)}>
                  {year}
                </DropdownItem>
              ))}
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>
      <Spacer y={4} />
      <Input
        fullWidth
        label="Phone Number"
        type="tel"
        placeholder="Enter phone number"
        required
      />
      <Spacer y={4} />
      <Input
        fullWidth
        label="Email Address (Optional)"
        type="email"
        placeholder="Email Address"
      />
      <Spacer y={3} />
      <Input
        fullWidth
        label="Password"
        type="password"
        placeholder="************"
        required
      />
      <Spacer y={4} />
      <Input
        fullWidth
        label="Confirm Password"
        type="password"
        placeholder="************"
        required
      />
      <Spacer y={4} />
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Button
          onClick={handleCreateAccountClick}
          style={{ width: "75%", backgroundColor: "#9d0208", color: "#fff" }}
        >
          Get Started
        </Button>
      </div>
    </Card>
  );
};

export default CreateAccount;
