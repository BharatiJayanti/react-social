import "./share.css";
import { PermMedia ,Label,Room,EmojiEmotions} from "@mui/icons-material";

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg"  alt=""  src="/assets/person/person1.jpg" />
                <input placeholder="What's in your mind safak?" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                    <PermMedia  htmlColor= "tomato"className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>

                    </div>

                    <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">tag</span>

                    </div>

                    <div className="shareOption">
                    <Room htmlColor="green"  className="shareIcon"/>
                    <span className="shareOptionText">Locations</span>

                    </div>

                    <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>

                    </div>

                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
