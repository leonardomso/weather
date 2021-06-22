import { useState } from "react";

const useUnit = () => {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

  const changeUnit = () => {
    if (unit === "metric") setUnit("imperial");
    else setUnit("metric");
  };

  return {
    unit,
    changeUnit,
  };
};

export default useUnit;
