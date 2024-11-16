import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 50px;
  color: inherit;
  text-decoration: none;
`;
const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">
          <ManageAccountsIcon style={{ marginRight: "8px" }} />
          Customer Management
        </Tabs>
        <Tabs to="/all">
          <AccountCircleIcon style={{ marginRight: "8px" }} />
          All Users
        </Tabs>
        <Tabs to="/add">
          <PeopleIcon style={{ marginRight: "8px" }} /> Add Users
        </Tabs>
      </Toolbar>
    </Header>
  );
};
export default NavBar;
