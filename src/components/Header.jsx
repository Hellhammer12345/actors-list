


import React, { useState } from 'react'; // Ensure useState is imported

const Header = () => {
  const [value, setValue] = useState("");

  const onSearch = () => {
    alert(value); // Alert the value of the input
  };

  const onChangeSearch = (e) => {
    setValue(e.target.value); // Update state on input change
  };

  return (
    <div className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="text-white font-bold text-lg">
        MyApp
      </div>

      {/* Center Section with Search Input and Button */}
      <div className="flex justify-center items-center space-x-4 flex-grow">
        {/* Input */}
        <input 
          onChange={onChangeSearch}
          type="text" 
          placeholder="Search..." 
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        {/* Button */}
        <button 
          onClick={onSearch} 
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Submit
        </button>
      </div>

      {/* Navigation Section - Placed at the end (right side) */}
      <div className="hidden md:flex space-x-6 text-white ml-auto">
        <a href="#home" className="hover:text-blue-500">Home</a>
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#services" className="hover:text-blue-500">Services</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </div>
    </div>
  );
};

export default Header;
