import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Timer from "./Container/Timer";
import Stopwatch from "./Container/StopWatch";
import styled from "styled-components";
import { createBrowserHistory } from "history";

const ContainerUI = styled.div`
  ul {
    list-style-type: none;
    li {
      display: inline-block;
      a {
        text-decoration: none;
        display: inline-block;
        border: 1px solid black;
        border-radius: 5px;
        background: black;
        color: white;
        padding: 10px 30px;
        margin-right: 20px;
        &.active {
          background: #0303036e;
          border-color: #0303036e;
        }
      }
    }
  }
`;

function App() {
  const history = createBrowserHistory();
  return (
    <ContainerUI className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Sreeni's Clock</h1>
        <nav>
          <ul>
            <li>
              <a
                className={
                  history.location.pathname === "/timer" ? "active" : ""
                }
                href="/timer"
              >
                Timer
              </a>
            </li>
            <li>
              <a
                className={
                  history.location.pathname === "/stop" ? "active" : ""
                }
                href="/stop"
              >
                Stopwatch
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Timer />} />
              <Route path="/timer" element={<Timer />} />
              <Route path="/stop" element={<Stopwatch />} />
            </Routes>
          </BrowserRouter>
        </div>
      </header>
    </ContainerUI>
  );
}

export default App;
