const fs = require("fs");
const os = require("os");
const path = require("path");

const { add, sub, mul, div } = require("./UtilityFunction");

const chalk = require("chalk");

const validator = require("validator");

const http = require("http");
const server = http.createServer();

// *********************************************************************************************

// fs.writeFileSync("file.txt","Hii i am saroj kumar");

// fs.writeFileSync("file.txt", "It will replace the old content");

// fs.appendFileSync("file.txt", "Hey... i am appending the content into old content");

// const buff_data=fs.readFileSync('file.txt');

// console.log(buff_data);

// const original_data=buff_data.toString();

// console.log(original_data);

// fs.mkdirSync('saroj');

// fs.writeFileSync('saroj/test.txt',"I am the test file");

// fs.appendFileSync("saroj/test.txt", "I am going to append in the old content");

// const data = fs.readFileSync('saroj/test.txt','utf8');

// console.log(data);

// fs.renameSync('saroj/test.txt', 'saroj/newTest.txt');

// fs.unlinkSync('saroj/newTest.txt');

// fs.rmdirSync('saroj');

//*********************************************************************************************

// fs.mkdir('saroj',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Folder created successfully✅")
//     }
// })

// fs.writeFile('saroj/file.txt','This is my test file',()=>{
//     console.log("File created and content is written successfully✅");
// })

// fs.appendFile('saroj/file.txt',"Appending the content ", ()=>{
//     console.log("File appended successfully✅")
// })

// fs.readFile('saroj/file.txt','utf-8',(err,data)=>{
//     console.log(data);
// })

// fs.unlink('saroj/file.txt',(err)=>{
//     console.log("File is deleted ✅")
// })

// fs.rmdir('saroj',()=>{
//     console.log("Folder is deleted ✅")
// })

// *********************************************************

// OS modules

// console.log(os.arch());

// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.tmpdir());

// const freeMemory = os.freemem();

// console.log(`${freeMemory / 1024 / 1024 / 1024}`);

// const totalMemory = os.totalmem();

// console.log(`${totalMemory / 1024 / 1024 / 1024}`);

// const dirname=path.dirname('enter current path'); // it will give current dirname

// const fileExtentionName=path.extname('current directory'); // it will give file extension name

// const baseName=path.basename('current directory name') // it will give the current file name

// const dirDetails=path.parse('C:/Users/stran/Desktop/Backend-Busted/saroj/app.js');

// console.log(dirDetails);

// console.log(dirDetails.root)
// console.log(dirDetails.name)
// console.log(dirDetails.ext)

//  *************   Import and Export   ********************

// console.log(add(10, 50));
// console.log(sub(10, 5));
// console.log(mul(10, 5));
// console.log((div(20, 30)).toFixed(2));

// console.log(chalk.green.underline.inverse("I am the green"));

// console.log(chalk.red.inverse("Something went wrong"));

// *******   Validator is good package for validating the email, alpha, alphanumeric and so on.

// const res = validator.isEmail("saroj@gmail.com");

// const res = validator.isAlpha("slflsAdfjdslfnslajdf");

// const res = validator.isAlphanumeric("1234567890sarojkumar");

// console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

// console.log("saroj kumar");

//    Object to JSON and Vice-e-verse

// const saroj = {
//   name: "saroj kumar",
//   reg: 12208785,
//   course: "MCA",
// };

// console.log(saroj);

// const jsonFormat = JSON.stringify(saroj);

// console.log(jsonFormat);

// const objectFormat = JSON.parse(jsonFormat);

// console.log(objectFormat);

// Event Modules in Nodejs

// ********************************************************************************************

// const EventEmitter = require("events");

// const event = new EventEmitter();

// event.on("checkPage", (statusCode, message) => {
//   console.log(
//     "This is the status code " +
//       statusCode +
//       " and This is the message " +
//       message
//   );
// });

// event.emit("checkPage", 200, "ok");

// *********************** Streaming Basic concepts

server.on("request", (req, res) => {

  // *************  1st Way 

  // fs.readFile("input.txt", (err, data) => {
  //   if (err) return console.log(err);
  //   res.end(data.toString());
  // });

  
const streamdata=fs.createReadStream('input.txt');

// *************  2nd Way 

// streamdata.on('data',(chunkdata)=>{
//   res.write(chunkdata);
// });

// streamdata.on('end',()=>{
//   res.end();
// });

// streamdata.on('error',(err)=>{
//   console.log(err);
//   res.end("File not found");
// })

streamdata.pipe(res)

});




server.listen(8000, () => {
  console.log("server is started on 8000");
});

