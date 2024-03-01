import React from "react";
import ReactDOM from "react-dom";

//REact Element
const JSXheading = <h1>Heading from JSX</h1>

//REact Functional component
//single line
const Heading = () => {
    return <h2>React Functional component</h2>;
}

//Multiple line 
//Component composition
const Heading1 = () => (
    <div id="container">
        <Heading />
        {Heading()}
        <Heading></Heading>
        {100 + 200}
        {JSXheading}
        <h1>Sample1</h1>
        <h2>Sample2</h2>
    </div>
);

console.log(JSXheading);
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(JSXheading);  --> React element rendering

root.render(<Heading1 />) ;  //REact component rendering




