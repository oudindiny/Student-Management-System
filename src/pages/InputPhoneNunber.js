import React, { useEffect, useState } from "react";

const InputPhoneNunber = () => {
  const [phoneNumber, setphoneNumber] = useState([]);

  const handlePhoneNumber = (e) => {
    setphoneNumber([...phoneNumber, e.target.innerText]);
    if (phoneNumber.length <= 4) {
      setphoneNumber([...phoneNumber, e.target.innerText]);
    } else {
    }
  };
  console.log(phoneNumber);
  return (
    <div className="InputPhoneNunber">
      <div className="input">
        <input></input>
      </div>
      {/* <div className="number">
        <input type="button" id="1" onClick={handlePhoneNumber(this.id)} />
      </div> */}
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
