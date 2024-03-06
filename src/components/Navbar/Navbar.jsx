const Navbar = () => {
  return (
    <>
      <header className="text-cyan-500 body-font bg-current">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            to="/"
          >
            <span className="ml-3 text-xl">🌤 Whether jupiter</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
