import React from "react";

const SelectLimit = ({pageLimits,onLimitChange}) => {
  return (
    <select className="px-lg-3 mx-lg-2" onChange={(e)=>onLimitChange(e.target.value)}>
    {
      pageLimits.map((value,index)=><option key={index} value={value}>{value}</option>)
    }
    </select>
  );
};

export default SelectLimit;
