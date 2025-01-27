import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./CustomerSlice";

function CreateCustomer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch();

  function handleClick() {
    if (!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
    setFullName("");
    setNationalId("");
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Create new customer</h2>
      <div className="bg-gray-100 p-8 rounded-md shadow-md space-y-4">
        <div className="flex items-center gap-4">
          <label className="w-40 font-medium">Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="flex-1 border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div className="flex items-center gap-4">
          <label className="w-40 font-medium">National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
            className="flex-1 border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white uppercase font-semibold px-4 py-2 rounded hover:bg-blue-600"
        >
          Create new customer
        </button>
      </div>
    </div>
  );
}

export default CreateCustomer;
