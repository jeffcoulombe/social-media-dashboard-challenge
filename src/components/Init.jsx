import { useContext, useEffect, useRef } from "react";
import { themeContext } from "../Context";

export function CardTop(props) {
  const theme = useContext(themeContext);
  const topCard = useRef(null);
  useEffect(() => {
    const goDark = () => {
      if (theme.dark === true) {
        topCard.current.style.backgroundColor = "hsl(228, 28%, 20%)";
      } else {
        topCard.current.style.backgroundColor = "hsl(227, 47%, 96%)";
      }
    };
    goDark();
  }, [theme.dark]);    
  return (
    <div 
      onMouseEnter={ () => topCard.current.style.transform = "scale(1.2)" }
      onMouseLeave={ () => topCard.current.style.transform = "scale(1)" }
      ref={topCard}
      className="card-main"
      id={props.id}
      style={{
        display: "flex",
        width: "200px",
        margin: "15px",
        padding: "10px",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {props.children}
    </div>
  );
}

export function CardBottom(props) {
  const theme = useContext(themeContext);
  const bottomCard = useRef(null);
  useEffect(() => {
    const goDark = () => {
      if (theme.dark === true) {
        bottomCard.current.style.backgroundColor = "hsl(228, 28%, 20%)";
      } else {
        bottomCard.current.style.backgroundColor = "hsl(227, 47%, 96%)";
      }
    };
    goDark();
  }, [theme.dark]);
  return (
    <div
      onMouseEnter={ () => bottomCard.current.style.transform = "scale(1.1)" }
      onMouseLeave={ () => bottomCard.current.style.transform = "scale(1)" }
      ref={bottomCard}
      className="CardBottom"
      style={{
        display: "flex",
        flexFlow: "column wrap",
        width: "190px",
        padding: "5px 20px",
        margin: "10px",
        backgroundColor: "hsl(227, 47%, 96%)",
      }}
    >
      {props.children}
    </div>
  );
}

export function OverviewText(props) {
  const theme = useContext(themeContext);
  const overvieWText = useRef(null);
  useEffect(() => {
    const goDark = () => {
      if (theme.dark === true) {
        overvieWText.current.style.color = "white";
      } else {
        overvieWText.current.style.color = " hsl(228, 12%, 44%)";
      }
    };
    goDark();
  }, [theme.dark]);
  return (
    <p
      ref={overvieWText}
      className="follow-text"
      style={{
        fontSize: "18px",
        marginBottom: "10px",
        marginTop: "15px",
      }}
    >
      {props.children}
    </p>
  );
}

export function FollowingText(props) {
  const theme = useContext(themeContext);
  const FollowingText = useRef(null);
  useEffect(() => {
    const goDark = () => {
      if (theme.dark === true) {
        FollowingText.current.style.color = "white";
      } else {
        FollowingText.current.style.color = "hsl(230, 17%, 14%)";
      }
    };
    goDark();
  }, [theme.dark]);
  return (
    <p
      ref={FollowingText}
      className="follow-text"
      style={{
        fontSize: "18px",
        marginBottom: "10px",
        marginTop: "15px",
      }}
    >
      {props.children}
    </p>
  );
}

export function NumberText(props) {
  const theme = useContext(themeContext);
  const NumberText = useRef(null);
  useEffect(() => {
    const goDark = () => {
      if (theme.dark === true) {
        NumberText.current.style.color = "white";
      } else {
        NumberText.current.style.color = "hsl(230, 17%, 14%)";
      }
    };
    goDark();
  }, [theme.dark]);
  return (
    <p
      ref={NumberText}
      className="total-text"
      style={{
        marginTop: "10px",
        marginBottom: "10px",
        fontSize: "40px",
      }}
    >
      {props.children}
    </p>
  );
}

export function GotoLink(props) {
  const theme = useContext(themeContext);
  const GotoLink = useRef(null);
  useEffect(() => {
    const goDark = () => {
      if (theme.dark === true) {
        GotoLink.current.style.color = "white";
      } else {
        GotoLink.current.style.color = "hsl(230, 17%, 14%)";
      }
    };
    goDark();
  }, [theme.dark]);
  return (
    <a ref={GotoLink} target="_blank" rel="noreferrer" href={props.link}>
      {props.children}
    </a>
  );
}
