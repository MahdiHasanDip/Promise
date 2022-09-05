var colors = require('colors');



const myPromise= new Promise((resolved, rejected)=>{
const user = "null"
if (!user){
    setTimeout(()=>{rejected("something went wrong")},1000)
    }
    else{
        setTimeout(()=>{resolved("loaded successfully")},1000)
    }

})
myPromise.then((res)=>console.log(res)).catch((err)=>console.log(err));




const myPromise2 = new Promise((reject, resolve)=>{
    const user= "null"
    if(user){
        resolve("loaded")
    }
    else{
        reject('wrong')
    }
})

myPromise2.then(res=>{
    console.log(res)
}).catch(err=>{
    
        console.log(err)
});

const dataLoader = new Promise ((done, notDone)=>{
    user = null
    if (user) {
        setTimeout(()=>{
            done("data loaded 3")
        },1000)
        
    }
    else{
        setTimeout(()=>{
            notDone("data not loaded 3")
        },1000)
    }
    
})

dataLoader.then(
    res =>console.log(res )
).catch(
    err=>console.log(err .red)

);

