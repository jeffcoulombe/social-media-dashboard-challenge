import { useContext, useEffect, useRef } from "react";
import { themeContext } from "../Context";

export default function Header() {
  const theme = useContext(themeContext);
  const headText = useRef(null);
  useEffect(() => {
    const goDark = () => {
      if (theme.dark === true) {
        headText.current.style.color = "white";
      } else {
        headText.current.style.color = "hsl(230, 17%, 14%)";
      }
    };
    goDark();
  }, [theme.dark]);

  return (
    <header>
      <div className="title-container">
        <h1 ref={headText}>Social Media Dashboard</h1>
        <p className="title-followers">Total Followers 23,004</p>
      </div>
      <div className="theme">
        <p>Dark Mode</p>
        <input
          type="checkbox"
          onChange={() =>
            theme.dark ? theme.setDark(false) : theme.setDark(true)
          }
          id="switch"
        />
        <label htmlFor="switch">toggle</label>
      </div>
    </header>
  );
}
