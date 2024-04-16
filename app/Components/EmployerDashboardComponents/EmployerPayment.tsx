import React, { useState, useEffect } from "react";

interface Transaction {
  id: number;
  date: string;
  amount: number;
  type: string;
  status: string;
}

const EmployerPayment = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [accountBalance, setAccountBalance] = useState<number>(0);
  const [pendingBalance, setPendingBalance] = useState<number>(0);
  const [paymentType, setPaymentType] = useState<string>("hourly");

  useEffect(() => {
    const fakeTransactionData: Transaction[] = [
      {
        id: 1,
        date: "2024-02-19",
        amount: 100,
        type: "Received",
        status: "Completed",
      },
      {
        id: 2,
        date: "2024-02-18",
        amount: 50,
        type: "Received",
        status: "Completed",
      },
      {
        id: 3,
        date: "2024-02-17",
        amount: 150,
        type: "Received from ABC Company",
        status: "Completed",
      },
      // Add more fake transactions as needed
    ];
    setTransactions(fakeTransactionData);

    setAccountBalance(1000); // Example account balance
    setPendingBalance(200); // Example pending balance
  }, []);

  const handlePaymentTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentType(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Transaction History</h1>
      <label className="mb-2 font-bold">Payment Type:</label>
      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            value="hourly"
            checked={paymentType === "hourly"}
            onChange={handlePaymentTypeChange}
          />
          Hourly
        </label>
        <label className="mr-4">
          <input
            type="radio"
            value="biweekly"
            checked={paymentType === "biweekly"}
            onChange={handlePaymentTypeChange}
          />
          Bi-weekly
        </label>
        <label>
          <input
            type="radio"
            value="monthly"
            checked={paymentType === "monthly"}
            onChange={handlePaymentTypeChange}
          />
          Monthly
        </label>
      </div>
      <table className="w-3/4 border-collapse border border-gray-500">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-500 px-4 py-2">ID</th>
            <th className="border border-gray-500 px-4 py-2">Date</th>
            <th className="border border-gray-500 px-4 py-2">Amount</th>
            <th className="border border-gray-500 px-4 py-2">Type</th>
            <th className="border border-gray-500 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="border border-gray-500 px-4 py-2">
                {transaction.id}
              </td>
              <td className="border border-gray-500 px-4 py-2">
                {transaction.date}
              </td>
              <td className="border border-gray-500 px-4 py-2">
                {transaction.amount}
              </td>
              <td className="border border-gray-500 px-4 py-2">
                {transaction.type}
              </td>
              <td className="border border-gray-500 px-4 py-2">
                {transaction.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8">
        <h2 className="text-xl font-bold">
          Account Balance: ${accountBalance}
        </h2>
        <h2 className="text-xl font-bold">
          Pending Balance: ${pendingBalance}
        </h2>
      </div>
    </div>
  );
};

export default EmployerPayment;
