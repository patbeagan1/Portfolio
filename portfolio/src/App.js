import "./css/App.css";
import ProjectList from "./components/ProjectList";
import Name from "./components/Name";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";

const useStyles = makeStyles({
  app: {
    textAlign: "center",
  },

  appHeader: {
    backgroundColor: "#282c34",
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
  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <AppBar ></AppBar>
        <Name name="Patrick Beagan" />
        <ProjectList
          projects={[
            {
              title: "Github",
              description: "Desc",
              image: "https://imagemagick.org/image/wizard.png",
            },
            {
              title: "Github",
              description: "Desc",
              image: "https://imagemagick.org/image/wizard.png",
            },
            {
              title: "Github",
              description: "Desc",
              image: "https://imagemagick.org/image/wizard.png",
            },
            {
              title: "Github",
              description: "Desc",
              image: "https://imagemagick.org/image/wizard.png",
            },
          ]}
        />
      </header>
    </div>
  );
}

export default App;
