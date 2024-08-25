import "./sidebar.css" ;
import { RssFeed } from "@mui/icons-material";
import { Chat } from "@mui/icons-material";
import { PlayCircleFilledOutlined } from "@mui/icons-material";
import { Group } from "@mui/icons-material";
import { Bookmarks } from "@mui/icons-material";
import { HelpOutlined } from "@mui/icons-material";
import { WorkOutlineOutlined } from "@mui/icons-material";
import { EventOutlined } from "@mui/icons-material";
import { SchoolOutlined } from "@mui/icons-material";
import {Users} from "../../dummydata";
import CloseFriends from "../../components/closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
   <div className="sidebarwrapper">
   <ul className="sidebarlist">
    <li className="sidebarlistItem">
    <RssFeed className="sidebarIcon"/>
    <span className="sidebarlistItemText">Feed</span>

    </li>
    <li className="sidebarlistItem">
    <Chat className="sidebarIcon"/>
    <span className="sidebarlistItemText">Chats</span>

    </li>
    <li className="sidebarlistItem">
    <PlayCircleFilledOutlined className="sidebarIcon"/>
    <span className="sidebarlistItemText">Videos</span>

    </li>
    <li className="sidebarlistItem">
    <Group className="sidebarIcon"/>
    <span className="sidebarlistItemText">Groups</span>

    </li>
    <li className="sidebarlistItem">
    <Bookmarks className="sidebarIcon"/>
    <span className="sidebarlistItemText">Bookmarks</span>

    </li>
    <li className="sidebarlistItem">
    <HelpOutlined className="sidebarIcon"/>
    <span className="sidebarlistItemText">Questions</span>

    </li>
    <li className="sidebarlistItem">
    <WorkOutlineOutlined className="sidebarIcon"/>
    <span className="sidebarlistItemText">Jobs</span>

    </li>
    <li className="sidebarlistItem">
    <EventOutlined className="sidebarIcon"/>
    <span className="sidebarlistItemText">Events</span>

    </li>
    <li className="sidebarlistItem">
    <SchoolOutlined className="sidebarIcon"/>
    <span className="sidebarlistItemText">Courses</span>

    </li>
   </ul>
   <button className="sidebarButton">Show More</button>
   <hr className="sidebarHr"></hr>
   <div className="sidebarFriendList">
   {Users.map(u=>(
          <CloseFriends key={u.id} user={u}/>
      ))}
    

    
   </div>
   

   </div>

    </div>
  );
}
