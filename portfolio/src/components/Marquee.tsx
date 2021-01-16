import Ticker from "react-ticker";

export default function Marquee() {
  return (
    <Ticker>
      {({ index }) => (
        <>
          <h1>This is the Headline of element #{index}!</h1>
          <img src="https://duckduckgo.com/assets/common/dax-logo.svg" alt="" />
        </>
      )}
    </Ticker>
  );
}
