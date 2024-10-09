import { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { CustomerInteface } from "../interfaces/customers";
import apiSpring from "../api/apiSpring";

const CustomerList = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState<CustomerInteface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await apiSpring.get("/customers");
        setCustomers(response.data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setError("Failed to fetch customers");
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="mx-auto p-4">
      {/* Header */}
      <div className="bg-gray-900 flex justify-between text-white py-2 -mt-4 rounded">
        <BiChevronLeft
          size={30}
          onClick={() => navigate(-1)}
          className="ml-2 cursor-pointer"
        />
        <h1 className="text-center text-md text-gray-200 font-bold mr-8 mt-0.5">
          Customers
        </h1>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="text-center text-gray-600">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        // Customer List
        <div className="mt-8 space-y-4">
          {customers.map((customer) => (
            <div
              key={customer.qrCode}
              className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold">{customer.name}</h3>
                <p className="text-gray-500">
                  Wallet:{" "}
                  <span className="text-yellow-500 font-bold">
                    ${customer.wallet}
                  </span>
                </p>
              </div>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerList;
