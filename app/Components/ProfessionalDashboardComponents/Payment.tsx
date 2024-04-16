import { useState, useEffect } from "react";

const Payment = () => {
  const [session, setSession] = useState();
  const [balance, setBalance] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [paymentAmount, setPaymentAmount] = useState(0);


  useEffect(() => {
    try {
      const getSession = async () => {
        const data = await fetch("/api/getSession");
        const sessionData = await data.json();
        setSession(sessionData);
        setBalance(sessionData.user.balance);
      };
      getSession();
    } catch (error) {
      console.log("Error fetching session:", error);
    } finally {
      setIsLoading(false);
    }
  }, [])

  const handlePaymentAmountChange = (e) => {
    const inputAmount = parseFloat(e.target.value);
    if (inputAmount <= balance ) {
      setPaymentAmount(e.target.value);
    }
  };

  const handlePayment = () => {
    
    setBalance(balance - paymentAmount);
    const makePayment = async () => {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id : session.user.id, payment: paymentAmount }),
      });
    }
    makePayment();
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Payment</h1>
      <p>Balance: {balance}</p>
      <div className="mt-4">
        <input
          type="number"
          value={paymentAmount}
          onChange={handlePaymentAmountChange}
          className="border-2 border-gray-300 rounded-md px-4 py-2 mr-2 text-black"
          placeholder="Enter payment amount"
        />
        <button
          onClick={handlePayment}
          disabled={paymentAmount <= 0 || paymentAmount > balance}
          className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-blue-300"
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default Payment;
