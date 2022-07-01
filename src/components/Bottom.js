import {
  CardBottom,
  FollowingText,
  GotoLink,
  OverviewText,
} from "./Init.jsx";
import iconDown from "../images/icon-down.svg";
import iconUp from "../images/icon-up.svg";
import facebook_icon from "../images/icon-facebook.svg";
import ig_icon from "../images/icon-instagram.svg";
import youtube_icon from "../images/icon-youtube.svg";
import twitter_icon from "../images/icon-twitter.svg";

export default function Bottom() {
  return (
    <>
      <OverviewText>Overview - Today</OverviewText>
      <div className="overview">
        <CardBottom>
          <div className="overview-header">
            <p>Page Views</p>
            <img src={facebook_icon} alt="fb-icon" />
          </div>
          <div className="overview-bottom">
            <FollowingText>87</FollowingText>
            <div className="rating rating-up">
              <img src={iconUp} alt="iconUp" />
              <p className="rating-text">3%</p>
            </div>
          </div>
        </CardBottom>
        <CardBottom>
          <div className="overview-header">
            <p>Likes</p>
            <img src={facebook_icon} alt="fb-icon" />
          </div>
          <div className="overview-bottom">
            <FollowingText>52</FollowingText>
            <div className="rating rating-down">
              <img src={iconDown} alt="iconDown" />
              <p className="rating-text">2%</p>
            </div>
          </div>
        </CardBottom>
        <CardBottom>
          <div className="overview-header">
            <p>Likes</p>
            <img src={ig_icon} alt="ig-icon" />
          </div>
          <div className="overview-bottom">
            <FollowingText>5462</FollowingText>
            <div className="rating rating-up">
              <img src={iconUp} alt="iconUp" />
              <p className="rating-text">2257%</p>
            </div>
          </div>
        </CardBottom>
        <CardBottom>
          <div className="overview-header">
            <p>Profile Views</p>
            <img src={ig_icon} alt="ig-icon" />
          </div>
          <div className="overview-bottom">
            <FollowingText>52k</FollowingText>
            <div className="rating rating-up">
              <img src={iconUp} alt="iconUp" />
              <p className="rating-text">1375%</p>
            </div>
          </div>
        </CardBottom>
        <CardBottom>
          <div className="overview-header">
            <p>Retweets</p>
            <img src={twitter_icon} alt="twitt-icon" />
          </div>
          <div className="overview-bottom">
            <FollowingText>117</FollowingText>
            <div className="rating rating-up">
              <img src={iconUp} alt="iconUp" />
              <p className="rating-text">303%</p>
            </div>
          </div>
        </CardBottom>{" "}
        <CardBottom>
          <div className="overview-header">
            <p>Likes</p>
            <img src={twitter_icon} alt="twitt-icon" />
          </div>
          <div className="overview-bottom">
            <FollowingText>507</FollowingText>
            <div className="rating rating-up">
              <img src={iconUp} alt="iconUp" />
              <p className="rating-text">553%</p>
            </div>
          </div>
        </CardBottom>
        <CardBottom>
          <div className="overview-header">
            <p>Likes</p>
            <img src={youtube_icon} alt="yt-icon" />
          </div>
          <div className="overview-bottom">
            <FollowingText>107</FollowingText>
            <div className="rating rating-down">
              <img src={iconDown} alt="iconDown" />
              <p className="rating-text">19%</p>
            </div>
          </div>
        </CardBottom>
        <CardBottom>
          <div className="overview-header">
            <p>Total Views</p>
            <img src={youtube_icon} alt="yt-icon" />
          </div>
          <div className="overview-bottom">
            <FollowingText>1407</FollowingText>
            <div className="rating rating-down">
              <img src={iconDown} alt="iconDown" />
              <p className="rating-text">12%</p>
            </div>
          </div>
        </CardBottom>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <GotoLink
          link="https://www.frontendmentor.io?ref=challenge"
          children="Frontend Mentor"
        />
        . Coded by{" "}
        <GotoLink link="https://github.com/jeffcoulombe/social-media-dashboard-challenge" children="Jeff Coulombe" />.
      </div>
    </>
  );
}
