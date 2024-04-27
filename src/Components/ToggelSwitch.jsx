import { useState } from "react";

export default function ToggleSwitch() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <label className="flex justify-center items-center gap-4 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="sr-only"
      />
      <div className={`relative w-14 h-7 bg-gray-300 rounded-full p-1 transition-colors ${checked?"bg-green-600":null}`}>
        <div className={`absolute w-5 h-5 bg-white rounded-full transition-transform transform ${checked ? "translate-x-7": ""}`}></div>
      </div>
    </label>
  );
}
