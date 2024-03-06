import LoadingGif from "../../assets/loading.gif"; // Importing the loading GIF

// LoadingComponent displays the loading animation
const LoadingComponent = () => {
  return (
    <>
      {/* Centered container */}
      <div className="flex justify-center items-center h-screen">
        {/* Loading GIF */}
        <img src={LoadingGif} alt="Loading..." />
      </div>
    </>
  );
};

export default LoadingComponent;
