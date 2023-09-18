import React from "react";

const CustomInput = ({ lable, type, name, placeholder }) => {
  return (
    <div className="flex flex-col justify-start items-start w-full">
      <label
        htmlFor={name}
        className="text-white text-[13px] mb-[4px] capitalize"
      >
        {lable}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="border-[1px] border-white rounded-[4px] w-full bg-transparent py-[12px] px-[20px] text-white/25 placeholder:text-white/25 outline-none"
      />
    </div>
  );
};

export default CustomInput;
