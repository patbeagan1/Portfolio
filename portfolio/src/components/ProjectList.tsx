import { Grid } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import React from "react";

const ProjectList = (props: { projects: any }) => {
  const { projects } = props;
  const SingleItem = (props: any) => {
    return (
      <Grid md={3} sm={4} xs={6} item>
        <ProjectCard {...props} />
      </Grid>
    );
  };
  return (
    <Grid container>{projects.map((project: any) => SingleItem(project))}</Grid>
  );
};

export default ProjectList;
