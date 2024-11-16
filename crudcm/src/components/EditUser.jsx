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

import { useNavigate, useParams } from "react-router-dom";
import { getUser, editUser } from "../service/api";

const initialValues = {
  FirstName: "",
  LastName: "",
  Email: "",
  PhoneNumber: "",
  Company: "",
  JobTitle: "",
};

const EditUser = () => {
  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const users = await getUser(); // Fetch all users
      console.log("Fetched Users:", users); // Log all users

      if (Array.isArray(users)) {
        const userToEdit = users.find((user) => user.id === id); // Find user by ID
        if (userToEdit) {
          console.log("User to Edit:", userToEdit); // Log the user to be edited
          setUser(userToEdit);
        } else {
          console.log("No user found with ID:", id);
        }
      } else {
        console.log("Invalid response format. Expected an array.");
      }
    } catch (error) {
      console.log("Error fetching user data:", error.message);
    }
  };

  const onValuechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const addUserDetails = async () => {
    try {
      console.log("Updating user:", user);
      await editUser(user, user.id); // Pass the user ID
      navigate("/all");
    } catch (error) {
      console.log("Error while calling editUser", error.message);
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
        Edit User
      </Typography>

      <FormControl sx={{ marginBottom: "20px" }}>
        <InputLabel>First Name</InputLabel>
        <Input
          onChange={(e) => onValuechange(e)}
          name="FirstName"
          value={user.FirstName}
        />
      </FormControl>

      <FormControl sx={{ marginBottom: "20px" }}>
        <InputLabel>Last Name</InputLabel>
        <Input
          onChange={(e) => onValuechange(e)}
          name="LastName"
          value={user.LastName}
        />
      </FormControl>

      <FormControl sx={{ marginBottom: "20px" }}>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => onValuechange(e)}
          name="Email"
          value={user.Email}
        />
      </FormControl>

      <FormControl sx={{ marginBottom: "20px" }}>
        <InputLabel>Phone Number</InputLabel>
        <Input
          onChange={(e) => onValuechange(e)}
          name="PhoneNumber"
          value={user.PhoneNumber}
        />
      </FormControl>

      <FormControl sx={{ marginBottom: "20px" }}>
        <InputLabel>Company</InputLabel>
        <Input
          onChange={(e) => onValuechange(e)}
          name="Company"
          value={user.Company}
        />
      </FormControl>

      <FormControl sx={{ marginBottom: "20px" }}>
        <InputLabel>Job Title</InputLabel>
        <Input
          onChange={(e) => onValuechange(e)}
          name="JobTitle"
          value={user.JobTitle}
        />
      </FormControl>

      <FormControl>
        <Button
          onClick={() => addUserDetails()}
          variant="contained"
          color="primary"
          type="submit"
        >
          Edit User
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default EditUser;
