import React from 'react';
import JobQualifcation from '../ProfessionalDashboardComponents/JobQualifcation';

import { useState } from 'react';

type Qualification = {
  category: string;
  keywords: string[];
};

const JobDescription = ({ Professional }) => {

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
      body: JSON.stringify({ id : Professional.id, payment: paymentAmount, balanceDue : dueDate}),
    });
  }
  updateBalance();
}

    const Qualifcations = JSON.parse(Professional.qualifications)
   return (
    <div className="mt-5">
      <div>
        <h3 className="text-3xl font-bold text-center">{Professional.firstName} {Professional.lastName}</h3>

      </div>
      <div className="m-5 ml-10 mr-10 mb-0 flex text-l font-semibold justify-between">
        <p>{Professional.degreeName}</p>
        <p>{Professional.institutionName}</p>
      </div>
      <div className="m-5 ml-10 mr-10 mt-3">
        <h4 className="text-xl font-semibold mb-2">Qualifications:</h4>
        <table className="min-w-full table-fixed border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300 bg-gray-500 p-2 text-left font-medium">Category</th>
              <th className="border border-slate-300 bg-gray-500 p-2 text-left font-medium">Keywords/Key Phrases</th>
            </tr>
          </thead>
          <tbody>
            {Qualifcations.map((qualification, index) => (
              <JobQualifcation
                key={index}
                category={qualification.category}
                keywords={qualification.keywords}
              />
            ))}
          </tbody>
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
