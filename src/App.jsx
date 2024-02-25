import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './App.css'
import { MainLayout } from "./Layout/MainLayout";
import { FrontPage } from "./Pages/FrontPage/FrontPage";
import { EventsPage } from "./Pages/EventsPage/EventsPage";
import { ActorsPage } from "./Pages/ActorsPage/ActorsPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<FrontPage/>}/>
          <Route path="/performances&events" element={<EventsPage/>}/>
          <Route path="/actors" element={<ActorsPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
