import React from 'react';

const Bottom = () => {
  return (
    <div className="bg-white py-6 px-8 rounded-2xl ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side - Text */}
        <div className="text-center px-12 md:text-left mb-2 md:mb-0">
          <p className="text-gray-600">
            © Mavis All Rights Reserved by <span className="font-semibold">EnvyTheme</span>
          </p>
        </div>
        
        {/* Right Side - Links */}
        <div className="text-center  md:text-right space-x-2">
          <a href="#" className="text-blue-600 hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className=" text-blue-600 hover:underline ">
            Legal Notice
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
