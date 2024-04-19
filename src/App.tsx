import React from "react"
import NavBar from "./components/navbar/NavBar"
import "./index.scss"
import "./layout.scss"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import EstateList from "./pages/estateList/EstateList"
import SinglePage from "./pages/singlePage/SinglePage"


const App: React.FC = () => {

  return (
    <>
      <div className="layout">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<EstateList />} />
            <Route path="/:id" element={<SinglePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
