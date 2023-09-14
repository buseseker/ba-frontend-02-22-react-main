import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";

//Style
import "./App.scss";

//Components
import Header from "./component/shared/header/Header";
import StudentProvider from "./context/student/StudentContext";
import StudentFormView from "./view/app/student-form/StudentFormView";
import Login from "./view/auth/login/Login";
import NotFoundPage from "./view/shared/not-found/NotFoundPage";
import Register from "./view/auth/register/Register";
import Home from "../src/view/app/home/Home"
import StudentListView from "./view/app/student-list/StudentListView";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <BrowserRouter>
      <StudentProvider>
        <div className="app">
          <Header  isLoggedIn={isLoggedIn}
            headerTitle="Student Manager"
            navbarItems={["Home", "Profile", "Logout"]}
          />
          <Routes>
            <Route path="/home" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userName={userName}/>} />
            <Route path="/studentlist" element={<StudentListView isLoggedIn={isLoggedIn} />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName}  />}></Route>
            <Route path="/register" element={<Register userName={userName} setUserName={setUserName} />}></Route>
            <Route path="/add-student" element={<StudentFormView  isLoggedIn={isLoggedIn}/>}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </div>
      </StudentProvider>
    </BrowserRouter>
  );
}

export default App;
