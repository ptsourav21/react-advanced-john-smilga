import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("random message");

  const changeMessage = () => {
    // setPerson({...person, message: 'Hello World Message'})
    setMessage("Hello World");
  };
  return (
    <>
      <h4>{name}</h4>
      <h4>{age}</h4>
      <h4>{message}</h4>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
