import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { Input, Card } from "@nextui-org/react";
import { Typography } from "@mui/material";

const UserIdentification: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect after 10 seconds
    const timer = setTimeout(() => {
      navigate("/privacy-terms"); // Replace with your desired route
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigate]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string); // Set the preview
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Card style={{ padding: "20px", maxWidth: "400px", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <Typography style={{ fontSize: 24 }}>User Identification</Typography>
          <Typography color="#9d0208" style={{ fontSize: "12px" }}>
            Take a selfie for identification
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px dashed #ccc",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            id="fileInput"
            aria-label="Upload a selfie"
            style={{ display: "none" }}
          />
          <label
            htmlFor="fileInput"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "contain",
                  borderRadius: "30%",
                }}
              />
            ) : (
              <>
                <FaUserCircle style={{ fontSize: "50px", color: "#9d0208" }} />
                <Typography
                  color="primary"
                  style={{ marginTop: "10px", color: "#9d0208" }}
                >
                  Picture selfie
                </Typography>
              </>
            )}
          </label>
        </div>
      </Card>
    </div>
  );
};

export default UserIdentification;
