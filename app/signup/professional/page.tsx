"use client"
import React, { useState } from "react";
import DegreeForm from "../../Components/SignUpComponents/DegreeForm";
import PersonalInfoForm from "../../Components/SignUpComponents/PersonalInfoForm";
import UserForm from "../../Components/SignUpComponents/UserForm";
import { useRouter } from 'next/navigation'

const SignUp = () => {

  const router = useRouter();
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(true);

  const nextStep = () => {
    if (step < totalSteps && isCurrentFormValid) {
      setStep(step + 1);
    } else {
      alert("Please complete all fields correctly before proceeding.");
      console.error("Form is invalid!");
    }
    console.log(step);
  };

  const previousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStepContent = (step) => {
    const commonProps = {
      onValidityChange: setIsCurrentFormValid, // This prop is passed to each form
    };
    switch (step) {
      case 1:
        return <UserForm {...commonProps} />;
      case 2:
        return <PersonalInfoForm {...commonProps} />;
      case 3:
        return <DegreeForm {...commonProps} />;
      default:
        return <UserForm {...commonProps} />;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCurrentFormValid) {
      router.push("/professional");
    } else {
      alert("Please complete all fields correctly before submitting.");
      console.error("Form is invalid!");  
    }
  };

  return (
    <div className="dark:bg-slate-900 bg-gray-100 min-h-screen w-full flex flex-col items-center py-16">
      <main className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Sign up
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Already have an account?
                <a
                  className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="../signin"
                >
                  &nbsp;Sign in here
                </a>
              </p>
            </div>
            <div className="mt-3">{renderStepContent(step)}</div>
            <div className="flex justify-between items-center mt-4">
              {step > 1 && (
                <button
                  onClick={previousStep}
                  className="py-2 px-4 text-sm font-semibold rounded-lg border border-transparent bg-gray-200 text-gray-800 hover:bg-gray-300"
                >
                  Back
                </button>
              )}
              <div className="flex justify-end w-full">
                {step < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="py-2 px-4 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="py-2 px-4 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    i + 1 <= step ? "bg-blue-600" : "bg-gray-200"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
