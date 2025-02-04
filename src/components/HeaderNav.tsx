import React from "react";

const HeaderNav: React.FC = () => {
  return (
    <div
      className="py-5 px-3 flex flex-col"
      style={{ backgroundColor: "#232f3e" }}
    >
      <div className="flex flex-row justify-between items-center mb-8 py-1">
        <div className="flex flex-row items-center">
          <svg
            className="w-6 h-6 text-white mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span className="text-white text-lg font-bold">GAP Analisys</span>
        </div>
        <div>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-row bg-white rounded-lg h-10">
        <input
          type="text"
          className="bg-white rounded-lg flex-grow p-2 focus:outline-none"
          placeholder="Search..."
          name="search"
          id="search"
        />
        <div className="bg-yellow-400 p-2 rounded-lg mx-auto">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
