import React, { useState, useEffect } from 'react';

const DegreeForm = ({ onValidityChange }) => {
  const [institutionName, setInstitutionName] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [languages, setLanguages] = useState("");
  const [tools, setTools] = useState("");
  const [database, setDatabase] = useState("");
  const [catLanguages, setLanguagesCat] = useState("");
  const [catTools, setToolsCat] = useState("");
  const [catDatabase, setDatabaseCat] = useState("");


  useEffect(() => {
    // Example validation: all fields are required for simplicity
    const isFormValid = institutionName.trim() !== "" && degreeName.trim() !== "" && completionDate.trim() !== "" && languages.trim() !== "" && tools.trim() !== "" && database.trim() !== "" && catLanguages.trim() !== "" && catTools.trim() !== "" && catDatabase.trim() !== "";
    onValidityChange(isFormValid);
  }, [institutionName, degreeName, completionDate, languages, tools, database, catLanguages, catTools, catDatabase, onValidityChange]);

  return (
    <div>
        <form>
              <div className="grid gap-y-4">
                <div className="text-center">
                <label className="block text-xl font-bold mb-4 dark:text-white">Professional Experience</label>
                </div>
                <div>
                  <label htmlFor="institutionName" className="block text-sm mb-2 dark:text-white">Name of Institution</label>
                  <input type="text" id="institutionName" name="institutionName" value={institutionName} onChange={(e) => setInstitutionName(e.target.value)} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
                </div>

                <div>
                  <label htmlFor="degreeName" className="block text-sm mb-2 dark:text:white">Name of Degree</label>
                  <input type="text" id="degreeName" name="degreeName" value={degreeName} onChange={(e) => setDegreeName(e.target.value)} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
                </div>

                <div>
                  <label htmlFor="completionDate" className="block text-sm mb-2 dark:text:white">Month/Year of Completion</label>
                  <input type="month" id="completionDate" name="completionDate" value={completionDate} onChange={(e) => setCompletionDate(e.target.value)} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
                </div>

                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="py-3 px-6">Category</th>
                        <th scope="col" className="py-3 px-6">Keywords/Key phrases</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="py-4 px-6">
                          <input type="text" name="languages" value={catLanguages} onChange={(e) => setLanguagesCat(e.target.value)} className="py-2 px-3 border border-gray-300 rounded-lg w-full text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
                        </td>
                        <td className="py-4 px-6">
                          <input type="text" name="languages" value={languages} onChange={(e) => setLanguages(e.target.value)} className="py-2 px-3 border border-gray-300 rounded-lg w-full text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
                        </td>
                      </tr>
                      <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="py-4 px-6">
                          <input type="text" name="tools" value={catTools} onChange={(e) => setToolsCat(e.target.value)} className="py-2 px-3 border border-gray-300 rounded-lg w-full text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
                        </td>
                        <td className="py-4 px-6">
                          <input type="text" name="tools" value={tools} onChange={(e) => setTools(e.target.value)} className="py-2 px-3 border border-gray-300 rounded-lg w-full text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="py-4 px-6">
                          <input type="text" name="tools" value={catDatabase} onChange={(e) => setDatabaseCat(e.target.value)} className="py-2 px-3 border border-gray-300 rounded-lg w-full text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
                        </td>
                        <td className="py-4 px-6">
                          <input type="text" name="database" value={database} onChange={(e) => setDatabase(e.target.value)} className="py-2 px-3 border border-gray-300 rounded-lg w-full text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </form>
    </div>
  );
}

export default DegreeForm;