import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";
import React from "react";

const useStyles = makeStyles({
  projectCardContainer: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(100, 105, 100, .3)",
  },
});

const ProjectList = (props: { projects: any }) => {
  const { projects } = props;
  const classes = useStyles();
  const SingleItem = (props: any) => {
    return (
      <Grid md={3} sm={4} xs={6} item>
        <ProjectCard {...props} className={classes.projectCardContainer} />
      </Grid>
    );
  };
  return (
    <Grid container>{projects.map((project: any) => SingleItem(project))}</Grid>
  );
};

export default ProjectList;
