import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ----object-----htmlelement(render)

//const heading=React.createElement("h1",{id:"heading"},"React Learning part 2");
//console.log(heading);

//jsx is transpiled by parcel(parcel is manager and done by babel)--before it reaches js engine
//Babel is installed by parcel--it converts code to code react will understand
//jsx code is transpiled to react.createelement ---js object----html element(render)


//React element
const JsxHeading = () => (<h1 className="head" tabIndex="1">
                React Learning using jsx
                </h1>);
console.log(JsxHeading);


//React component.
//everything is component in react header,footer,etc.
//class based components----old way to write code

//functional components------new way to write code
//const HeadingComponent1 = () =>  {
//return <h1 className="heading">Functional component</h1>};
//THIS IS COMPONENT COMPOSITION
const HeadingComponent2 = () =>  (
  <div id="container">
    <JsxHeading/>
   <h1 className="heading">Functional component</h1>
   </div>);

//Both are same--if 1 line is 1 only than no need of return
//const fn1 = () => true;

//const fn2 = () => {
//  return true;
//}
const number=9800
//tutorial personal practice
const Prac1 = () => (<h2>This is component which will go inside Prac2</h2>)
const Prac2 = () =>(
  <div id="NewContainer">
    <HeadingComponent2/>
    <h2>{number}</h2>
    <Prac1/>
    <h2>This is component inside which Prac1 will come</h2>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
root.render(<HeadingComponent2/>);
root.render(<Prac2/>);


