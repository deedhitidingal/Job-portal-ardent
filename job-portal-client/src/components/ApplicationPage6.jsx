import React, { useState } from "react";
import SideBarJobPost from "./SideProgressBar.jsx/SideBarJobPost";

const ApplicationPage6 = () => {
  const [formData, setFormData] = useState({
    eligibility: "",
    backgroundCheck: "",
    startDate: "",
    salary: "",
  });

  // State to track the current step and sub-step
  const [currentStep, setCurrentStep] = useState(3);
  const [currentSubStep, setCurrentSubStep] = useState(3);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Move to the next step or sub-step after submission
    if (currentSubStep < 4) {
      setCurrentSubStep(currentSubStep + 1);
    } else {
      setCurrentStep(currentStep + 1);
      setCurrentSubStep(null);
    }
  };

  return (
    <div className="min-h-screen max-w-screen-2xl container bg-gray-200 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-3/4 p-8 mt-10 mb-10">
        <div className="flex">
          {/* Sidebar */}
          <SideBarJobPost
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            currentSubStep={currentSubStep}
            setCurrentSubStep={setCurrentSubStep}
          />

          {/* Main Form */}
          <div className="w-4/5">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Application Questions</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700">
                    Are you legally eligible to work in the country and location
                    specified?
                  </label>
                  <input
                    type="text"
                    name="eligibility"
                    value={formData.eligibility}
                    onChange={handleChange}
                    className="mt-2 p-3 w-full border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-gray-700">
                    Do you consent for background check?
                  </label>
                  <input
                    type="text"
                    name="backgroundCheck"
                    value={formData.backgroundCheck}
                    onChange={handleChange}
                    className="mt-2 p-3 w-full border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-gray-700">
                    Available date to start position?
                  </label>
                  <input
                    type="month"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="mt-2 p-3 w-full border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-gray-700">
                    Expected Salary? (Enter annual range)
                  </label>
                  <input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    className="mt-2 p-3 w-full border rounded-lg"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-3 rounded-lg"
                >
                  Save and Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage6;
