import { NavLink, Outlet } from "react-router-dom";


import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import useCart from "../hooks/useCart";

function Dashboard() {
    const [cart]=useCart();
  return (
    <div className="drawer lg:drawer-open ">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
      {/* Page content here */}
      <Outlet></Outlet>
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    
    </div> 
    <div className="drawer-side ">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-80 min-h-full text-white  bg-[#D1A054]">
        {/* Sidebar content here */}
        <li> <NavLink to='/dashboard/history'><FaWallet></FaWallet> Payment History</NavLink></li>
        <li> <NavLink to='/dashboard/reservations'><FaCalendarAlt/>Reservations</NavLink></li>
        <li> <NavLink to='/dashboard/home'><FaHome></FaHome> User Home</NavLink></li>
        <li> <NavLink to='/dashboard/mycart'>
             <FaShoppingCart/>My cart 
             <span  className="badge badge-secondary">{cart?.length || 0}</span>
             </NavLink>
             
             </li>
        <div className="divider"></div>
        <li><NavLink to= '/'><FaHome/>Home</NavLink></li>
        <li><NavLink to='/menu'> Menu</NavLink></li>
       
      </ul>
    
    </div>
  </div>
  )
}

export default Dashboard;