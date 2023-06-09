import { useState } from "react";

const useInput = (validate) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validate(value);
  const isInvalid = !isValid && isTouched;

  const changeHandler = (val) => {
    setValue(val);
  };
  const blurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    isValid,
    isInvalid,
    changeHandler,
    blurHandler,
    reset,
  };
};

export default useInput;
