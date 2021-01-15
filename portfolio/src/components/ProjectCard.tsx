import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    margin: 20,
    minWidth: 200,
    // padding: "10px",
  },
  contentImage: {
    width: "100%",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardContent: {
    border: 0,
    borderRadius: 3,
    color: "white",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
});

export default function ProjectCard(props: any) {
  const classes = useStyles();
  const { title, description, image } = props;
  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {description}
        </Typography>
        <img src={image} className={classes.contentImage} alt="Project" />
      </CardContent>
      <CardActions>
        <Button size="small">Visit</Button>
      </CardActions>
    </Card>
  );
}
