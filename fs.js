// File system in Node js

const http = require('http');
const fs = require('fs');


// creating new file
fs.appendFile('demo_file.txt','',(err)=>{
    if(err) throw err;
    console.log('data is saved')
})


// update file 

fs.appendFile('demo_file.txt','I am updated text',(err)=>{
    if(err) throw err
    console.log('File is updated');
})


// rename file
fs.rename('demo_file.txt','update_name_demo_file.txt',(err)=>{
    if(err)throw err;
    console.log('file  Renamed');
})

// Delete a file

fs.unlink('update_name_demo_file.txt',(err)=>{
    if(err)throw err

    console.log("File is deleted");
})



//  read file
http.createServer((req,resp)=>{
    fs.readFile('demo.html',(err,data)=>{
       resp.writeHead(200,{'Content-Type':'text/html'});

       resp.write(data);
       return resp.end();
    });
}).listen(5000,()=>{
    console.log('Server is runing ')
});