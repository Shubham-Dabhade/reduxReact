import { compose, pipe} from "lodash/fp";

let input="    Javascript    ";

const trim = (str)=>{return str.trim()};

//here we implemented the concept of currying where the parameters are seperated by "( )" instead of ","
const wrap = type=> str=> `<${type}>${str}</${type}>` ;
//the motive is to pass the parameter one at a time, so we create a function accepting 1st parameter then make it return a function which accepts the 2nd parameter and so and in the end use all those parameters

const toLowerCase= (str)=>{return str.toLowerCase()};


const pipedFunction= pipe(trim,toLowerCase,wrap("span"));
const resultPipe=pipedFunction(input);
console.log(resultPipe);



