import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <div>
        <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profileRight">
        <div className="profileRightTop">
        <div className="profileCover">
           <img className="profileCoverImg" src ="assets/post/post1.jpg" alt=""/>
           <img className="profileUserImg" src = "assets/person/person3.jpg" alt="" />
        
        </div>
        
        <div className="profileInfo">
          <h4 className="profileInfoName">Bharati Jayanti</h4>
          <span className="profileInfoDesc">Hello my friends</span>
        </div>
        </div>
        <div className="profileRightBottom">
        <Feed/>
        <Rightbar profile/> 
        </div>
        </div>

      
      </div>
    </div>
    
  );
}
