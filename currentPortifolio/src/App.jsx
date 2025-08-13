import Header from "./components/Header.jsx"
import './app.css'
import myData from './assets/header.js'
import SideBar from "./components/Sidebar.jsx";
import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import Card from "./components/Card.jsx";
import Carousel from "./components/Carousel.jsx";
import CardProject from "./components/CardProject.jsx";
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
          {openTab && <SideBar data={myData}></SideBar>}
        </div>
        <div className="mobile-nav">
          <Header data={myData} />
        </div>
        <main className="main-content">
          <Card />
          <Carousel />
          <CardProject
            title="BachQuizz"
            description="An interactive quiz application built with React and Vite. This project tests your knowledge through a series of multiple-choice questions and showcases core React concepts like complex state management, conditional rendering, and dynamic data handling.."
            link="https://github.com/VitorPio7/QuizTest"
            img="quiz.png"
          />
          <CardProject
            title="TaskFlow"
            description="TaskFlow is a task management application designed to help users efficiently organize and manage their daily activities. Built using React for a dynamic user interface and Tailwind CSS for modern, responsive styling, TaskFlow offers the following features."
            link="https://github.com/VitorPio7/TaskFlow"
            img="todoList.png"
          />
          <CardProject
            title="Metaverse"
            description="While the initial idea was to create a full tech news journal, Metaverse turned into something even more valuable: a practical playground to sharpen my frontend development skills using React."
            link="https://github.com/VitorPio7/MetaverseWebSite"
            img="metaverse.png"
          />
          <CardProject
            title="Tenzie Game"
            description="A fun and interactive dice game built with React and Vite. The goal is to get all ten dice to show the same number in the fewest rolls possible."
            link="https://github.com/VitorPio7/TenzieGame"
            img="TenzieGame.png"
          />
          <CardProject
            title="React Library"
            description="With this library the dev has the opportunity to reuse some badges and cards in react."
            link="https://github.com/VitorPio7/Library"
            img="bagde.jpeg"
          />
          <CardProject
            title="Eventura"
            description="Eventura is a full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js). It provides a seamless and intuitive platform for users to discover, create, and book events happening around them."
            link="https://github.com/VitorPio7/Eventura"
            img="eventura.png"
          />
          <CardProject
            title="Simple Ecommerce"
            description="A clean, modern, and fully responsive front-end e-commerce application built with React. This project demonstrates core React principles, focusing on state management with the Context API for a seamless shopping cart experience."
            link="https://github.com/VitorPio7/Simple-Ecommerce"
            img="catalogo.png"
          />
          <CardProject
            title="React To-Do list app"
            description="A clean and simple to-do list application built with React and Vite. This project serves as a practical demonstration of fundamental React concepts, including state management, component props, event handling, and list rendering."
            link="https://github.com/VitorPio7/myListInReact"
            img="myListReact.png"
          />
        </main>
      </div>
    </>
  );
}
