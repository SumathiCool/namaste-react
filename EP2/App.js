import React from "react";
import ReactDOM from "react-dom";



// {} - add attribute to the element

// const heading = React.createElement("h1",{id: "head"},"Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// add one more div and one single child

// const parent = React.createElement("div" , {id: "parent"} , 
// React.createElement("div" , {id: "child"} ,
// React.createElement("h1", {id:"heading"} , "I am h1 tag")
// )
// );

// add sibling tag - using array bracket

const parent = React.createElement("div" , {id: "parent"} , 
React.createElement("div" , {id: "child"} ,
[React.createElement("h1", {id:"heading"} , "I am h1 tag") , React.createElement("h2", {id:"heading"} , "I am h2 tag")]
)
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);




