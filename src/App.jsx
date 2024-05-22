import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Value from "./components/Value.jsx"
import JoinQuiz from "./components/JoinQuiz.jsx"
import JoinQuiz2 from "./components/JoinQuiz2.jsx"
import JoinQuiz3 from "./components/JoinQuiz3.jsx"
import Footer from "./components/Footer.jsx"
import Subscriptions from "./components/Subscriptions.jsx"
import ScienceQuiz from "./components/ScienceQuiz.jsx"


function App() {


  return (
    <>
      <Navbar/>
      {/* <Subscriptions/> */}
      {/* <ScienceQuiz/> */}
      <Hero/>
      <About/>
      <Value/>
      <JoinQuiz/>
      {/* <JoinQuiz2/> */}
      {/* <JoinQuiz3/> */}
      <Footer/>
    </>
  )
}

export default App
