import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/navbar/NavBar"
import "./sass/index.scss"
import "./sass/layout.scss"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import SinglePage from "./pages/singlePage/SinglePage"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Profile from "./pages/profile/Profile"
import Contract from "./pages/contract/Contract"
import Companies from "./pages/companies/Companies"
import About from "./pages/about/About"
import ContactUs from "./pages/contactUs/ContactUs"
import AddProprety from "./pages/addProprety/AddProprety"



const App: React.FC = () => {

  return (
    <>
      <div className="layout">
        <BrowserRouter>
          <NavBar />
          <div className="body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<SinglePage />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contract" element={<Contract />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/about" element={<About />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="/add-proprety" element={<AddProprety />} />
              <Route path="/profile/:userId" element={<Profile />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
