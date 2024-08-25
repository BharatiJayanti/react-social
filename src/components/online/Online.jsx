import "./online.css";

export default function Online({user}) {
  return (
    <li className="rightbarFriend">
           <div className="rightbarProfileImgContainer">
            <img className="rightbarProfileImg" src= {user.profilePictures} alt="" />
            <span className="rigthbarOnline"></span>
           </div>
           <span className="rightbarUsername">{user.username}</span>
      </li>
  );
}
