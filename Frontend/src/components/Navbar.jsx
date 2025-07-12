import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
   const navigate = useNavigate();


  return (
    <>
    <nav className='bg-white shadow-md px-5 py-3 z-1000'>
        <section className='max-w-7xl mx-auto flex justify-between items-center'>
            <div>
                <h1 className='font-bold text-2xl'>Book<span className='text-purple-500'>Nest.</span></h1>
            </div>
            <div className='flex items-center gap-6'>
                <NavLink to='/' className={({ isActive }) => `text-sm font-medium transition hover:text-purple-500 ${ isActive ? 'text-purple-600' : 'text-gray-700'}`}>
                    Home
                </NavLink>
                <NavLink to='/rooms' className={({ isActive }) => `text-sm font-medium transition hover:text-purple-500 ${ isActive ? 'text-purple-600' : 'text-gray-700'}`}>
                    Rooms
                </NavLink>
                 <NavLink to='/admin/add' className={({ isActive }) => `text-sm font-medium transition hover:text-purple-500 ${ isActive ? 'text-purple-600' : 'text-gray-700'}`}>
                    Add Hotel
                </NavLink>
                <NavLink to='/contact' className={({ isActive }) => `text-sm font-medium transition hover:text-purple-500 ${ isActive ? 'text-purple-600' : 'text-gray-700'}`} >
                    Contact
                </NavLink>
                <NavLink to='/login'>
                    <button className='bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition'>Login</button>
                </NavLink>
                <NavLink to='/register' >
                    <button className='border border-purple-600 text-purple-600 px-4 py-2 rounded hover:bg-orange-50 transition'>Register</button>
                </NavLink>
            </div>
        </section>
    </nav>
    </>
  );
};

export default Navbar;
