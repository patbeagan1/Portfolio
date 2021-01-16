import React from "react";
import Homescreen from "./screens/Homescreen";

function App() {
  return (
    <Homescreen
      localProjectList={[
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
      ]}
    />
  );
}

export default App;
