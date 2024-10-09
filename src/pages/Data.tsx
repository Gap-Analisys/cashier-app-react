import { FaBox } from "react-icons/fa6";
import { HiMiniUsers } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Data = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="mx-auto p-4">
      {/* Header */}
      <div className="bg-gray-900 text-white py-2 -mt-4 rounded">
        <h1 className="text-center text-md text-gray-200 font-bold">Data</h1>
      </div>

      {/* Main Content */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Customer Card */}
        <div
          className="bg-white flex justify-center items-center flex-col rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
          onClick={() => handleNavigation("/data/customers")}
        >
          <HiMiniUsers size={22} className="text-yellow-500" />
          <h2 className="text-lg font-semibold">Customer</h2>
        </div>

        {/* Product Card */}
        <div
          className="bg-white flex justify-center items-center flex-col rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
          onClick={() => handleNavigation("/data/products")}
        >
          <FaBox size={20} className="text-yellow-500" />
          <h2 className="text-lg font-semibold">Product</h2>
        </div>
      </div>
    </div>
  );
};

export default Data;
