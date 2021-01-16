import ProjectList from "../components/ProjectList";
import Name from "../components/Name";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  app: {
    textAlign: "center",
  },
  appHeader: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
});

function Homescreen(props: { localProjectList: any }) {
  const classes = useStyles();
  const { localProjectList } = props;
  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <Name name="Patrick Beagan" />
        <ProjectList projects={localProjectList} />
      </header>
    </div>
  );
}

export default Homescreen;
