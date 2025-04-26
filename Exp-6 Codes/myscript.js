const fs = require("fs");

//created directory 
// fs.mkdirSync("Q2");

// reads file info and appends 
fs.writeFileSync("info.txt","My name is Soham Walam");
fs.appendFileSync("info.txt","\nThis is append file function");
fs.appendFileSync("info.txt","\nThis is next line just for checking");
fs.appendFileSync("info.txt","\nUpdate checking");
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
//fs.rmdirSync("Soham");
