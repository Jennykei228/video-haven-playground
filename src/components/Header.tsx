
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchValue);
    // Here you would implement the actual search functionality
    setIsSearchOpen(false);
    setSearchValue("");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-gray-800 hover:text-purple-600 transition-colors">
              Portfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">
              About
            </a>
            <div className="relative group">
              <button className="text-gray-600 hover:text-purple-600 transition-colors flex items-center">
                Blog
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <a href="#opencarts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100">
                  OpenCarts
                </a>
                <a href="#wordpress" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100">
                  WordPress
                </a>
                <a href="#drupal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100">
                  Drupal
                </a>
              </div>
            </div>
            <button 
              onClick={toggleSearch}
              className="text-gray-600 hover:text-purple-600 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleSearch}
              className="text-gray-600 hover:text-purple-600 transition-colors mr-4"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-purple-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search bar (shows when search is clicked) */}
        <div 
          className={cn(
            "py-3 transition-all duration-300 overflow-hidden",
            isSearchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <form onSubmit={handleSearchSubmit} className="flex w-full">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 transition-colors"
            >
              <Search size={20} />
            </button>
          </form>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            "md:hidden transition-all duration-300 overflow-hidden",
            isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="pt-2 pb-4 space-y-1">
            <a 
              href="#about" 
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <div className="px-3 py-2">
              <div className="text-base font-medium text-gray-600">Blog</div>
              <div className="mt-1 pl-3 space-y-1">
                <a 
                  href="#opencarts" 
                  className="block py-1 text-sm text-gray-500 hover:text-purple-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  OpenCarts
                </a>
                <a 
                  href="#wordpress" 
                  className="block py-1 text-sm text-gray-500 hover:text-purple-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  WordPress
                </a>
                <a 
                  href="#drupal" 
                  className="block py-1 text-sm text-gray-500 hover:text-purple-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Drupal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
