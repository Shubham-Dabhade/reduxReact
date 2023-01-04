import { createStore } from 'redux';
import reducer from "./reduer";


const store=createStore(reducer);  //this returns a store object


export default store; 