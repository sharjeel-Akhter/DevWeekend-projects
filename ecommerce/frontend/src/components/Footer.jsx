
import React from "react";
import { Link } from "react-router";
import {
  FiShoppingBag,
  FiArrowRight,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiGithub,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-8">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-5">
              <FiShoppingBag className="text-blue-400 text-2xl" />
              <span className="text-2xl font-black">
                Shop<span className="text-blue-400">Ease</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-7 max-w-sm mb-6">
              Discover quality products, explore new collections,
              and enjoy a better shopping experience with ShopEase.
            </p>

            <div className="flex gap-3">
              {[FiFacebook, FiInstagram, FiTwitter, FiGithub].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label={`Social link ${index + 1}`}
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition"
                  >
                    <Icon size={18} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-5">Shop</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/products" className="hover:text-blue-400">All Products</Link></li>
              <li><Link to="/categories" className="hover:text-blue-400">Categories</Link></li>
              <li><Link to="/deals" className="hover:text-blue-400">Special Offers</Link></li>
              <li><Link to="/cart" className="hover:text-blue-400">Shopping Cart</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-5">Support</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/contact" className="hover:text-blue-400">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-blue-400">FAQs</Link></li>
              <li><Link to="/shipping" className="hover:text-blue-400">Shipping Info</Link></li>
              <li><Link to="/returns" className="hover:text-blue-400">Returns</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white mb-5">Stay Updated</h3>
            <p className="text-sm text-slate-400 leading-6 mb-4">
              Get updates on new arrivals and exclusive offers.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center border border-slate-700 rounded-lg overflow-hidden"
            >
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email address"
                className="w-full min-w-0 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-slate-500"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="h-full px-3 py-3 bg-blue-600 hover:bg-blue-500 transition"
              >
                <FiArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;