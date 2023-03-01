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
    <div className="InputPhoneNumber">
      <div className="number">
        <span>{phoneNumber}</span>
      </div>

      <div className="col">
        <button onClick={handlePhoneNumber}>1</button>
        <button onClick={handlePhoneNumber}>2</button>
        <button onClick={handlePhoneNumber}>3</button>
      </div>
      <div className="col">
        <button onClick={handlePhoneNumber}>4</button>
        <button onClick={handlePhoneNumber}>5</button>
        <button onClick={handlePhoneNumber}>6</button>
      </div>
      <div className="col">
        <button onClick={handlePhoneNumber}>7</button>
        <button onClick={handlePhoneNumber}>8</button>
        <button onClick={handlePhoneNumber}>9</button>
      </div>
      <div className="col">
        <button onClick={handlePhoneNumber}>0</button>
      </div>
      <div className="col">
        <button onClick={handlePhoneNumber}>확인</button>
      </div>
    </div>
  );
};
export default InputPhoneNunber;
