"use client"
import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { FiX, FiMenu } from 'react-icons/fi';
import { NAV_LINKS } from '../constants';
import Link from 'next/link';

const Navbar = ({ section }) => {
  const [click, setClick] = useState(false);

  function toggleMenu() {
    setClick(!click);
  }

  return (
    <nav className="h-14 bg-black opacity-80 flex justify-between items-center rounded-full mt-5 mx-[5%] drop-shadow-[0_10px_10px_rgba(0,0,0,0.7)] z-[2] fixed w-[90%]">
      <div>
        <Link
          href="Landing" // Element ID to scroll to
          spy={true}
          smooth={true}
          offset={-70} // Adjust offset as needed
          duration={500}
          className="pl-2 pt-1 hover:opacity-70 active:opacity-50 inline-block cursor-pointer"
        >
          <img className="w-40 rounded-full" src="/resource/images/codevector.png" alt="" />
        </Link>
      </div>
      <ul className={`lg:flex items-center justify-center mr-10 ${click ? 'flex flex-col bg-black w-full absolute top-[60px] left-[3px] rounded-xl text-3xl gap-5 py-5' : 'hidden'}`}>
        {NAV_LINKS.map((link, key) => (
          <li key={key} className="md:py-4 md:justify-center mx-2">
            <ScrollLink
              to={link.href} // Element ID to scroll to
              spy={true}
              smooth={true}
              offset={-70} // Adjust offset as needed
              duration={500}
              className="hover:opacity-70 active:opacity-50 cursor-pointer text-gray-400"
            >
              {link.label}
            </ScrollLink>
          </li>
        ))}
      </ul>

      <div className="lg:hidden">
        <button onClick={toggleMenu} className="mr-5 hover:opacity-70 active:opacity-50 cursor-pointer">
          {click ? <FiX className="text-gray-400 text-3xl" /> : <FiMenu className="text-gray-400 text-3xl" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
