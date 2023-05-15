import React from 'react';

const Navigation = ({ steps, currentStep, handleClick }) => {
	return (
    <div className="container flex justify-around my-8 ">
      <button
        onClick={() => handleClick()}
        className={`bg-gray-400 text-slate-500 uppercase transition duration-200 ease-in-out border-slate-300
        font-semibold border-2 py-2 px-4 rounded-xl ${
          currentStep === 1
          ? "opacity-50 cursor-none"
          : "hover:bg-slate-700 hover:text-white cursor-pointer"
        }`}
      >
        Back 
      </button>
      <button
        type="submit"
        onClick={() => handleClick("next")}
        className="bg-green-500 text-slate-100 uppercase transition duration-200 ease-in-out border-slate-300
        hover:bg-slate-700 hover:text-white font-semibold cursor-pointer border-2 py-2 px-4 rounded-xl"
      >
        {currentStep === steps.length
        ? "Submit"
        : "Next"}
      </button>
    </div>
	)
};

export default Navigation;
//Wizard.js