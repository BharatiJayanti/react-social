import "./rightbar.css";
import {Users} from "../../dummydata";
import Online from "../../components/online/Online"
export default function Rightbar({profile}) {
  const HomeRightbar = () =>{
    return(
    <>
       <div className="birthdayContainer">
        <img className="birthdayImg" src="assets/gift.png" alt="" />
        <span className="birthdayText">
        <b>Pola Foster</b> and <b>3 other Friends</b> have a birthday today. </span>
      </div>
      <img className="rightbarAd" src="assets/add.jpg" alt="" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
      {Users.map(u=>(
          <Online key={u.id} user={u}/>
      ))}
      


      
      </ul>
    </>
    );
  };
  const ProfileRightbar = () =>{
    return (
      <>
        <h4 className="rightbrTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Newyork</span>
            </div>
             
            <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">from:</span>
            <span className="rightbarInfoValue">Madrid</span>
            </div>

            <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">single</span>

          </div>
        </div>
        <h4 className="rightbarTitle">Users friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/person2.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Shraddha Kapoor</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/person/person1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Shraddha Kapoor</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/person/person3.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Shraddha Kapoor</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/person/person4.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Shraddha Kapoor</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/person/person5.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Shraddha Kapoor</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/person/person6.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Shraddha Kapoor</span>
          </div>
        </div>
        

      </>
    );
  };
  return (
    <div className="rightbar"> 
    <div className="rightbarWrapper">
     {profile ? <ProfileRightbar/> : <HomeRightbar/>}
     
    </div>

    </div>
  );
}
