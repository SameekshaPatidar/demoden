import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch, faShoppingCart, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/favicon.png'; 

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-8 h-8 md:w-8 md:h-8" />
          <span className="text-xl md:text-2xl font-bold text-blue-900">Mavis</span>
        </div>

        {/* Hamburger Icon  */}
        <div className="md:hidden">
          <FontAwesomeIcon 
            icon={faBars} 
            className={`text-yellow-500 w-6 h-6 cursor-pointer ${isSidebarOpen ? 'hidden' : 'block'}`} 
            onClick={toggleSidebar} 
          />
        </div>

        {/* Nav */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6">
          <a href="/" className="text-blue-900 hover:text-orange-500">Home</a>
          <a href="/about" className="text-blue-900 hover:text-orange-500">About Us</a>
          <a href="/services" className="text-blue-900 hover:text-orange-500">Services</a>
          <a href="/shop" className="text-blue-900 hover:text-orange-500">Shop</a>
          <a href="/pages" className="text-blue-900 hover:text-orange-500">Pages</a>
          <a href="/blog" className="text-blue-900 hover:text-orange-500">Blog</a>
          <a href="/contact" className="text-blue-900 hover:text-orange-500">Contact Us</a>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          <FontAwesomeIcon icon={faSearch} className="text-yellow-500 w-5 h-5 cursor-pointer" />
          <div className="relative">
            <FontAwesomeIcon icon={faShoppingCart} className="text-blue-900 w-5 h-5 cursor-pointer" />
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
          <button className="bg-blue-900 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-full flex items-center space-x-2">
            <span>Book A Visit</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      {/* Sidebar for small devices */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold text-blue-900">Mavis</span>
          </div>
          <FontAwesomeIcon 
            icon={faTimes} 
            className="text-yellow-500 w-6 h-6 cursor-pointer" 
            onClick={toggleSidebar} 
          />
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <a href="/" className="text-blue-900 hover:text-orange-500">Home</a>
          <a href="/about" className="text-blue-900 hover:text-orange-500">About Us</a>
          <a href="/services" className="text-blue-900 hover:text-orange-500">Services</a>
          <a href="/shop" className="text-blue-900 hover:text-orange-500">Shop</a>
          <a href="/pages" className="text-blue-900 hover:text-orange-500">Pages</a>
          <a href="/blog" className="text-blue-900 hover:text-orange-500">Blog</a>
          <a href="/contact" className="text-blue-900 hover:text-orange-500">Contact Us</a>
          <div className="flex items-center space-x-4 mt-4">
            <FontAwesomeIcon icon={faSearch} className="text-yellow-500 w-5 h-5 cursor-pointer" />
            <div className="relative">
              <FontAwesomeIcon icon={faShoppingCart} className="text-blue-900 w-5 h-5 cursor-pointer" />
              <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
          </div>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-full flex items-center space-x-2 mt-4 w-40">
            <span>Book A Visit</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;





// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faShoppingCart, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import logo from '../assets/favicon.png'; 

// const Navbar = () => {
//   return (
//     <div className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//         {/* Logo and Brand */}
//         <div className="flex items-center space-x-2">
//           <img src={logo} alt="Logo" className="w-8 h-8" />
//           <span className="text-2xl font-bold text-blue-900">Mavis</span>
//         </div>

//         {/* Navigation Links */}
//         <nav className="flex space-x-6">
//           <a href="/" className="text-blue-900 hover:text-orange-500">Home</a>
//           <a href="/about" className="text-blue-900 hover:text-orange-500">About Us</a>
//           <a href="/services" className="text-blue-900 hover:text-orange-500">Services</a>
//           <a href="/shop" className="text-blue-900 hover:text-orange-500">Shop</a>
//           <a href="/pages" className="text-blue-900 hover:text-orange-500">Pages</a>
//           <a href="/blog" className="text-blue-900 hover:text-orange-500">Blog</a>
//           <a href="/contact" className="text-blue-900 hover:text-orange-500">Contact Us</a>
//         </nav>

//         {/* Right Side Icons */}
//         <div className="flex items-center space-x-4">
//           <FontAwesomeIcon icon={faSearch} className="text-yellow-500 w-5 h-5 cursor-pointer" />
//           <div className="relative">
//             <FontAwesomeIcon icon={faShoppingCart} className="text-blue-900 w-5 h-5 cursor-pointer" />
//             <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
//           </div>
//           <button className="bg-blue-900 text-white px-4 py-2 rounded-full flex items-center space-x-2">
//             <span>Book A Visit</span>
//             <FontAwesomeIcon icon={faArrowRight} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
