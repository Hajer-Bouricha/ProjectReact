/**
 * <div id="parent">
 *    <div id="child">
 *        <h1> I am H1 tag</h1>
 * <h2> I am H2 tag</h2>
 *    </div>
 *
 * <div id="child2">
 *        <h1> I am H1 tag</h1>
 * <h2> I am H2 tag</h2>
 *    </div>
 * </div>
 *createElement() =>html brower understand
 *
 *
 *jsx
 */
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, " I am H1 tag"),
    React.createElement("h2", {}, " Learn parcel"),
    React.createElement("h3", {}, " I am H3 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, " I am H1 tag"),
    React.createElement("h2", {}, " I am H2 tag"),
    React.createElement("h3", {}, " I am H3 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xzy: "abc" },
//   "hello world from react"
// );
// console.log(heading);//return objet
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
