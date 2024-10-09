import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="p-4 mx-auto mt-4 max-w-xl">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg p-6">
        <div className="text-center">
          <img
            src="https://i.imgur.com/FQS7fFC.png"
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-md"
          />
          <h1 className="text-2xl font-semibold text-white mt-4">
            Adi Munawar
          </h1>
          <p className="text-blue-100">adi@email.com</p>
        </div>
      </div>

      {/* Profile Details */}
      <div className="mt-4 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Details</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Phone Number</p>
            <p className="text-gray-900 font-medium">+62 812-3456-7890</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Address</p>
            <p className="text-gray-900 font-medium">123 Main St, Bandung</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Member Since</p>
            <p className="text-gray-900 font-medium">Oct 2024</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-row my-4 space-x-4">
        <button className="rounded w-1/2 px-2 py-3 border border-yellow-400 hover:border-yellow-700 bg-gradient-to-b from-yellow-300 to-yellow-500 hover:from-yellow-400 hover:to-yellow-600">
          Edit Profile
        </button>
        <button className="rounded w-1/2 px-2 py-3 border border-yellow-400 hover:border-yellow-700 bg-gradient-to-b from-yellow-300 to-yellow-500 hover:from-yellow-400 hover:to-yellow-600">
          <Link to={"/"}>Change Password</Link>
        </button>
      </div>

      {/* Account Management */}
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Account</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Subscription Plan</p>
            <p className="text-gray-900 font-medium">Premium</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Payment Method</p>
            <p className="text-gray-900 font-medium">Visa **** 1234</p>
          </div>
        </div>
      </div>

      {/* Sign Out Button */}
      <div className="mt-6">
        <button className="w-full py-3 px-4 bg-red-500 hover:bg-red-600 rounded-lg text-white font-medium">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
