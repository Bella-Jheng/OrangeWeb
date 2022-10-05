import { useReducer } from "react";

const initialValue = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { value: action.value, isTouched: state.isTouched };
    case "BLUR":
      return { isTouched: true, value: state.value };
    case "RESET":
      return { value: '', isTouched: false };
    default:
      return;
  }
};
const useInputPractice = (validation) => {
  const [inputState, dispatch] = useReducer(inputStateReducer,initialValue);
  const {value,isTouched} = inputState

  const enterValueIsValid = validation(value);
  const enterValueIsInvalid = !enterValueIsValid && isTouched;

  const onEnterValueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };
  const onInputIsTouchedHandler = (event) => {
    dispatch({ type: "BLUR" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    enterValue : value,
    hasError: enterValueIsInvalid,
    onEnterValueChangeHandler,
    onInputIsTouchedHandler,
    reset,
  };
};

export default useInputPractice;
