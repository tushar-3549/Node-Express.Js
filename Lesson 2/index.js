const fs = require('fs');
// fs.writeFile("demo1.txt", "This is demo file number 1", (err)=>{
// fs.appendFile("demo1.txt", ".I am 22 years old.", (err)=>{
// fs.readFile("demo1.txt","utf-8", (err, data)=>{
// fs.rename("demo1.txt", "demo2.txt", (err)=>{
    fs.unlink("demo2.txt", (err)=>{

    if(err){
        console.log("Error Occured "+err);
    }
    else{
        // console.log(data);
        console.log("Successful");
    }
})