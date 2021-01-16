import React from "react";
import Ticker from "react-ticker";
import Homescreen from "./screens/Homescreen";

function App() {
  return (
    <div>
      <Ticker>
        {({ index }) => (
          <>
            <h1>This is the Headline of element #{index}!</h1>
            <img
              src="https://duckduckgo.com/assets/common/dax-logo.svg"
              alt=""
            />
          </>
        )}
      </Ticker>
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
