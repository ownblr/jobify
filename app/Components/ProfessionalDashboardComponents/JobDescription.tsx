import React from 'react';
import JobQualifcation from './JobQualifcation';




const JobDescription = ({ Job }) => {
  const Qualifcations = JSON.parse(Job.qualifications);
  const employerId = Job.companyJobId;
  const contactName = `${Job.contactFirstName} ${Job.contactLastName}`;
  const contactPhone = Job.contactPhone;
  const contactEmail = Job.contactEmail;
  const startDate = new Date(Job.startDate).toLocaleDateString();
  const endDate = new Date(Job.endDate).toLocaleDateString();
  const startTime = new Date(Job.startTime).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true 
  });  const endTime = new Date(Job.endTime).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true 
  });  return (
    <div className="mt-5">
      <div>
        <h3 className="text-3xl font-bold text-center">{Job.companyName}</h3>
        <h3 className="text-2xl mt-5 font-bold text-center">{Job.positionName}</h3>
      </div>
      <div className="m-5 ml-10 mr-10 mb-0 flex text-l font-semibold justify-between">
        <p>${Job.payment} / Hour</p>
        <p>Start Date: {startDate}</p>
      </div>
      <div className="m-5 ml-10 mr-10 mt-3 flex text-l font-semibold justify-between">
        <p>{startTime} to {endTime}</p>
        <p>End Date: {endDate}</p>
      </div>
      <div className="m-5 ml-10 mr-10 mb-0 flex text-l font-semibold justify-between">
        <p>{contactName}</p>
        <p>{employerId}</p>
      </div>
      <div className="m-5 ml-10 mr-10 mb-0 flex text-l font-semibold justify-between">
        <p>{contactPhone}</p>
        <p>{contactEmail}</p>
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
