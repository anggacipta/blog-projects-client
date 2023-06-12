import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <>
      <nav
        className='w-full py-4 border-t border-b bg-gray-100'
        x-data='{ open: false }'>
        {/* <div className='block sm:hidden'>
          <a
            href='#'
            className='block md:hidden text-base font-bold uppercase text-center justify-center items-center'
            click='open = !open'>
            Topics <i className='fas ml-2'></i>
          </a>
        </div> */}
        <div className='w-full flex-grow sm:flex sm:items-center sm:w-auto'>
          <div className='w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2'>
            {username && (
              <>
                <span className='py-2 px-4'>Hello, {username}</span>
                <Link to='/create' className='py-2 px-4'>
                  Buat blog baru
                </Link>
                <Link to='/gallery' className='py-2 px-4'>
                  Galeri
                </Link>
                <Link to='/creategallery' className='py-2 px-4'>
                  Buat gambar baru
                </Link>
                <a onClick={logout} className='py-2 px-4' href={"/"}>
                  Logout
                </a>
              </>
            )}
            {!username && (
              <>
                <Link to='/' className='py-2 px-4'>
                  Blog
                </Link>
                <Link to='/gallery' className='py-2 px-4'>
                  Galeri
                </Link>
                <Link to='/about' className='py-2 px-4'>
                  Cerita kami
                </Link>
                <Link to='/login' className='py-2 px-4'>
                  Login
                </Link>
                <Link to='/register' className='py-2 px-4'>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
