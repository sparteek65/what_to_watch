import logo from "./logo.svg";
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
          style={{ minHeight: "50px", maxHeight: "60px" }}
        >
          <p>What to watch</p>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <HomeScreen
                currentOtt={CurrentOtt}
                setcurrentOtt={setCurrentOtt}
              />
            }
          />
          <Route
            path="/detail/"
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
