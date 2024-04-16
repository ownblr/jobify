import React from "react";

interface JobQualificationProps {
    category: string;
    keywords: string;
}

const JobQualifcation: React.FC<JobQualificationProps> = ({ category, keywords }) => {
  return (
    <tr>
      <td className="border border-slate-300 p-2">{category}</td>
      <td className="border border-slate-300 p-2">{keywords}</td>
    </tr>
  );
};

export default JobQualifcation;
