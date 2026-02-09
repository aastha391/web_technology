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

let duplicate={...myObj.key:"value"};//Default values 