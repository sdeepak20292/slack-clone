import React from "react";
import "./Sidebar.css";
import { useHistory } from "react-router-dom";
import db from "./firebase";

function SidebarRow({ Icon, title, id, addChannelOption }) {
  const history = useHistory();
  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      db.collection("rooms").add({ name: channelName });
    }
  };
  return (
    <div
      className="sidebarRow"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarRow_icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="channel">
          <span className="without_icon"># </span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarRow;
