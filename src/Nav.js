import React from "react";
import logo from "./logo-vblog.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className='w-full py-4 bg-accentbg shadow'>
        <div className='w-full container mx-auto flex flex-wrap items-center justify-between'>
          <nav>
            <ul className='flex items-center justify-between font-bold text-sm text-white uppercase no-underline'>
              <li>
                <Link
                  className='hover:text-gray-200 hover:underline px-4'
                  to={"/"}>
                  <img src={logo} className='w-24 px-4' alt='' />
                </Link>
              </li>
            </ul>
          </nav>

          <div className='flex items-center text-lg no-underline text-white pr-6'>
            <a className='' href='#'>
              <i className='fab fa-facebook'></i>
            </a>
            <a className='pl-6' href='#'>
              <i className='fab fa-instagram'></i>
            </a>
            <a className='pl-6' href='#'>
              <i className='fab fa-twitter'></i>
            </a>
            <a className='pl-6' href='#'>
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
        </div>
      </nav>
      <div className='w-full container mx-auto'>
        <div className='flex flex-col items-center py-12'>
          <Link
            className='font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl text-center'
            to='/'>
            Vtuber Blog
          </Link>
          <p className='text-lg text-gray-600'>Berita tentang Vtuber terkini</p>
        </div>
      </div>
    </>
  );
};

export default Nav;
