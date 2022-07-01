import { CardTop, NumberText } from "./Init.jsx";
import iconDown from "../images/icon-down.svg";
import iconUp from "../images/icon-up.svg";
import facebook_icon from "../images/icon-facebook.svg";
import ig_icon from "../images/icon-instagram.svg";
import youtube_icon from "../images/icon-youtube.svg";
import twitter_icon from "../images/icon-twitter.svg";

export default function Main() {
  return (
    <div className="main-content">
      <CardTop id="facebook-main">
        <div className="title-main">
          <img src={facebook_icon} alt="fb_icon" />
          <p className="username">@jeffcoulombe</p>
        </div>
        <div className="num-followers">
          <NumberText>1987</NumberText>
          <p className="text-followers">FOLLOWERS</p>
        </div>
        <div className="rating rating-up">
          <img src={iconUp} alt="iconUp" />
          <p className="rating-text">12 Today</p>
        </div>
      </CardTop>
      <CardTop id="twitter-main">
        <div className="title-main">
          <img src={twitter_icon} alt="twitt_icon" />
          <p className="username">@jeffcoulombe</p>
        </div>
        <div className="num-followers">
          <NumberText>1044</NumberText>
          <p className="text-followers">FOLLOWERS</p>
        </div>
        <div className="rating rating-up">
          <img src={iconUp} alt="iconUp" />
          <p className="rating-text">99 Today</p>
        </div>
      </CardTop>
      <CardTop id="instagram-main">
        <div className="title-main">
          <img src={ig_icon} alt="ig_icon" />
          <p className="username">@jeffcoulombe</p>
        </div>
        <div className="num-followers">
          <NumberText>11k</NumberText>
          <p className="text-followers">FOLLOWERS</p>
        </div>
        <div className="rating rating-up">
          <img src={iconUp} alt="iconUp" />
          <p className="rating-text">1099 Today</p>
        </div>
      </CardTop>
      <CardTop id="youtube-main">
        <div className="title-main">
          <img src={youtube_icon} alt="youtube_icon" />
          <p className="username">@jeffcoulombe</p>
        </div>
        <div className="num-followers">
          <NumberText>8239</NumberText>
          <p className="text-followers">SUBSCRIBERS</p>
        </div>
        <div className="rating rating-down">
          <img src={iconDown} alt="iconDown" />
          <p className="rating-text">144 Today</p>
        </div>
      </CardTop>
    </div>
  );
}
