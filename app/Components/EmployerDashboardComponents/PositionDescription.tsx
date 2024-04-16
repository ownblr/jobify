import React from 'react';

const PositionDescription = () => {
  return (
    <div className="mt-5">
      <button
        style={{float: 'right'}}
        className="py-2 px-4 text-sm font-semibold rounded-lg border border-transparent bg-blue-500 text-gray-800 hover:bg-blue-200"
        >
        Delete
      </button>
      <button
        style={{float: 'left'}}
        className="py-2 px-4 text-sm font-semibold rounded-lg border border-transparent bg-blue-500 text-gray-800 hover:bg-blue-200"
        >
        Edit
      </button>
      <div>
        <h3 className="text-3xl font-bold text-center">Fullstack Developer</h3>
        <h3 className="text-3xl font-bold text-center">ID: 123456</h3>

      </div>
      <div className="m-5 ml-10 mr-10 mb-0 flex text-l font-semibold justify-between">
        <p>$50 / Hour</p>
        <p>Start Date: 12/12/2021</p>
      </div>
      <div className="m-5 ml-10 mr-10 mt-3 flex text-l font-semibold justify-between">
        <p>9:00 AM to 5:00 PM</p>
        <p>End Date: 12/12/2022</p>
      </div>
      <div className="m-5 ml-10 mr-10 mt-3">
        <h4 className="text-xl font-semibold mb-2">Qualifications:</h4>
        <table className="min-w-full table-fixed border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300 bg-slate-100 p-2 text-left font-medium">Category</th>
              <th className="border border-slate-300 bg-slate-100 p-2 text-left font-medium">Keywords/Key Phrases</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 p-2">Languages</td>
              <td className="border border-slate-300 p-2">Java, Python</td>
            </tr>
            <tr>
              <td className="border border-slate-300 p-2">Tools</td>
              <td className="border border-slate-300 p-2">Angular, IntelliJ, GitHub</td>
            </tr>
            <tr>
              <td className="border border-slate-300 p-2">Database</td>
              <td className="border border-slate-300 p-2">MySQL, MongoDB, SQL Server</td>
            </tr>
          </tbody>
        </table>
        <div>
        <h4 className="text-xl font-semibold mt-2 mb-2">Job Description:</h4>

            <p>Develop statistical models, algorithms and artificial intelligence through and approach of experimentation and discovery on data. Run advanced modelling on data in order to extract knowledge and/or predictions. Create complete analytics chain from transforming, structuring, modelling, visualizing, and translating data into actionable insights. Use a mix of tools and methods to apply advanced analytics to solve business problems or optimize business outcomes.
The Quality & Customer Satisfaction team ensures the product quality performance within a determined scope through investigating and prioritizing market product quality issues. The Data Analyst/Scientist secures the voice of the customer in the problem solving processes through knowledge management. This role supports achieving product quality goals and metrics for fault frequency and warranty costs.</p>
        </div>
      </div>
      <div className="inset-x-0 bottom-0 pb-5 flex justify-center">
      </div>
    </div>
  );
}

export default PositionDescription;
