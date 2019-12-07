import React from "react";
import { Link } from "react-router-dom";

const Logout = ({ handleSubmit }) => {
  return (
    <li>
      <Link to="/" onClick={handleSubmit}>
        Logout
      </Link>
    </li>
  );
};

export default Logout;
