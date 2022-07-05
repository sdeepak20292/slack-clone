import React from "react";
import "./Header.css";
// import { Avatar } from "@material-ui/core";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import SearchIcon from "@mui/icons-material/Search";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { Avatar, Input } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/Help";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header_left">
        <Avatar
          className="header-avatar"
          alt={user?.dislplayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>

      <div className="header_center">
        <SearchIcon />
        <input placeholder="Search" />
      </div>

      <div className="header_right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}
export default Header;
