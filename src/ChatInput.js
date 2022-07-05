import React from "react";
import "./Chat.css";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "./firebase";
function ChatInput({ channelName, channelId }) {
  const [input, setInput] = React.useState("");
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      db.collection("rooms")
        .doc(channelId)
        .collection("messages")
        .add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          user: user.displayName,
          userimage: user.photoURL
        });
    }
  };
  return (
    <div className="chat_input">
      <form>
        <input
          placeholder={`Message #${channelName}`}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={sendMessage}>
          SEND{" "}
        </button>
      </form>
    </div>
  );
}
