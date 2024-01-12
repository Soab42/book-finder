import { useState } from "react";

export default function Filter({ handleSort }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    // Update the state with the selected value when the user makes a selection
    setSelectedValue(event.target.value);
    handleSort(selectedValue);
  };
  return (
    <div className="flex items-stretch space-x-3">
      {/* <!-- Sort --> */}
      <select
        className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
        name="sortBy"
        id="sortBy"
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value="">Sort</option>
        <option value="name_asc">Name (A-Z)</option>
        <option value="name_desc">Name (Z-A)</option>
        <option value="year_asc">Publication Year (Oldest)</option>
        <option value="year_desc">Publication Year (Newest)</option>
      </select>
    </div>
  );
}
