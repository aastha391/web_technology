//callback function

// setTimeout(()=>{
//     console.log(2)
// },2000);
// console.log(3);

// function bakeCake(mycallBack){
//     console.log("1.Cake is in oven")
//     setTimeout(()=>{
//         console.log("2.Cake is baked")
//         mycallBack();//a function is call backed bcz i can eat the cake only when the cake is baked 
//     },2000)
// }

// // bakeCake(()=>{//we pass call back like this as call backs are meant to make the code flexible and reusable 
// //     console.log("3.Now i can eat the cake")
// // })

// bakeCake()//it will show mycallBack is not a function 



//-------------Promises---------------//

//promise has two parameters resolve and reject
//const promiseone=new Promise(function(resolve,reject))
//we use promises to reduce the complexity of code as callbacks become more messy in case of more async calls
//---------use of promise using then and catch
function bakeCake(){
    return new Promise((myResolve,myReject)=>{
        console.log("1.Baking cake")
        setTimeout(()=>{
            let flag=false;
            if(flag){
                myResolve("2.Cake is ready")
            }
            else{
                myReject("3.Cake is burnt")
            }
        },2000)
    });
}
// //then is attached with myResolve and catch with myReject
// bakeCake().then((msg)=>{
//     console.log(msg)
//     console.log("Let's eat Cake")
// }).catch((error)=>{
//     console.log(error)
//     console.log("Have pizza instead")
// })


//same thing using try catch instead of then and catch
async function party(){
    console.log("Start Baking")
    try{
        const cake=await bakeCake();//captures promise
        console.log(cake);
        console.log("Try cake");
    }
    catch(e){
        console.log(e+"Error")
        console.log("What about pizza?")
    }
}
party()

//WAP in js to check whether u can go to kashmir or not based on petrol 
// function cango(){
//     return new Promise((myResolve,myReject)=>{
//         console.log("Can i go to Kashmir")
//         setTimeout(()=>{
//             let petrol=80
//             if(petrol>100)
//                 myResolve("Can go to Kashmir")
//             else
//                 myReject("Cannot go to kashmir")
//         },2000)
//     });
// }

// cango().then((msg)=>{
//     console.log(msg)
// }).catch((error)=>{
//     console.log(error)
// })


// console.log("Before execution")
// for(let i=0;i<2;i++){
//     setTimeout(function(){//this settime out part goes in call stack so first everything outside the settimeout will be printed
//         console.log("Set Time out message")
//         func1()
//     },1000)
//     func2()
// }
// console.log("After execution")

// function func1(){
//     console.log("in function 1")
// }

// function func2(){
//     console.log("in function 2")
// }



//bake cake code without using promises by using callback function  
function bakeCake(myCallback) {
    setTimeout(() => {
        let flag = false; // try changing value

        if (flag) {
            myCallback(null, "2. Cake is Ready");
        } else {
            myCallback("2. Cake is Burnt", null);
        }

    }, 2000);
}
bakeCake((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log(success);
    }
});
