import ProjectList from "./components/ProjectList";
import Name from "./components/Name";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import React from "react";
import Ticker from "react-ticker";

const useStyles = makeStyles({
  app: {
    textAlign: "center",
  },

  appHeader: {
    minHeight: "50vh",
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
      <Ticker>
        {({ index }) => (
          <>
            <h1>This is the Headline of element #{index}!</h1>
            <img src="https://duckduckgo.com/assets/common/dax-logo.svg" alt="" />
          </>
        )}
      </Ticker>
      <header className={classes.appHeader}>
        <Name name="Patrick Beagan" />
        <ProjectList projects={localProjectList} />
      </header>
    </div>
  );
}

export default App;
