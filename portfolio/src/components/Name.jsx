import React from "react";
import Typography from "@material-ui/core/Typography";

const Name = (props) => {
  const { name } = props;
  return <Typography variant="h2">{name}</Typography>;
};

export default Name;
