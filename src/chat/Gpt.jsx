import React, { useRef } from 'react';

const Gpt = () => {
const inputRef = useRef(null);
const focusInput = () => {
  inputRef.current.focus(); // input 요소에 포커스
};
    return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter text here" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};







export default Gpt;