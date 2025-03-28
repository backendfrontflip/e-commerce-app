import { useState, useEffect, useRef } from "react";
import { FaShoppingCart, FaBars } from "react-icons/fa";

function Header({ toggleCart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="w-full max-w-7xl mx-auto flex items-center justify-between p-8 border-b border-slate-400 relative">
      <div className="flex items-center gap-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
          className="lg:hidden text-2xl text-gray-700 hover:text-black"
        >
          <FaBars />
        </button>

        <img src="/images/logo.svg" alt="Logo" />

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6 text-gray-600">
            <li className="hover:text-black cursor-pointer">Collection</li>
            <li className="hover:text-black cursor-pointer">Men</li>
            <li className="hover:text-black cursor-pointer">Women</li>
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
          </ul>
        </nav>
      </div>

      <div className="relative flex items-center gap-6">
        <button onClick={toggleCart}>
          <FaShoppingCart className="text-2xl text-gray-700 hover:text-black" />
        </button>
        <button>
          <img
            src="/images/image-avatar.png"
            alt="User Avatar"
            className="w-12 rounded-full border-2 border-gray-300 hover:border-black"
          />
        </button>
      </div>

      {isMenuOpen && (
        <nav
          ref={menuRef}
          className="absolute top-20 left-1/2 transform -translate-x-1/2 w-10/12 max-w-xs bg-white shadow-lg p-6 z-50 lg:hidden rounded-lg"
        >
          <ul className="flex flex-col gap-4 text-gray-700 text-center">
            <li className="hover:text-black cursor-pointer">Collection</li>
            <li className="hover:text-black cursor-pointer">Men</li>
            <li className="hover:text-black cursor-pointer">Women</li>
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
