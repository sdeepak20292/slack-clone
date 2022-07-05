import React from "react";
import "./Chat.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined;
import db from "./firebase.js";
import { doc } from "firebase/firestore";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = React.useState(null);
  const [roomMessages, setRoomMessages] = React.useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  return (
    <div className="chat">
      {/* <h2>You are in room {roomId}</h2> */}
      <div className="chat_header">
        <div className="chat_header_left">
          <h4 className="channel_name">
            <strong># {roomDetails?.name}</strong>
            <StarBorderOutlinedIcon />{" "}
          </h4>
        </div>

        <div className="chat_header_right">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat_messages">
        {/* all the messages here */}
        {roomMessages.map((message) => (
          <Message
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
            userImage={message.userImage}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}
export default Chat;
