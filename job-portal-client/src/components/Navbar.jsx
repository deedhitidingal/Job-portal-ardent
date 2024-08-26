import React from 'react'
import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useAuth } from '../store/Auth';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleIsMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const {User, isLoading, token} = useAuth();
    if (token && isLoading) {
        return <h1>Loading...</h1>;
    }

    const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
    console.log("Current user", user);
    const {isLoggedIn} = useAuth();

    return (
        <div className='max-w-full container mx-auto xl:px-24 px-4 fixed top-0 w-full z-10 hover:shadow-md bg-slate-100 drop-shadow-xl'>
            <nav className='flex justify-between items-center py-2'>
                <div className='flex space-x-2'>
                    <img src="\public\images\Logo.svg" className='size-[70px]' alt="Logo" />
                    <a href="/" className='flex items-center text-2xl text-blue-500 font-semibold font-sans'>JOB FINDER</a>
                </div>
                <ul className='hidden md:flex gap-12'>
                    <NavLink to="/"><li>Start a search</li></NavLink>
                    <NavLink to="/current-jobs"><li>Current Jobs</li></NavLink>
                    <NavLink to="/salary-estimate"><li>Salary Estimate</li></NavLink>
                    {/* <NavLink to="/post-job"><li>Post job</li></NavLink> */}
                    {User?.isAdmin ? (
                        <NavLink className={(e) => e.isActive ? "red" : ""} to="/admin">
                            <li>Company Dashboard</li>
                        </NavLink>
                    ) : (
                        <NavLink className={(e) => e.isActive ? "red" : ""} to="/Userdash">
                            <li>My Dashboard</li>
                        </NavLink>
                    )}
                </ul>

                <div className='text-base font-medium space-x-5 hidden lg:block'>
                    {isLoggedIn || isAuthenticated ? (
                        <>
                            <span className='text-gray-500'>{user?.name || 'User'}</span>
                            <Link to="/logout" onClick={() => logout()} className='py-2 px-5 border rounded text-white bg-blue-500'>
                                Logout
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className='py-2 px-5 border rounded'>Log in</Link>
                            <Link to="/registercard" className='py-2 px-5 border rounded text-white bg-blue-500'>Register</Link>
                        </>
                    )}
                </div>

                {/*for mobile view*/}
                <div className='md:hidden block'>
                    <button onClick={handleIsMenuToggler}>
                        {isMenuOpen ? <RxCross2 className='w-5 h-5' /> : <FaBarsStaggered className='w-5 h-5' />}
                    </button>
                </div>
            </nav>

            {/*navitems for mobile*/}
            <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
                <ul className='text-white first:text-white py-1'>
                    <NavLink to="/" ><li className='py-1'>Home</li></NavLink>
                    <NavLink to="/current-jobs"><li className='py-1'>Current Jobs</li></NavLink>
                    <NavLink to="/salary-estimate"><li className='py-1'>Salary Estimate</li></NavLink>
                    {/* <NavLink to="/post-job"><li>Post job</li></NavLink> */}
                    {User?.isAdmin && (
                        <NavLink className={(e) => e.isActive ? "red" : ""} to="/admin">
                            <li className='p-[20px]'>Company Dashboard</li>
                        </NavLink>
                    )}
                    <div className='flex py-4 gap-2'>
                        {isLoggedIn ? (
                            <>
                                <img
                                    src={user?.picture || 'default-picture-url'}
                                    alt={`${user?.name || 'User'}'s profile`}
                                    className="w-10 h-10 rounded-full"
                                />
                                <span>{user?.name || 'User'}</span>
                                <Link to="/logout" className='py-2 px-5 border rounded text-white bg-blue-500'>
                                    Logout
                                </Link>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/login" className='py-2 px-5 border rounded'>Log in</Link>
                                </li>
                                <li>
                                    <Link to="/registercard" className='py-2 px-5 border rounded bg-blue-400'>Sign up</Link>
                                </li>
                            </>
                        )}
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
