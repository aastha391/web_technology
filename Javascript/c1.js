//mathods are first class objects in java

(function greet(){
    console.log("Hello")
})();// to avoid calling the function by its name again and again 

function abc(){
    console.log("Hi")
}
abc()

//Anonymous function
let show1=function(){
    console.log("Anonymous")
}

show1()

//Single line anonymous function
let show2=()=>console.log("Arrow")

show2()

let add=(c,d)=>c+d
console.log(add(4,5))


//Multiline anonymous function
let sum=(a,b)=>
{
    return a+b
}
console.log(sum(2,3))


let sum2=(a,b=5)=>//will run with the value that is used in calling the function ,will not use as b=5
{
    return a+b
}
console.log(sum2(2,3))


//Object functions 
let test=()=>({Name:"Aastha"})
console.log(test())


//Create a student class with attributes and find the 4th highest marks 

class Student{
    constructor(name ,marks){
        this.name=name
        this.marks=marks
    }
}

const s1=new Student("Ayaan",85)
const s2=new Student("Riya",92)
const s3=new Student("Aastha",67)
const s4=new Student("Palak",99)

const arr=[]
arr.push(s1)
arr.push(s2)
arr.push(s3)
arr.push(s4)

arr.sort((a,b)=>b.marks-a.marks);//as we know a and b will be objects so we nheed gto specify the basis on which we need to sort
console.log(arr[3])

//Program to find odd and even using function in expression and arrow function 
let result1=function(num){
    // if(num%2==0)
    //     return "Even"
    // else
    //     return "Odd"
    return num%2==0?"Even":"Odd"
}
console.log("Number is",result1(88))


let result=(num)=>{
    // if(num%2==0)
    //     return "Even"
    // else
    //     return "Odd"
    return num%2==0?"Even":"Odd"
}

console.log("Number is",result(89))


//Find greater between two numbers using anonymous 
let result3=(a,b)=>{
    // if(a>b)
    //     return a
    // else
    //     return b
    return a>b?a:b
}
console.log("Greater is",result3(34,56))

//Find greater between three numbers using ternary operator
let result4=(a,b,c)=>{
    return a>b && a>c?a:(b>a && b>c)?b:(c>a && c>b)?c:"Invalid"
}
console.log("Greater is",result4(43,23,67))

//Program to create simple calculator 
let output=(num1,num2,op)=>{
    switch(op){
        case '+':
            return num1+num2
            break;
        case '-':
            return Math.abs(num1-num2)
            break;
        case '*':
            return num1*num2
            break;
        case '/':
            if(num2!=0)
                return num1/num2;
            else
                return "Cannot be divided by zero"
            break;
    }
}
console.log("Result is:",output(2,0,'/'))


//----------Object creation and simple this-----------//
const user={
    name:"Aastha",
    age:20,
    welcome:function()
    {
        console.log(`${this.name} ,Welcome to CS6`)
        console.log(this)//this refers to the current object
    }
};
user.welcome()
user.name="Text"
user.welcome()
console.log(user.name)
//can also run through open in integrated terminal than write node with .\filename 


//Employee object 
let s="Ajay"
const employee={
    name:s,
    empid:"001",
    greet:function()
    {
        console.log(`${this.name} is an employee of kiet`);
    }
};
employee.greet()

//----------Inner function------------//
// function outer(){
//     let x=10;
//     function inner(){
//         console.log("Inner:",x)
//     }
//     inner()
//     console.log("Outer:",x)
// }

// outer()


//--------------Lexical(means nearby)------------//
// function outer(){
//     let x=10;
//     console.log("Outer",x);
// }
// function inner(){
//     console.log("Inner",x);//error because x has a local scope
// }
// outer()
// inner()



let a=10
function outer()
{
    let b=20//b is lexical for inner loop
    function inner(){
        let c=30
        console.log("Inner:",a,b,c);
    }
    //
    console.log("Outer:",a,b)
}
// inner() as inner has no importance outside 
outer()

