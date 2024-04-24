import React from "react";
import { useEffect, useState } from "react";

const ProfessionalList = ({ onSelectProfessional, professionals }) => {


  
  return (
    <div className="h-auto border-r border-gray-600 overflow-y-auto max-h-screen [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
      <ul>
        {professionals.map((professional, index) => (
          <li
            key={index}
            className="job-item p-3 border-b border-gray-300 cursor-pointer hover:bg-gray-300"
            onClick={() => onSelectProfessional(professional)}
          >
            <h3 className="text-white font-extrabold">{professional.firstName} {professional.lastName}</h3>
            <h5 className="font-semibold text-gray-100">{professional.degreeName}</h5>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfessionalList;
