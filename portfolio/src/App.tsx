import React from "react";
import Homescreen from "./screens/Homescreen";
import Marquee from "./components/Marquee";

function App() {
  return (
    <div>
      <Marquee />
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
    </div>
  );
}

export default App;
