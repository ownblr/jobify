import React from 'react';
import JobQualifcation from '../ProfessionalDashboardComponents/JobQualifcation';




const JobDescription = ({ Professional }) => {

  const Qualifcations = JSON.parse(Professional.qualifications);
  
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
      <div className="inset-x-0 bottom-0 pb-5 flex justify-center">
      </div>
    </div>
  );
}

export default JobDescription;
