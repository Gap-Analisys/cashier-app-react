import { useState, useEffect } from "react";
import dayjs from "dayjs";
import apiSpring from "../api/apiSpring";
import { TransactionInterface } from "../interfaces/transactions";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState<TransactionInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTransactions = async () => {
    try {
      const response = await apiSpring.get("/transactions");
      console.log("Response: ", response);

      setTransactions(response.data);
      setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Failed to fetch transactions. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-8">{error}</div>;
  }

  return (
    <div className="mx-auto p-4 pb-40">
      {/* Header */}
      <div className="bg-gray-900 text-white py-2 -mt-4 rounded">
        <h1 className="text-center text-md text-gray-200 font-bold">
          Transaction History
        </h1>
      </div>

      {/* Transactions List */}
      <div className="space-y-4 mt-4">
        {transactions.length === 0 ? (
          <div className="text-center text-gray-500">
            No transactions found.
          </div>
        ) : (
          transactions.map((transaction) => (
            <div
              key={transaction.qrCode}
              className="bg-white rounded-lg p-4 shadow-md"
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">{transaction.qrCode}</h3>
                  <p>{transaction.rfId}</p>
                  <p className="text-gray-500">
                    {dayjs(transaction.date).format("MMM D, YYYY h:mm A")}
                  </p>
                </div>
                <div>
                  <span className="font-bold text-yellow-500">
                    ${transaction.price.toFixed(2)}
                  </span>
                  <p className="text-gray-500">
                    ${transaction.totalPrice.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;
