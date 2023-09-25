import { Outlet } from "react-router-dom"
import Footer from "../pages/Shared/Footer/Footer"
import Navbar from "../pages/Shared/Navbar/Navbar"


function Main() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main