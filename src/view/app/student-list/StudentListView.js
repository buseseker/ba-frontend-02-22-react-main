import React from "react";
import StudentList from "../../../component/app/student/student-list/StudentList";

const StudentListView = ({ isLoggedIn }) => {
  
  return (
    <div className="list">
      {isLoggedIn ? (
        <StudentList></StudentList>
      ) : (
        <h1>You have to first login with your account !</h1>
      )}
    </div>
  );
};

export default StudentListView;
