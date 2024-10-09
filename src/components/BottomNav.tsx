import React from "react";
import { Link } from "react-router-dom";
import { GrTransaction } from "react-icons/gr";
import { GoHomeFill } from "react-icons/go";
import { BsClipboard2DataFill } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";

const BottomNav: React.FC = () => {
  return (
    <div className="fixed bottom-0 z-50 w-[400px] h-16 border-t bg-gray-900 border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <Link
          to={"/"}
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group"
        >
          <GoHomeFill
            size={24}
            className="text-gray-400 group-hover:text-[#F4CC12]"
          />
          <span className="text-sm text-gray-400 group-hover:text-[#F4CC12]">
            Home
          </span>
        </Link>
        <Link
          to={"/transaksi-history"}
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group"
        >
          <GrTransaction
            size={24}
            className="text-gray-400 group-hover:text-[#F4CC12]"
          />
          <span className="text-sm text-gray-400 group-hover:text-[#F4CC12]">
            Transaction
          </span>
        </Link>
        <Link
          to={"/data"}
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group"
        >
          <BsClipboard2DataFill
            size={22}
            className="text-gray-400 group-hover:text-[#F4CC12]"
          />
          <span className="text-sm text-gray-400 group-hover:text-[#F4CC12]">
            Data
          </span>
        </Link>
        <Link
          to={"/profile"}
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group"
        >
          <FaCircleUser
            size={22}
            className="text-gray-400 group-hover:text-[#F4CC12]"
          />
          <span className="text-sm text-gray-400 group-hover:text-[#F4CC12]">
            Profile
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
