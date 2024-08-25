import "./topbar.css";
import {Search} from "@mui/icons-material";
import {Person, Chat,Notifications} from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Social</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searcIcon"/>
          <input placeholder="Search for friend, post or video" className="searchinput" />
        </div>
      </div>
      <div className="topbarRight">
      <div className="topbarLinks">
        <span className="topbarLinks">HomePage</span>
        <span className="topbarLinks">TimeLine</span>
        </div>
      
      <div className="topbarIcons">
        <div className="topbarIconItems">
          <Person/>
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItems">
          <Chat/>
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItems">
          <Notifications/>
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
      <img src="/assets/person/person1.jpg" alt="" className="topbarImg" />
    </div>
    </div>
  )
}
