import React, { useState } from "react";

export const WorkCalculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [calc, setCalc] = useState(0);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInput = (event) => {
    event.preventDefault();
    if (inputValue !== "") {
      setCalc(parseFloat(inputValue) * 0.6);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Work Calculator</h1>
        <form onSubmit={handleInput} className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Enter $"
            value={inputValue}
            onChange={handleChange}
            className="px-4 py-2 border rounded w-full"
          />
          <button
            type="submit"
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Calculate
          </button>
        </form>
        <div className="text-xl font-semibold">Result: {calc}</div>
      </div>
    </div>
  );
};
