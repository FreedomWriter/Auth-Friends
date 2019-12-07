import React from "react";
import { Link } from "react-router-dom";

const Logout = ({ handleSubmit }) => {
  return (
    <li>
      <Link onClick={handleSubmit}>Logout</Link>
    </li>
  );
};

export default Logout;
