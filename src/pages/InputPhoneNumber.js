import React from "react";
import data from "./../data";

const InputPhoneNumber = () => {
  const tableData = data;
  console.log(tableData);
  return (
    <div className="InputPhoneNumber">
      <div className="main">
        <div className="bookRegistration">
          <img src="./image/book.png"></img>
          <span>책 등록</span>
        </div>
        <div className="goHome">
          <img src="./image/student.png"></img>
          <span> 하원 </span>
        </div>
        <div className="logout">
          <img src="./image/logout.png"></img>
          <span>로그아웃</span>
        </div>
      </div>
      <div className="table">
        <div className="no">
          <p>{tableData.map((it) => it.no)}</p>
        </div>
        <div className="bookName">
          <p>{tableData.map((it) => it.bookName)}</p>
        </div>
        <div className="readDate">
          <p>{tableData.map((it) => it.readDate)}</p>
        </div>
      </div>
    </div>
  );
};

export default InputPhoneNumber;
