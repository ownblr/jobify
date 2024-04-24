import { useState } from 'react';
import JobQualifcation from '../ProfessionalDashboardComponents/JobQualifcation';




const JobDescription = ({ Employer }) => {

  const [paymentAmount, setPaymentAmount] = useState(0);
  const [dueDate, setDueDate] = useState();


  const handlePaymentAmountChange = (e) => {
      setPaymentAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  }

  const handleSubmit = () => {
    const updateBalance = async () => {
      const response = await fetch("/api/payment", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id : Employer.id, payment: paymentAmount, balanceDue : dueDate}),
      });
    }
    updateBalance();
  }

   return (
    <div className="mt-5">
      <div>
        <h3 className="text-3xl font-bold text-center">{Employer.firstName} {Employer.lastName}</h3>
        <h2 className="mt-3 text-2xl font-bold text-center">{Employer.companyName}</h2>
        <h3 className="mt-3 text-2xl font-bold text-center">{Employer.streetAddress} {Employer.city} {Employer.state} {Employer.zip}</h3>
      </div>
      <div className="m-5 ml-10 mr-10 mt-3">
        <table className="min-w-full table-fixed border-collapse border border-slate-400">
        </table>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Add New Payment</h1>
      <div className="mt-4">
        <input
          type="number"
          value={paymentAmount}
          onChange={handlePaymentAmountChange}
          className="border-2 border-gray-300 rounded-md px-4 py-2 mr-2 text-black"
          placeholder="Enter payment amount"
        />
        <input
        type="date"
        value={dueDate}
        onChange={handleDateChange}
        className="border-2 border-gray-300 rounded-md px-4 py-2 mr-2 text-black"
        placeholder="Enter due date"/>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-blue-300"
        >
          Submit
        </button>
      </div>
    </div>
    </div>
  );
}

export default JobDescription;
