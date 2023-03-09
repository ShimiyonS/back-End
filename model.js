const fs = require("fs");
const [ , , num1, num2, mes ]=process.argv;
const sum = (n1, n2)=> n1+n2 ;  
console.log(sum(+num1, +num2))

const welcome =(message)=>{
    console.log(`hi ${message} welcome to class`)
}
welcome(mes)

//reading file
fs.readFile("./new.txt", "utf-8", (err, data)=>{
    console.log(data)
}
)


//write file
const content="TATA is ba most populer company"

fs.writeFile("./new2.txt", content, (err,data)=>{
    
        console.log("done");
    
})


//update exsiting file
const newcontent="\nNew content added"

fs.appendFile("./new.txt", newcontent, (err)=>{
    console.log("UPDATE doone...")
} )


//delete
// fs.unlink("./hello.txt", (err)=>{
//     if (err){
//         console.log(err)
//     }else{
//         console.log("DELETE is done...")
//     }
// })

//read direct
fs.readdir("./", (err,data)=>{
    console.log("directory",data)
})

let time = Date.now();
console.log(time);
let date = new Date();
console.log("date", date)
let utc=date.toUTCString();
console.log("utc",utc);



