import React from "react";
import { useState, useEffect } from "react";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
  Typography,
} from "@mui/material";

import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";

const initialValues = {
  FirstName: "",
  LastName: "",
  Email: "",
  PhoneNumber: "",
  Company: "",
  JobTitle: "",
};

const AddUser = () => {
  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("User updated:", user);
  }, [user]);

  const onValuechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    console.log("Form data before API call:", user);

    const formattedUser = {
      FirstName: user.FirstName,
      LastName: user.LastName,
      Email: user.Email,
      PhoneNumber: user.PhoneNumber,
      Company: user.Company,
      JobTitle: user.JobTitle,
    };

    console.log("Adding user:", formattedUser);

    try {
      await addUser(formattedUser);
      navigate("/all");
    } catch (error) {
      console.log("Error adding user:", error.message);
    }
  };

  return (
    <FormGroup
      sx={{
        width: "600px",
        margin: "auto",
        marginTop: "100px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Add User
      </Typography>

      <FormControl sx={{ marginBottom: "20px" }}>
        <InputLabel>First Name</InputLabel>
        <Input onChange={(e) => onValuechange(e)} name="FirstName" />
      </FormControl>

      <FormControl sx={{ marginBottom: "20px" }}>
        <InputLabel>Last Name</InputLabel>
        <Input onChange={(e) => onValuechange(e)} name="LastName" />
      </FormControl>

      <FormControl sx={{ marginBottom: "20px" }}>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValuechange(e)} name="Email" />
      </FormControl>

      <FormControl sx={{ marginBottom: "20px" }}>
        <InputLabel>Phone Number</InputLabel>
        <Input onChange={(e) => onValuechange(e)} name="PhoneNumber" />
      </FormControl>

      <FormControl sx={{ marginBottom: "20px" }}>
        <InputLabel>Company</InputLabel>
        <Input onChange={(e) => onValuechange(e)} name="Company" />
      </FormControl>

      <FormControl sx={{ marginBottom: "20px" }}>
        <InputLabel>Job Title</InputLabel>
        <Input onChange={(e) => onValuechange(e)} name="JobTitle" />
      </FormControl>

      <FormControl>
        <Button
          onClick={() => addUserDetails()}
          variant="contained"
          color="primary"
          type="submit"
        >
          Add User
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default AddUser;
