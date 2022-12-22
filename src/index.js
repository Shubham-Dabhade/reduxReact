import { compose, pipe} from "lodash/fp";

let input="    Javascript    ";

const trim = (str)=>{return str.trim()};
const wrapInDiv= (str)=>{return `<div>${str}</div>`};
const toLowerCase= (str)=>{return str.toLowerCase()};



//compose is a higher order function which takes functions as an argument and returns a combined function
//the functions are to be passed in the order from right to left, in their order of execution
//similar to as==> wrapInDiv(toLowerCase(trim(input)));  here the output from right most inside function
//becomes the input for toLowerCase() and the cycle continues

const transform = compose(wrapInDiv,toLowerCase,trim);

//here the transform function contains the reference to the combined function from compose
//calling the tranform function and providing it an input
const result=transform(input);//result contains the value==>"<div>javascript</div>"

//but as we can see that the order in which the functions are passed in as an argument is from right to left
//to understand it better and to change the order from left to right, *in the order they are to be used
// we use pipe #here in following the flow goes in ---> left to right direction
const pipedFunction= pipe(trim,toLowerCase,wrapInDiv);
const resultPipe=pipedFunction(input);
