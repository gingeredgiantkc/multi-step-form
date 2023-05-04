import React from "react";

const FirstForm = ({ formValues, onChange }) => {
  return (
    <div className="mx-auto grid w-4/5 grid-flow-row">
      <form className="bg-white shadow-xl drop-shadow-xl col-span-3 h-[550px] px-12 pt-16 pb-2 mt-8 mb-0 rounded-md">
        <div className="gap-4 place-content-center mx-auto items-center z-0">
          <h1 className="text-gray-700 pb-8 font-bold text-2xl col-start-3 items-center">Agent Info</h1>
        </div>
        <div className="grid grid-col-3 gap-4">
          <div className="mb-4 col-start-1 col-end-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fn"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none rounded bg-slate-100 border-b-gray-400 w-full py-2 px-3 border-2 border-gray-100 hover:border-b-gray-600"
J              id="fn"
              name="fn"
              type="text"
              placeholder="First Name"
              onChange={onChange}
              value={formValues.fn}
            ></input>
          </div>
          <div className="mb-6 col-start-2 col-end-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="ln"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none rounded bg-slate-100 border-b-gray-400 w-full py-2 px-3 border-2 border-gray-100 hover:border-b-gray-600 focus:border-b-gray-600 focus-within:border-b-gray-600 "
              id="ln"
              name="ln"
              onChange={onChange}
              value={formValues.ln}
              type="text"
              placeholder="Last Name"
            ></input>
          </div>
        </div>
        <div className="flex items-center justify-between" />
      </form>
    </div>
  );
};

export default FirstForm;
