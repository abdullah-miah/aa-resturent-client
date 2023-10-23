import { NavLink, Outlet } from "react-router-dom";


import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import useCart from "../hooks/useCart";

function Dashboard() {
    const [cart]=useCart();
    //TODO : load fata from database when admin login
    const isAdmin = true;

    // const [isAdmin]= 
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
        {
          isAdmin ? <> <li> <NavLink to='/dashboard/history'><FaHome/> Admin Home</NavLink></li>
          <li> <NavLink to='/dashboard/reservations'><FaUtensils/>Add Items</NavLink></li>
          <li> <NavLink to='/dashboard/home'><FaHome></FaHome> Manage Items</NavLink></li>
          <li> <NavLink to='/dashboard/home'><FaBook/> Manage Bookings</NavLink></li>
          <li> <NavLink to='/dashboard/allusers'><FaUsers/> All Users</NavLink></li>
          </> :<> <li> <NavLink to='/dashboard/history'><FaWallet></FaWallet> Payment History</NavLink></li>
        <li> <NavLink to='/dashboard/reservations'><FaCalendarAlt/>Reservations</NavLink></li>
        <li> <NavLink to='/dashboard/home'><FaHome></FaHome> User Home</NavLink></li>
        <li> <NavLink to='/dashboard/mycart'>
             <FaShoppingCart/>My cart 
             <span  className="badge badge-secondary"> + {cart?.length || 0}</span>
             </NavLink>
             
             </li></>
        }
       
        <div className="divider"></div>
        <li><NavLink to= '/'><FaHome/>Home</NavLink></li>
        <li><NavLink to='/menu'>
             <AiOutlineMenuUnfold/>
             Menu</NavLink></li>
        <li><NavLink to= '/order/salad'> <BiFoodMenu/>Order Food
          
        </NavLink></li>
       
      </ul>
    
    </div>
  </div>
  )
}

export default Dashboard;