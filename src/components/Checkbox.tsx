// Checkbox.tsx
import React, { useState } from "react";

interface CheckboxProps {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex items-center cursor-pointer" onClick={handleClick}>
      <div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center mr-2">
        {checked && <div className="w-4 h-4 rounded-full bg-green-500" />}
      </div>
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
