import React, { useState } from "react";
//use
//component name must be uppercase
//must be in the function/component body
//can not call conditionally

const UseStateBasics = () => {
  // console.log(useState('Hello World'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1]
  // console.log(value, handler);

  const [text, setText] = useState("Random Title");
  const handleClick = () => {
    if (text == "Random Title") {
      setText("Hello World");
    } else {
      setText("Random Title");
    }
  };
  return (
    <>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default UseStateBasics;
