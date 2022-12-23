/***implemeting immutability in updating objects and arrays
immutability:an object whose state cannot be modified after it is created. This is in contrast to a mutable object (changeable object), which can be modified after it is created
example: strings in javascript are immutable means 
let str1= "shubham";  here the original string does not change and the changes that need to be applied are applied on its copy↓
let str2= str1.upperCase();***/



///******** Understanding immutabilty in Objects *********///

//similarly to create objects immutable in javascript we have to apply changes to its copy here we need to understand that using const keyword for an object only allows it to not be assigned to another object but we can change change the object properties
const obj1={property1:"value1",property2:"value2"};
obj1.property1="someOtherValue";

///1 we can use ... operator
const obj2={...obj1,property1:"someNewValue"}; //here we first assign all the properties of obj1 to obj2 and provide the new value for property1 which overwrites the original value

///2 but the above is just a shallow copy for some nested objects we have to do a deep copy
const obj3={
    name:"Ajay",
    address:{
        country:"India",
        city:"mumbai"
    }
};

///*here we have to do deep copy*///
const obj4={...obj3,address:{...obj3.address,city:"Delhi"}}; //here we need to use the spread operator for the address property too because we have to understand that the original and the copy share the same property "address" in the memory so if we change the address without creating its copy the address in the original object will change too






