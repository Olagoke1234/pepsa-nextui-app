import React, { useState } from "react";
import { Button, Link } from "@nextui-org/react";
import { Typography } from "@mui/material";
import { Dropdown, DropdownMenu, DropdownItem } from "@heroui/dropdown";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div style={{ position: "relative", zIndex: 10 }}>
      {/* Hamburger Button */}
      <Button
        aria-label="Toggle Menu"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          padding: "10px",
          borderRadius: "8px",
          //   backgroundColor: isOpen ? "#d1d1d1" : "#f5f5f5",
          backgroundColor: "none",
          transition: "background-color 0.3s ease",
        }}
        onClick={toggleMenu}
      >
        <span
          style={{
            width: "24px",
            height: "2px",
            backgroundColor: "#9d0208",
            borderRadius: "1px",
            transition: "transform 0.3s ease",
            transform: isOpen ? "rotate(45deg) translateY(6px)" : "none",
          }}
        />
        <span
          style={{
            width: "24px",
            height: "2px",
            backgroundColor: "#9d0208",
            borderRadius: "1px",
            transition: "opacity 0.3s ease",
            opacity: isOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            width: "24px",
            height: "2px",
            backgroundColor: "##9d0208",
            borderRadius: "1px",
            transition: "transform 0.3s ease",
            transform: isOpen ? "rotate(-45deg) translateY(-6px)" : "none",
          }}
        />
      </Button>

      {/* Dropdown Menu */}
      <Dropdown isOpen={isOpen} onClose={toggleMenu}>
        {[
          <DropdownMenu
            key="menu"
            style={{
              position: "absolute",
              top: "50px",
              left: 0,
              width: "200px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              padding: "10px",
              zIndex: 9,
              visibility: isOpen ? "visible" : "hidden",
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(-10px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            <DropdownItem key="home">
              <Link href="#home" isBlock color="primary">
                <Typography variant="body1" fontWeight="bold">
                  Home
                </Typography>
              </Link>
            </DropdownItem>
            <DropdownItem key="about">
              <Link href="#about" isBlock color="primary">
                <Typography variant="body1" fontWeight="bold">
                  About
                </Typography>
              </Link>
            </DropdownItem>
            <DropdownItem key="services">
              <Link href="#services" isBlock color="primary">
                <Typography variant="body1" fontWeight="bold">
                  Services
                </Typography>
              </Link>
            </DropdownItem>
            <DropdownItem key="contact">
              <Link href="#contact" isBlock color="primary">
                <Typography variant="body1" fontWeight="bold">
                  Contact
                </Typography>
              </Link>
            </DropdownItem>
          </DropdownMenu>,
        ]}
      </Dropdown>
    </div>
  );
};

export default HamburgerMenu;
