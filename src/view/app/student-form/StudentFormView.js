import React from "react";
import StudentForm from "../../../component/app/student/student-form/StudentForm";

const StudentFormView = ({ isLoggedIn }) => {
  return (
    <div className="form">
      {isLoggedIn ? (
        <StudentForm>
          <h3>Create New Student</h3>
        </StudentForm>
      ) : (
        <h1>You have to first login with your account !</h1>
      )}
    </div>
  );
};

export default StudentFormView;
