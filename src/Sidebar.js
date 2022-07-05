import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarRow from "./SidebarRow";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/InsertComment";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from "./firebase.js";
import { useStateValue } from "./StateProvider";

import { collection, doc, setDoc } from "firebase/firestore";

function Sidebar() {
  const [{ user }] = useStateValue();
  const [channels, setChannels] = React.useState([]);

  React.useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>{user?.displayName}</h2>
          <h3>
            <FiberManualRecordIcon className="activity" />
            sdeepak20292
          </h3>
        </div>

        <CreateIcon />
      </div>
      <SidebarRow Icon={InsertCommentIcon} title="Threads" />
      <SidebarRow Icon={InboxIcon} title="Inbox" />
      <SidebarRow Icon={DraftsIcon} title="Saved items" />
      <SidebarRow Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarRow Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarRow Icon={AppsIcon} title="Apps" />
      <SidebarRow Icon={FileCopyIcon} title="File browser" />
      <SidebarRow Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarRow Icon={ExpandMoreIcon} title="Channels" />
      <SidebarRow Icon={AddIcon} addChannelOption title="Add Channel" />
      {channels.map((channel) => (
        <SidebarRow title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
