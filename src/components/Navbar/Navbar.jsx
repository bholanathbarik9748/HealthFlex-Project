import React from "react";

// Navbar component displaying the navigation bar
const Navbar = () => {
  return (
    <>
      {/* Header section with background color */}
      <header className="text-cyan-500 body-font bg-current">
        {/* Container for content */}
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo or site title */}
          <div
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            to="/" // Assuming this is meant to be a link, though 'to' is not a valid prop for a div
          >
            {/* Logo icon or site title */}
            <span className="ml-3 text-xl">🌤 Whether jupiter</span> {/* Using a sun emoji as the logo */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
