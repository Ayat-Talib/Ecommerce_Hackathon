import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import Link from "next/link"; // Import Link from next/link

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* Brand Logo */}
        <div className="text-2xl font-montserrat font-bold text-gray-800">Bandage</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-[#737373] font-bold text-sm">
          <Link href="/" className="hover:text-gray-900 transition">Home</Link>
          <Link href="/shop" className="hover:text-gray-900 transition">Shop</Link> {/* Link to Shop page */}
          <Link href="/about" className="hover:text-gray-900 transition">
          About
        </Link>
          <Link href="/blog" className="hover:text-gray-900 transition">Blog</Link>
          <Link href="/contact" className="hover:text-gray-900 transition">Contact</Link>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-4 text-blue-700 text-lg cursor-pointer">
          <div className="flex items-center space-x-2">
            <AiOutlineLogin className="hover:text-blue-900 transition" />
            <span className="hover:text-blue-900 transition">Register/Login</span>
          </div>

          <FaSearch className="hover:text-blue-900 transition" />
          <IoCartOutline className="hover:text-blue-900 transition" />
          <IoIosHeartEmpty className="hover:text-blue-900 transition" />
        </div>
      </div>
    </header>
  );
};

export default Header;
