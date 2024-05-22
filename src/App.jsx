import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Value from "./components/Value.jsx"
import JoinQuiz from "./components/JoinQuiz.jsx"
import Subscriptions from "./components/Subscriptions.jsx"
import ScienceQuiz from "./components/ScienceQuiz.jsx"
import GeoQuiz from "./components/GeoQuiz.jsx"
import HistoryQuiz from "./components/HistoryQuiz.jsx"

import {
  RouterProvider,
  NavLink,
  Router,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from './components/Layout.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path=""
        element={
          <>
           <Hero/>
           <About/>
           <Value/>
           <JoinQuiz/>
          </>
        }
      />
      <Route path="/science-quiz" element={<ScienceQuiz/>} />
      <Route path="/subscriptions" element={<Subscriptions/>} />
      <Route path="/geography-quiz" element={<GeoQuiz/>} />
      <Route path="/history-quiz" element={<HistoryQuiz/>} />
     
    </Route>
  )
);


function App() {


  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
