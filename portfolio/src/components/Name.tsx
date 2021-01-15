import React from "react";
import Typography from "@material-ui/core/Typography";

const Name = (props: { name: string }) => {
  const { name } = props;
  return <Typography variant="h2">{name}</Typography>;
};

export default Name;
