
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link } from 'react-router-dom';
import { useTheme } from "@/contexts/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-xces-black/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/uploads/nvavlogo.png" 
                alt="XCES Logo" 
                className="h-8 md:h-10 mr-2"
              />
            </Link>
            <div className="hidden md:block ml-10">
              <nav className="flex space-x-8">
                <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  Home
                </Link>
                <Link to="/delivery-partner" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  Delivery Partner
                </Link>
                <Link to="/food-partner" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  Food Partner
                </Link>
                <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  About
                </Link>
              </nav>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
            <a href="#faq" className="xces-btn">
              FAQ
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
            <button 
              className="text-gray-700 dark:text-white"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-xces-dark border-t border-gray-100 dark:border-gray-800 animate-accordion-down">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  Home
                </Link>
                <Link to="/delivery-partner" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  Delivery Partner
                </Link>
                <Link to="/food-partner" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  Food Partner
                </Link>
                <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  About
                </Link>              
                <div className="pt-2">
                <a 
                  href="#faq" 
                  className="xces-btn w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
