import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Header = (/*props*/ { headerTitle, navbarItems, isLoggedIn, setIsLoggedIn }) => {
  // const { headerTitle, navbarItems } = props;
  // console.log(props);
  // console.log("header.js giydirildi");
  
  const handleLogOut=()=>{
    setIsLoggedIn(false);
  }
  return (
    <header className="app-header">
      <div className="logo">
        <span>
          <i className="fa-solid fa-school fa-2xl"></i>
        </span>
        <h2>{headerTitle}</h2>
      </div>

      {isLoggedIn ? (
        <nav>
          <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/studentlist">Students</Link>
        </li>
        <li>
          <Link to="/add-student">Add Students</Link>
        </li>
        <li>
        <Link onClick={handleLogOut}to="/home">
          <i class="fa-solid fa-right-from-bracket"></i>
        </Link>
      </li>
        </nav>
      ) : (
        <nav>
          <li>
          <Link to="/home">Home</Link>
        </li>
        {/* <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">
            <i class="fa-solid fa-user-plus"></i>
          </Link>
        </li> */}
        </nav>
      )}
      
    </header>
  );
};

Header.defaultProps = {
  headerTitle: "Lorem Ipsum",
  navbarItems: ["Lorem", "Ipsum", "Dolor"],
};

Header.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  navbarItems: PropTypes.arrayOf(PropTypes.string),
};

export default React.memo(Header);
