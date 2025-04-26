const fs = require("fs");
// this makes directory 
//fs.mkdirSync("Soham");
//fs.writeFileSync("Soham/info.txt","My name is Soham Walam");
//fs.appendFileSync("Soham/info.txt","\nThis is append file function");

//reads data -> buffer
// const data = fs.readFileSync("Soham/info.txt");
//converts to String
// org_data = data.toString();
// console.log(data);
// console.log(org_data);

//renames file
// fs.renameSync("Soham/info.txt","Soham/data.txt");

//Removes file 
// fs.unlinkSync("Soham/data.txt");

//remove directory
fs.rmdirSync("Soham");
