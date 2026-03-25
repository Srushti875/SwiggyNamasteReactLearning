/** 
*<div id="parent">
*   <div id="child">
*        <h1></h1>
   </div>
*</div>
*/
const Parent =
React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},
   [ React.createElement("h1",{},"I am an h1 tag"),
    React.createElement("h1",{},"I am an h1 tag")]
));
console.log(Parent);
/**
 * 
 
const firstElement = React.createElement("h1",{id:"heading"},"I am learning React");*/
const container = ReactDOM.createRoot(document.getElementById("container"));
container.render(Parent);
