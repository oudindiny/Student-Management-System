import React, { useEffect, useState } from "react";

const InputPhoneNunber = () => {
  const [phoneNumber, setphoneNumber] = useState();

  const handlePhoneNumber = (it) => {
    return (phoneNumber) => {
      setphoneNumber([...phoneNumber], `${it}`);
    };
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
      <button
        id="1"
        onClick={() => {
          handlePhoneNumber("1");
        }}
      >
        1
      </button>
    </div>
  );
};
export default InputPhoneNunber;
