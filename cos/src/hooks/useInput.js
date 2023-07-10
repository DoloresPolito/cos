import { useState } from "react";

export function useInput() {
  const [value, setValue] = useState("");

  function onChange(e) {
    setValue(e.target.value);
    console.log(value)
  }

  return { value, onChange };
};


