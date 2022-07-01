import "./style.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Overview from "./components/Overview";
import { useEffect, useRef, useState } from "react";
import { themeContext } from "./Context";

function App() {
  const [dark, setDark] = useState(false);
  const topBg = useRef(null);
  const theme = {
    dark,
    setDark,
  };
  useEffect(() => {
    const goDark = () => {
      if (dark === true) {
        document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
        topBg.current.style.backgroundColor = "hsl(232, 19%, 15%)";
      } else {
        document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
        topBg.current.style.backgroundColor = "hsl(225, 100%, 98%)";
      }
    };
    goDark();
  }, [dark]);
  return (
    <themeContext.Provider value={theme}>
      <div className="App" ref={topBg}>
        <div className="container">
          <Header />
          <Main />
          <Overview />
        </div>
      </div>
    </themeContext.Provider>
  );
}

export default App;
