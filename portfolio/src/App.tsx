import ProjectList from "./components/ProjectList";
import Name from "./components/Name";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";

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

function App() {
  const classes = useStyles();
  const localProjectList = [
    {
      title: "Github",
      description: "Desc",
      image: "https://duckduckgo.com/assets/common/dax-logo.svg",
    },
    {
      title: "Github",
      description: "Desc",
      image: "https://duckduckgo.com/assets/common/dax-logo.svg",
    },
    {
      title: "Github",
      description: "Desc",
      image: "https://duckduckgo.com/assets/common/dax-logo.svg",
    },
    {
      title: "Github",
      description: "Desc",
      image: "https://duckduckgo.com/assets/common/dax-logo.svg",
    },
  ];
  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <AppBar></AppBar>
        <Name name="Patrick Beagan" />
        <ProjectList projects={localProjectList} />
      </header>
    </div>
  );
}

export default App;
