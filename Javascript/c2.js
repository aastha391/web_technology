// // // #object creation
// // const user={
// //     name:"Aqwerty",
// //     Age:34,
// //     welcome:function()
// //     {
// //         console.log(`${this.name},welcome to ES6`)
// //         console.log(this)
// //     }
// // }
// // user.welcome()
// // user.name="test"
// // user.welcome()
// // console.log(this.name)

// // const employee={
// //     name:"Ytrewq",
// //     dept:"Accounts",
// //     info:function(){
// //         console.log(`Name: ${this.name}`)
// //     }
// // }
// // employee.info()
// // employee.name="zxcv"
// // employee.info()
// // console.log(this.name)
// // let a=3
// // function outer(){
// //     let b=4;
// //     let x=10;
// //     // console.log(x)
// // // }
// // function inner(){
// //     let c=5
// //     console.log(a,b,c)
// // }

// // inner()
// // }
// // outer()
// // // inner()
// let abc={
//     name:"qwerty",
//     outer:function()
//     {
//         console.log("Here in log",this.name)
//         inner=()=>
//         {
//             console.log("in inner",this.name)
//             //lexical this works only with anonymous / arrow(=>) functions
//         }
//         inner();
//     }
// }
// abc.outer()
// let numbers=[10,20,30]
// let [a,b,c,d]=numbers
// const [x1,...y1]=numbers
// console.log("a=",a,"  b=",b," c=",c," ",d,y1)

// [a,b,c]=[c,b,a]
// console.log("a=",a,"  b=",b," c=",c)



//---------Array Destructuring---------//
let numbers=[10,20,30]

let[a,b,c]=numbers;
console.log("a=",a)
console.log("b=",b)
console.log("c=",c)

//Swapping
let p=10;
let q=20;
[p,q]=[q,p]

console.log("p=",p)
console.log("q=",q)

const arr=[10,20,30]
const[a1,b1,c1,d1]=arr
const[x1,...y1]=arr//rest operator
console.log(a1,b1,c1,d1)
console.log(x1)
console.log(y1)

let myObj={
    name:"Preeti",
    age:32,
    key:"XYZ"
}

//let duplicate={...myObj,key:"ABC"};//Default values 
let duplicate={name:myObj.name,age:myObj.age};//to get only specific properties of object
duplicate["Add"]="GZB"

console.log("myObj :",myObj)
console.log("Duplicate : ",duplicate)

//----Object Destructuring---------//
let Obj={
    name:"Aastha",
    age:20
}
Obj.name="Payal"
let {name,age:CurrentAge}=Obj
console.log(name)
console.log(CurrentAge)

//Object of Employee by object destructuring
let emp={
    name:"Ajay",
    empId:"001",
    Department:"CS"
}

let myEmp={...emp,Department:"IT"};
console.log(emp)
console.log(myEmp)

let Name=emp.name
let empId=emp.empId
console.log(Name)
console.log(empId)

function show({name,age}){//{} around name and age if we pass complete object in function call
    console.log(`My name is ${name} and age is ${age}`)
}
//show(myObj.name,myObj.age)
show(myObj)


//-------------Rest and Spread Operator----------//
function sum(...numbers){
    return numbers.reduce((a,b)=>a+b,0);
}

console.log(sum(1,2,4,5,6,7,8))


function display(a,...b){
    console.log(a)
    console.log(b)
}

display(1,2,3,4,6,7)


//spread means expands combining two arrays 
const ar=[10,20,30]
const br=[40,50,60]
const final=[...ar,...br]
console.log(final)

