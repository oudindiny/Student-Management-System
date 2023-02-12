import React from "react";
import data from "../data";

const MainPage = () => {
  const tableData = data;
  console.log(tableData);
  return (
    <div className="MainPage">
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
      <div className="tables">
        <div className="table color_gray">
          <div className="no">
            <p>No</p>
          </div>
          <div className="bookName">
            <p>책 제목</p>
          </div>
          <div className="readDate">
            <p>대여 일자</p>
          </div>
        </div>
        <div className="table">
          <div className="no">
            <p>{tableData[0].no}</p>
          </div>
          <div className="bookName">
            <p>{tableData[0].bookName}</p>
          </div>
          <div className="readDate">
            <p>{tableData[0].readDate}</p>
          </div>
        </div>
        <div className="table2">
          <div className="no">
            <p>{tableData[1].no}</p>
          </div>
          <div className="bookName">
            <p>{tableData[1].bookName}</p>
          </div>
          <div className="readDate">
            <p>{tableData[1].readDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
