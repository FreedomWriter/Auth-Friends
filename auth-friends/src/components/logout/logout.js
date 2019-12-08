import React from "react";
import { CustomLink } from "../custom-link/link.styles";

const Logout = ({ handleSubmit }) => {
  return (
    <CustomLink to="/" onClick={handleSubmit}>
      Logout
    </CustomLink>
  );
};

export default Logout;
