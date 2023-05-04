import React from "react";

const StepperControl = ({handleClick, currentStep, steps}) => {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await setTimeout(() => {
      console.log("form", values);
    }, 2000);
    return response;
  };


  return (
    <div className="container flex justify-around mt-4 mb-8">
      {/* back button */}
      <div>
        <button 
          onClick={() => handleClick()}
          className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold
          cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition
          duration-200 ease-in-out col-start-2 ${
            currentStep === 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          Back
        </button>
      </div>
      {/* next button */}
      {currentStep === steps.length ? (
        <div>
          <button
            className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold
            cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out col-end-3"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </div>
      ) : (
        <div>
          <button
            className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold
            cursor-pointer border-2 border-green-500 hover:border-slate-700 hover:bg-slate-700
            hover:text-white transition duration-200 ease-in-out col-end-3"
            onClick={() => handleClick("next")}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
};
export default StepperControl;