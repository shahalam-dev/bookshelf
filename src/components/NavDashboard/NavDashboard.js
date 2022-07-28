import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../Assets/images/Logo/logoBookself-.png";
import userImg from "../../Assets/images/icon/001-user.png";
import bag from "../../Assets/images/icon//002-bag.png";
import wishlist from "../../Assets/images/icon/003-heart.png";
import { signOut } from "firebase/auth";
import downArrow from "../../Assets/images/icon/down-arrow.png";

import NavTopbar from "../NavTopbar/NavTopbar";
const NavDashboard = ({ children }) => {
  const [dark, setDark] = useState(false);

  const [user] = useAuthState(auth);

  const handelSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  // h-13vh
  return (
    <div>
      <div class="drawer drawer-end  " data-theme={dark ? "dark" : "light"}>
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          
          {/* <!-- Navbar --> */}
          <div class="w-full  navbar bg-white p-20 border-b-2 border-primary ">
            <div style={{margin:"0px 0px 0px -45px"}} class=" hidden lg:flex  flex-1 px-2 ">
              <NavLink to="/" className="text-white text-sm p-2 bg-primary rounded-md">
               
                Back to home
              </NavLink>
            </div>
            {/* mobile button */}
            <div class="flex-none lg:hidden mr-5">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            {/* desktop */}
            <div className="flex-none mx-96 hidden lg:block">
              <ul className="menu menu-vertical  ">
                {/* <!-- Navbar menu content here --> */}
                <li className="text-2xl text-primary uppercase text-center font-bold">
                  Weclome to 
                </li>
                <li>
                  <img className="" height={45}
                      width={150} alt="" src={logo} />
                </li>
                <li className="text-2xl text-secondary uppercase text-center font-bold">
                  Deshbord
                </li>
              </ul>
            </div>

            {/* dark button */}
            <div>
              {/* user image */}

              <div className="user mr-4 ">
                {user ? (
                  <span tabindex="0">
                    <img
                      onClick={handelSignOut}
                      className=" rounded-2xl"
                      alt=""
                      height={30}
                      width={30}
                      src={user?.photoURL ? user?.photoURL : userImg}
                    />

                  </span>
                ) : (
                  <NavLink to="/login" className="rounded-lg">
                    <img
                      className=" mr-4 rounded-2xl"
                      height={30}
                      width={30}
                      alt=""
                      src={userImg}
                    />
                  </NavLink>
                )}
              </div>

              {/* dark button */}
              <label class="swap swap-rotate ">
                {/* <!-- this hidden checkbox controls the state --> */}
                <input type="checkbox" onClick={() => setDark(!dark)} />

                {/* <!-- sun icon --> */}
                <svg
                  class="swap-on fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* <!-- Dark moon icon --> */}
                <svg
                  className="swap-off fill-current w-8 h-11"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </div>

          {/* <!-- Page content here --> */}
          {children}
        </div>

        {/* mobile-phone */}
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/' className='text-lg text-[#00124E] font-bold'>Home</Link></li>
            <li><Link to='/dashboard' className='text-lg text-[#00124E] font-bold'>My profile</Link></li>
       <li><Link to='/dashboard/myorder' className='text-lg text-[#00124E] font-bold'>My Order</Link></li>
        <li><Link to='/dashboard/addreview' className='text-lg text-[#00124E] font-bold'>Add a review</Link></li>
        
        <li><Link to='/dashboard/allusers' className='text-lg text-[#00124E] font-bold'>All Users</Link></li>
        <li><Link to='/dashboard/allorders' className='text-lg text-[#00124E] font-bold'>All Orders</Link></li>
        <li><Link to='/dashboard/allauthor' className='text-lg text-[#00124E] font-bold'>All Authors</Link></li>
        <li><Link to='/dashboard/allpublisher' className='text-lg text-[#00124E] font-bold'>All Publishers</Link></li>
        <li><Link to='/dashboard/orderhistory' className='text-lg text-[#00124E] font-bold'>Order History</Link></li>
        <li><Link to='/dashboard/addproduct' className='text-lg text-[#00124E] font-bold'>All Product</Link></li>
        <li className='text-lg text-[#00124E] font-bold pl-5' onClick={() => signOut(auth)}>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavDashboard;
// 