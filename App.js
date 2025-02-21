import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const element = <span>React element</span>;
const Title = () => <h1 className="head">I'm Hajer </h1>;
// React functional component
const number = 1000;
const HeadingComponent = () => (
  <div id="container">
    <h2>{number}</h2>
    {element}
    <Title></Title>
    <Title/>
    {Title()}
    <h1>Learn React</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
