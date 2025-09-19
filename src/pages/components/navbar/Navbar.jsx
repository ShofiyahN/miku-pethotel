import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Menu items - you can easily add or modify items here
  const [menuItems, setMenuItems] = useState([
    { name: 'Beranda', href: '/' },
    { name: 'Fasilitas', href: '/facility' },
    // { name: 'Paket', href: '/pricing' },
    
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full z-50 transition-all duration-300 ${
      isScrolled ? 'fixed top-0 bg-white shadow-lg py-2' : 'absolute top-0 bg-white/90 backdrop-blur-md py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#3e78bb] rounded-lg flex items-center justify-center">
              {/* Logo placeholder - replace with your actual logo */}
              <span className="text-white font-bold text-xl">
              <img
                src='https://www.dropbox.com/scl/fi/4anxcnbh3ue5ghrbdmff9/Untitled-design-12.png?rlkey=0i3geoq1m3k4kttsvciac7zkv&st=xrqj65cl&raw=1'
                className='p-1'
              />
              </span>
              
            </div>
            <div>
              <h1 className="text-[#3e78bb] font-bold text-xl">MIKU HOUSE</h1>
              <p className="text-[#ff914d] text-xs">Cat Hotel & Grooming</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="text-[#3e78bb] hover:text-[#ff914d] transition duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://wa.me/6285158166840" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#ff914d] text-white px-6 py-2 rounded-full hover:bg-[#ff914d]/90 transition duration-300 font-medium"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#3e78bb] focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {menuItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="block text-[#3e78bb] hover:text-[#ff914d] transition duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://wa.me/6285158166840" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#ff914d] text-white px-6 py-2 rounded-full hover:bg-[#ff914d]/90 transition duration-300 font-medium"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;