import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

export default function Navbar() {
  const {user,logOut}= useContext(AuthContext);
  const [isAdmin]=useAdmin();
  const [cart]=useCart()

  const handleLogOut =()=>{
    logOut()
    .then(()=>{})
    .catch(error=> console.log(error));
  }
  if(user){
    console.log("User login")
  }else{
    console.log("user not login")
  }
    
  return (
    <div>
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm   dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
        {
      isAdmin ? <li><NavLink to= '/dashboard/adminhome' >Dashboard </NavLink> </li> :
      <li><NavLink to= '/dashboard/userhome' >Dashboard </NavLink> </li>
       }
        <li><NavLink to= '/order/salad'>Order Food</NavLink></li>
        <li>
      <NavLink to='/dashboard/mycart'>
          <FaShoppingCart/>
              <p  className="badge badge-secondary">{cart?.length || 0}</p>
      </NavLink>
    </li>
        {
      user? <>
      <li onClick={handleLogOut} ><NavLink>Log Out</NavLink></li>
      
      </> : 
      <>
      <li><NavLink to='/login'>Login</NavLink></li>
      </>
    }
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">aA Resturent</a>
  </div>
  <div className="navbar-center hidden  lg:flex">
    <ul className="menu menu-horizontal px-1  ">
    <li><NavLink className="hover:text-white" to='/'>Home</NavLink></li>
    <li><NavLink className="hover:text-white" to='/menu'>Our Menu</NavLink></li>
    {
      isAdmin ? <li><NavLink className="hover:text-white" to= '/dashboard/adminhome' >Dashboard </NavLink> </li> :
      <li><NavLink className="hover:text-white" to= '/dashboard/userhome' >Dashboard </NavLink> </li>
    }
    <li >
      <NavLink className="hover:text-white" to='/dashboard/mycart'>
     
          <FaShoppingCart className="hover:text-white text-3xl"/>
          <p  className="badge badge-primary  absolute right-0 top-0 ">{cart?.length || 0}</p>
         
      </NavLink>
    </li>
    <li><NavLink className="hover:text-white" to= '/order/salad'>Order Food</NavLink></li>
    
    
    {
      user? <>
     <li onClick={handleLogOut} >
      <NavLink className="hover:text-white">Log Out</NavLink>
     </li>
      
      </> : 
      <>
      <li><NavLink className="hover:text-white" to='/login'>Login</NavLink></li>
      </>
    }
    </ul>
  </div>
</div>
    </div>
  )
}
