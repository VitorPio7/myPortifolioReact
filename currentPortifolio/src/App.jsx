import Header from "./components/Header.jsx"
import './app.css'
import myData from './assets/header.js'
import SideBar from "./components/Sidebar.jsx";
import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
export default function App() {
  let [openTab,setCloseTab] = useState(false);
  return (
    <>
      <div className="app-layout">
        <div className="desktop-nav">
          <button onClick={() => setCloseTab((prevValeu) => !prevValeu)}>
            <TfiMenu
              style={{
                backgroundColor: "black",
                color: "white",
                height: "20px",
                width: "20px",
              }}
            />
          </button>
          {openTab && <SideBar data={myData}></SideBar> }
        </div>
        <div className="mobile-nav">
          <Header data={myData} />
        </div>
        <main className="main-content">
          <h1>Conteudo Principal</h1>
        </main>
      </div>
    </>
  );
}
