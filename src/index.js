 const mongoose=require('mongoose')
 mongoose.connect('mongodb+srv://newproject:newproject@cluster2.mbqvlp9.mongodb.net/test')
 .then(()=>console.log("connected"))
 .catch(()=>{
    console.log("connection failed");
 })


// const err1 = [1,2,4,5,7,10];
// err1.sort(function(a,b){
//     return b - a});

// const secondLargest=err1[1];
// console.log(secondLargest);
