import React from "react";

const jobs = [
  { id: 1, title: "Frontend Developer", ID: "123456", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 2, title: "Backend Developer", ID: "234567", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 3, title: "Full Stack Developer", ID: "345678", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 1, title: "Frontend Developer", ID: "456789", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 2, title: "Backend Developer", ID: "567856", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 3, title: "Full Stack Developer", ID: "678456", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 1, title: "Frontend Developer", ID: "901406", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 2, title: "Backend Developer", ID: "667580", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 3, title: "Full Stack Developer", ID: "156784", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 1, title: "Frontend Developer", ID: "047589", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 2, title: "Backend Developer", ID: "012347", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 3, title: "Full Stack Developer", ID: "146790", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 1, title: "Frontend Developer", ID: "024351", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 2, title: "Backend Developer", ID: "975432", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 3, title: "Full Stack Developer", ID: "987654", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 1, title: "Frontend Developer", ID: "876543", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 2, title: "Backend Developer", ID: "765432", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 3, title: "Full Stack Developer", ID: "654321", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 1, title: "Frontend Developer", ID: "543210", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 2, title: "Backend Developer", ID: "432109", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 3, title: "Full Stack Developer", ID: "321098", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 1, title: "Frontend Developer", ID: "210987", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 2, title: "Backend Developer", ID: "109876", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 3, title: "Full Stack Developer", ID: "098765", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 3, title: "Full Stack Developer", ID: "445566", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
];

const OpenPositions = () => {
  return (
    <div className="h-auto border-r border-gray-600 overflow-y-auto max-h-screen [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
      <ul>
        {jobs.map(job => (
          <li key={job.id} className="job-item p-3 border-b border-gray-300 cursor-pointer hover:bg-gray-300">
            <h3 className="text-black font-extrabold">{job.title}</h3>
            <h5 className="font-semibold">{job.ID}</h5>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpenPositions;
