import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";
import React from "react";

const useStyles = makeStyles({
  projectCardContainer: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
  },
});

const ProjectList = (props) => {
  const { projects } = props;
  const classes = useStyles();
  const SingleItem = (props) => {
    return (
      <Grid xs={3} item className={classes.projectCardContainer}>
        <ProjectCard {...props} />
      </Grid>
    );
  };
  return (
    <Grid container>{projects.map((project) => SingleItem(project))}</Grid>
  );
};

export default ProjectList;
