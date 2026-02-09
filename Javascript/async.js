//callback function

// setTimeout(()=>{
//     console.log(2)
// },2000);
// console.log(3);

//promise has two parameters resolve and reject
//const promiseone=new Promise(function(resolve,reject))

// function bakeCake(mycallBack){
//     console.log("1.Cake is in oven")
//     setTimeout(()=>{
//         console.log("2.Cake is baked")
//         mycallBack();
//     },2000)
// }

// // bakeCake(()=>{
// //     console.log("3.Now i can eat the cake")
// // })

// bakeCake()//it will show mycallBack is not a function 

//---------use of promise using then and catch
// function bakeCake(){
//     return new Promise((myResolve,myReject)=>{
//         console.log("1.Baking cake")
//         setTimeout(()=>{
//             let flag=false;
//             if(flag){
//                 myResolve("2.Cake is ready")
//             }
//             else{
//                 myReject("3.Cake is burnt")
//             }
//         },2000)
//     });
// }
// //then is attached with myResolve and catch with myReject
// bakeCake().then((msg)=>{
//     console.log(msg)
//     console.log("Let's eat Cake")
// }).catch((error)=>{
//     console.log(error)
//     console.log("Have pizza instead")
// })


//WAP in js to check whether u can go to kashmir or not based on petrol 
function cango(){
    return new Promise((myResolve,myReject)=>{
        console.log("Can i go to Kashmir")
        setTimeout(()=>{
            let petrol=150
            if(petrol>100)
                myResolve("Can go to Kashmir")
            else
                myReject("Cannot go to kashmir")
        },2000)
    });
}

cango().then((msg)=>{
    console.log(msg)
}).catch((error)=>{
    console.log(error)
})