import React from "react";

const Svg = ({ children, ...rest }) => {
  return <svg {...rest}>{children}</svg>;
};

export default Svg;
