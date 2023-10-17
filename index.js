const fs=require('fs');

// fs.writeFileSync("file.txt","Hii i am saroj kumar");

// fs.writeFileSync("file.txt", "It will replace the old content");

// fs.appendFileSync("file.txt", "Hey... i am appending the content into old content");

// const buff_data=fs.readFileSync('file.txt');

// console.log(buff_data);

// const original_data=buff_data.toString();

// console.log(original_data);




// fs.mkdirSync('saroj');

fs.writeFileSync('saroj/test.txt',"I am the test file");

fs.appendFileSync("saroj/test.txt", "I am going to append in the old content");

const data = fs.readFileSync('saroj/test.txt','utf8');

console.log(data);

fs.renameSync('saroj/test.txt', 'saroj/newTest.txt');

fs.unlinkSync('saroj/newTest.txt');


fs.rmdirSync('saroj');

