import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height of the viewport */
  background-color: #f3f4f6; /* Light gray background */
`;

const Cm = () => {
  return (
    <Container>
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#fff",
          padding: 4,
          borderRadius: 2,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Customer Management
        </Typography>
        <Typography variant="body1" paragraph>
          Manage your customers and users efficiently with our easy-to-use
          system. You can add, edit, and view users seamlessly.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/add"
          sx={{
            textTransform: "none",
            marginTop: 2,
          }}
        >
          Add New User
        </Button>
      </Box>
    </Container>
  );
};

export default Cm;
