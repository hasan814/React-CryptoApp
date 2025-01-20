import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color="#3b82f6" size={60} />
    </div>
  );
};

export default Loader;
