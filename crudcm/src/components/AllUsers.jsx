import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { getUsers, deleteUser } from "../service/api";
import { Link } from "react-router-dom";
import React from "react";

const StyledTable = styled(Table)`
  width: 800px;
  max-width: 60%;
  margin: 100px auto 0 auto !important;
  table-layout: fixed;
`;

const Thead = styled(TableRow)`
  background: #000;
  & > th {
    color: #fff;
    font-size: 20px;
  }
`;

const TBody = styled(TableRow)`
  & > th {
    font-size: 20px;
    padding: 10px;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersDetails();
  }, []);

  const getUsersDetails = async () => {
    try {
      const response = await getUsers();
      console.log(response);
      console.log(response.data);

      if (response.data && Array.isArray(response.data)) {
        setUsers(response.data); //if its an array
      } else if (response.data && Array.isArray(response.data.data)) {
        setUsers(response.data.data); // if it's a nested
      } else {
        console.log("No user data found");
      }
    } catch (error) {
      console.log("Error fetching users:", error.message);
    }
  };

  const deleteUserData = async (id) => {
    if (!id) {
      console.error("Cannot delete user. Invalid ID provided.");
      return;
    }

    try {
      console.log("Attempting to delete user with ID:", id);
      await deleteUser(id);
      console.log("User deleted successfully. Refreshing user list...");
      getUsersDetails();
    } catch (error) {
      console.error("Error during user deletion:", error.message);
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <Table>
        <TableHead>
          <Thead>
            <TableCell> Id </TableCell>
            <TableCell> FirstName </TableCell>
            <TableCell> LastName </TableCell>
            <TableCell> Email </TableCell>
            <TableCell> PhoneNumber </TableCell>
            <TableCell> Company </TableCell>
            <TableCell> JobTitle </TableCell>
            <TableCell> Update</TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TBody key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user["FirstName"]}</TableCell>{" "}
              <TableCell>{user["LastName"]}</TableCell>{" "}
              <TableCell>{user["Email"]}</TableCell>
              <TableCell>{user["PhoneNumber"]}</TableCell>{" "}
              <TableCell>{user["Company"]}</TableCell>
              <TableCell>{user["JobTitle"]}</TableCell>{" "}
              <TableCell>
                <Button
                  variant="contained"
                  style={{ marginRight: 10 }}
                  onClick={() => deleteUserData(user.id)}
                >
                  <DeleteIcon style={{ marginRight: "8px" }} /> Delete
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to={`/edit/${user.id}`}
                >
                  <EditIcon style={{ marginRight: "8px" }} /> Edit{" "}
                </Button>
              </TableCell>
            </TBody>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default AllUsers;
