import "./Chat.css";
import React from "react";

function Message({ message, timestamp, user, userImage }) {
  return (
    <div className="message">
      <img src={userImage} alt="user_image" />
      <div className="message_info">
        <h4>
          {user}{" "}
          <span className="message_time">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>{" "}
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}
export default Message;
