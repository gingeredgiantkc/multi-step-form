import React from "react";

const SecondForm = ({ formValues, onChange }) => {
  return (
    <div className="mx-auto grid w-4/5 grid-flow-row">
      <form className="bg-white shadow-xl drop-shadow-xl col-span-3 h-[550px] px-12 pt-16 pb-2 mt-8 mb-0 rounded-md">
        <div className="gap-4 place-content-center items-center">
          <h1 className="text-gray-700 pb-8 font-bold text-2xl">Other Info</h1>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="csr"
          >
            Customer Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="csr"
            name="csr"
            type="text"
            placeholder="Customer Name"
            value={formValues.csr}
            onChange={onChange}
          ></input>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="btn"
          >
            BTN
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="btn"
            name="btn"
            type="text"
            placeholder="BTN"
            value={formValues.btn}
            onChange={onChange}
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="order"
          >
            Order Type
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="order"
            type="text"
            name="order"
            value={formValues.order}
            onChange={onChange}
            placeholder="Order Type"
          ></input>
        </div>
        <div className="flex items-center justify-between"></div>
      </form>
    </div>
  );
};

export default SecondForm;
