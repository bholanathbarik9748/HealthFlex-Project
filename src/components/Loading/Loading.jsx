import LoadingGif from "../../assets/loading.gif";

const LoadingComponent = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <img src={LoadingGif} alt="Loading..." />
      </div>
    </>
  );
};

export default LoadingComponent;
