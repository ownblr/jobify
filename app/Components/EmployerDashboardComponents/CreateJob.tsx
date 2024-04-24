import React from "react";
import { useState, useEffect } from "react";

type Qualification = {
  category: string;
  keywords: string[];
};

const CreateJob = () => {
  const [employerId, setEmployerId] = useState(null);
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [positionName, setPositionName] = useState("");
  const [jobId, setJobId] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [contactFirstName, setContactFirstName] = useState("");
  const [contactLastName, setContactLastName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [payment, setPayment] = useState();
  const [qualifications, setQualifications] = useState<Qualification[]>([]);

  const handleInputChange = (key, value) => {
    switch (key) {
      case "email":
        setContactEmail(value);
        break;
      case "phone":
        setContactPhone(value);
        break;
      case "firstName":
        setContactFirstName(value);
        break;
      case "lastName":
        setContactLastName(value);
        break;
      case "companyName":
        setCompanyName(value);
        break;
      case "positionName":
        setPositionName(value);
        break;
      case "jobId":
        setJobId(value);
        break;
      case "startDate":
        setStartDate(value);
        break;
      case "endDate":
        setEndDate(value);
        break;
      case "startTime":
        setStartTime(value);
        break;
      case "endTime":
        setEndTime(value);
        break;
      case "payment":
        setPayment(value);
        break;
      default:
        break;
    }
  };

  const handleQualificationChange = (
    index: number,
    field: keyof Qualification,
    value: string | string[]
  ) => {
    const updatedQualifications = qualifications.map((qual, idx) => {
      if (idx === index) {
        return { ...qual, [field]: value };
      }
      return qual;
    });
    setQualifications(updatedQualifications);
  };

  const addQualification = () => {
    setQualifications([...qualifications, { category: "", keywords: [] }]);
  };
  const removeQualification = () => {
    const updatedQualifications = qualifications.slice(
      0,
      qualifications.length - 1
    );
    setQualifications(updatedQualifications);
  };

  useEffect(() => {
    addQualification();
    try {
      const getSession = async () => {
        const data = await fetch("/api/getSession");
        const session = await data.json();
        setSession(session);
        setEmployerId(session?.account.id);
        setContactEmail(session?.account.email);
        setContactFirstName(session?.account.firstName);
        setContactLastName(session?.account.lastName);
        setContactPhone(session?.account.phoneNumber);
        setCompanyName(session?.account.companyName);
      };
      getSession();
    } catch (error) {
      console.error("Failed to fetch employer account:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  function combineDateTime(date, time) {
    const dateTime = new Date(`${date}T${time}:00.000Z`); 
    return dateTime.toISOString();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedStartDate = combineDateTime(startDate, startTime)
    const formattedEndDate  = combineDateTime(endDate, endTime)
    const formattedStartTime = combineDateTime(startDate, startTime)
    const formattedEndTime = combineDateTime(endDate, endTime)

    try {
      const data = await fetch("/api/jobs", {
        method: "POST",
        body: JSON.stringify({
          employerId,
          positionName,
          companyName,
          contactFirstName,
          contactLastName,
          contactPhone,
          contactEmail,
          companyJobId : jobId,
          startDate : formattedStartDate,
          endDate : formattedEndDate,
          startTime : formattedStartTime,
          endTime : formattedEndTime,
          payment,
          qualifications,
        }),
    })
  } catch (error) {
    console.error("Failed to create job:", error);
  } 
};

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            Post a New Job
          </h1>
        </div>

        <div className="mt-12">
          <form>
            <div className="grid gap-4 lg:gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                    Company Name
                  </label>
                  <input
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    value={companyName}
                    type="text"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                    Posistion Name
                  </label>
                  <input
                    onChange={(e) =>
                      handleInputChange("positionName", e.target.value)
                    }

                    type="text"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                    First Name
                  </label>
                  <input
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    value={contactFirstName}
                    type="text"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                    Last Name
                  </label>
                  <input
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    value={contactLastName}
                    type="text"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                    Contact Phone Number
                  </label>
                  <input
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    value={contactPhone}
                    type="number"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                    Contact Email
                  </label>
                  <input
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder={contactEmail}
                    type="email"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                    Payment $/hr
                  </label>
                  <input
                    onChange={(e) =>
                      handleInputChange("payment", e.target.value)
                    }
                    type="number"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                    Job ID
                  </label>
                  <input
                    onChange={(e) => handleInputChange("jobId", e.target.value)}
                    type="text"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  />
                </div>
              </div>
              <div>
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                  <div className="max-w-xl mx-auto">
                    <div className="grid gap-4 lg:gap-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                        <div>
                          <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                            Start Date
                          </label>
                          <input
                            onChange={(e) =>
                              handleInputChange("startDate", e.target.value)
                            }
                            type="date"
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          />
                        </div>
                        <div>
                          <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                            End Date
                          </label>
                          <input
                            onChange={(e) =>
                              handleInputChange("endDate", e.target.value)
                            }
                            type="date"
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                        <div>
                          <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                            Start Time
                          </label>
                          <input
                            onChange={(e) =>
                              handleInputChange("startTime", e.target.value)
                            }
                            type="time"
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          />
                        </div>
                        <div>
                          <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                            End Time
                          </label>
                          <input
                            onChange={(e) =>
                              handleInputChange("endTime", e.target.value)
                            }
                            type="time"
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
                  Qualifcations
                </label>
                <div className="w-full px-4 py-10 sm:px-6 lg:px-8">
                  {qualifications.map((qual, index) => (
                    <div
                      key={index}
                      className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
                    >
                      <input
                        type="text"
                        value={qual.category}
                        onChange={(e) =>
                          handleQualificationChange(
                            index,
                            "category",
                            e.target.value
                          )
                        }
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      />
                      <input
                        type="text"
                        value={qual.keywords.join(", ")}
                        onChange={(e) =>
                          handleQualificationChange(
                            index,
                            "keywords",
                            e.target.value
                              .split(",")
                              .map((keyword) => keyword.trim())
                          )
                        }
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      />
                    </div>
                  ))}
                  <div className="mt-5 flex justify-between">
                    <button
                      className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
                      onClick={(e) => {
                        e.preventDefault();
                        addQualification();
                      }}
                    >
                      Add Qualification
                    </button>
                    <button
                      className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600"
                      onClick={(e) => {
                        e.preventDefault();
                        removeQualification();
                      }}
                    >
                      Remove Qualification
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid">
              <button
                onClick={handleSubmit}
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Create Job
              </button>
            </div>

            <div className="mt-3 text-center"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
