import React from "react";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";

const Error = ({ text }) => (
  <Alert variant={"danger"} className="m-auto mt-3 mt-md-5">
    {text}
  </Alert>
);

Error.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Error;
