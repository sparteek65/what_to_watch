import logo from "./static/logo.png";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HomeScreen } from "./screens/homescreen";
import { DetailPage } from "./screens/detailPage";

function App() {
  const [CurrentOtt, setCurrentOtt] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        <header
          className="App-header"
          style={{
            minHeight: "50px",
            maxHeight: "60px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img src={logo} width="72px" height="68px"></img>
          &nbsp;&nbsp;&nbsp;
          <p>What to watch</p>
        </header>
        <Routes>
          <Route
            path="/what_to_watch/"
            element={
              <HomeScreen
                currentOtt={CurrentOtt}
                setcurrentOtt={setCurrentOtt}
              />
            }
          />
          <Route
            path="/what_to_watch/detail/"
            element={
              <DetailPage
                currentOtt={CurrentOtt}
                setcurrentOtt={setCurrentOtt}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
