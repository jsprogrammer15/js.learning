console.log("abdullah")

const accountId = 124;
let accountEmail = "ab@gmail.com";
var pass ="123460"
accountCity = "karachi"

// accountId =555 = changing the const variable not allowed 

console.log(accountId);
accountEmail ="hb@google"
accountCity="lahore";
pass= 5645;
let accountState;
/*

prefer not to use var
because of issue in blockscope and functional scope


*/

// console.table([accountId,accountEmail,pass,accountCity,accountState])

//data types

let number = 55
let bigint =444
let name = "abdullah"
let bool = true;
let empty = null;
let city;
// let try =unique;

console.table([typeof 55,typeof bigint,typeof name,typeof bool,typeof empty,typeof city,])

// type of undefine == undefined
// type of null == object

// null (standalone value)

// datatype conversion confusion

// to know the type of data coming from frontend we use conversion

let score = "33"

console.log(typeof score) // give datatype
console.log(typeof(score)) //also use for knowing datatype

let scoreInNumber= Number(score)  // conversion from string to number
console.log(typeof (scoreInNumber))

let some = "33abc" // not a number
let study = null; // output 0

let example; // NaN

// FOR CONVERSION
let con =Number(some);
let not =Number(study)
let testExample =Number(example)


// DATATYPE
console.log(typeof con)
console.log(typeof not)
console.log(typeof testExample)


// VALUE OF VARIABLE AFTER CONVERSION
console.log(con)
console.log(not)
console.log(testExample)

let tree= true;
let convertTree = Number(true)

console.log(typeof convertTree)
console.log(convertTree)
//IN NUMBERS

// "33" ==33
//"33abc"== NaN

// TRUE ===1
//FALSE ===0

// IN BOOLEAN

//1===TRUE
//0 === FALSE

//""===FALSE
//"ABC"===TRUE


//IN STRING 
33 ==="33"


//comparison

console.log(2<1)
console.log(2>1)
console.log(2==1)
console.log(2!=1)


// stack (primitives) will make changes to copy
// heap (non-primitives) will make changes to orignal refernce

// stack example

let myHobby ="read books"

myRoutine = myHobby;

console.log(myRoutine);

myRoutine = "play cricket";

console.log(myRoutine);
console.log(myHobby);
// heap example 

let userOne ={
    name: "abd",
    email: "abd@gooogle.com"
}

userTwo =userOne;

userTwo.email ="acx@ahoo.com"
console.log(userOne.email);
console.log(userTwo.email);


