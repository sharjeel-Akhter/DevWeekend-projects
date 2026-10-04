
import { useState } from "react";
import { Link } from "react-router";
import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop All", path: "/products" },
    { name: "Electronics", path: "/category/electronics" },
    { name: "Fashion", path: "/category/fashion" },
    { name: "Accessories", path: "/category/accessories" },
    { name: "Deals", path: "/deals" },
  ];

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      {/* Announcement */}
      <div className="bg-slate-900 text-white text-center py-2 text-xs">
        Free shipping on orders over $50
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-5 py-4">
        <div className="flex items-center justify-between gap-5">

          {/* Logo */}
          <Link to="/" className="text-2xl font-black tracking-tight text-slate-900">
            NEXORA<span className="text-blue-600">.</span>
          </Link>

          {/* Search */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Connect product search here
            }}
            className="hidden sm:flex flex-1 max-w-lg items-center bg-gray-100 rounded-full px-4 py-2.5"
          >
            <input
              type="search"
              placeholder="Search for products..."
              className="w-full bg-transparent outline-none text-sm text-gray-800"
            />
            <button type="submit" aria-label="Search">
              <FiSearch size={20} className="text-gray-600" />
            </button>
          </form>

          {/* Actions */}
          <div className="flex items-center gap-5 text-slate-800">
            <Link to="/wishlist" aria-label="Wishlist"
              className="hidden sm:block hover:text-blue-600">
              <FiHeart size={21} />
            </Link>

            <Link to="/cart" aria-label="Shopping bag"
              className="relative hover:text-blue-600">
              <FiShoppingBag size={22} />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>

            <Link to="/profile" aria-label="Profile"
              className="hidden sm:block hover:text-blue-600">
              <FiUser size={21} />
            </Link>

            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FiX size={23} /> : <FiMenu size={23} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex sm:hidden items-center bg-gray-100 rounded-full px-4 py-2.5 mt-4"
        >
          <input
            type="search"
            placeholder="Search products..."
            className="w-full bg-transparent outline-none text-sm"
          />
          <button type="submit" aria-label="Search">
            <FiSearch size={20} />
          </button>
        </form>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5 flex justify-center gap-10 py-3">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden border-t border-gray-100 px-5 py-3">
          <div className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm font-medium text-gray-700 border-b border-gray-100 last:border-0"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/profile" onClick={() => setMenuOpen(false)}
              className="py-3 text-sm font-medium text-gray-700">
              My Account
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;