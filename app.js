const fs=require('fs');

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

// *********************************************************************************************

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