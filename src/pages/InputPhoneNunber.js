import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const InputPhoneNunber = () => {
  const [phoneNumber, setphoneNumber] = useState([]);
  const navigate = useNavigate();

  const handlePhoneNumber = (e) => {
    setphoneNumber([...phoneNumber, e.target.innerText]);
    if (phoneNumber.length === 4) {
      const test = phoneNumber.join("");
      navigate(`/${test}`, { replace: "true" });
    } else {
      setphoneNumber([...phoneNumber, e.target.innerText]);
    }
  };

  return (
    <div className="InputPhoneNunber">
      <div className="input">
        <input></input>
      </div>

      <span>{phoneNumber}</span>
      <button onClick={handlePhoneNumber}>1</button>
      <button onClick={handlePhoneNumber}>2</button>
      <button onClick={handlePhoneNumber}>3</button>
      <button onClick={handlePhoneNumber}>4</button>
      <button onClick={handlePhoneNumber}>5</button>
      <button onClick={handlePhoneNumber}>6</button>
      <button onClick={handlePhoneNumber}>7</button>
      <button onClick={handlePhoneNumber}>8</button>
      <button onClick={handlePhoneNumber}>9</button>
      <button onClick={handlePhoneNumber}>0</button>
    </div>
  );
};
export default InputPhoneNunber;
