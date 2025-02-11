'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='container pt-8 px-4 sm:px-8'>
      <div className='flex justify-between items-center'>
        {/* Logo or Home Link */}
        <Link href="#hero" className="text-xl font-bold">
          <span classNmae="text-white">Code</span> <span className="text-blue-500">With Hamza</span>
        </Link>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex gap-10 lg:gap-16`}>
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
            <li
              key={index}
              className="menuLink relative transition-transform duration-200 hover:-translate-y-0.5 hover:text-blue-400"
            >
              <Link href={`#${item.toLowerCase()}`}>{item}</Link>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu size={30} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className='flex flex-col items-center gap-6 mt-4 md:hidden'>
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
            <li
              key={index}
              className="menuLink transition-transform duration-200 hover:text-blue-400"
            >
              <Link href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
