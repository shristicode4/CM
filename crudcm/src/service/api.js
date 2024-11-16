import axios from "axios";

const API_URL = "http://localhost:3002/users";

// Validate user data function
const validateUserData = (data) => {
  // Check if required fields are filled
  if (!data.FirstName || !data.LastName || !data.Email) {
    throw new Error("First Name, Last Name, and Email are required.");
  }

  //validation for email format
  if (!/\S+@\S+\.\S+/.test(data.Email)) {
    throw new Error("Email is not valid.");
  }

  return true; // If validation passes
};

export const addUser = async (data) => {
  try {
    validateUserData(data); // Validate the data
    return await axios.post(API_URL, data); // Send request to API
  } catch (error) {
    console.log("Error while calling addUser API", error.message);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(API_URL); // Get users from the API
  } catch (error) {
    console.log("Error while calling getUsers API", error.message);
  }
};

//For getUser
export const getUser = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.log("Error while calling getUser API", error.message);
    return [];
  }
};

//For edit
export const editUser = async (data, id) => {
  try {
    console.log("API Request:", `${API_URL}/${id}`, data);
    return await axios.put(`${API_URL}/${id}`, data); //to update the user
  } catch (error) {
    console.log("Error while calling editUser", error.message);
    throw error;
  }
};

//for delete
export const deleteUser = async (id) => {
  if (!id) {
    console.error("Invalid ID passed to deleteUser function.");
    return;
  }

  try {
    console.log(`Sending DELETE request to: ${API_URL}/${id}`);
    const response = await axios.delete(`${API_URL}/${id}`);
    console.log("Delete Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error while calling deleteUser:", error.message);
    throw error;
  }
};
