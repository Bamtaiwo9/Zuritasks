const fetch = require("node-fetch");
const http = require('http')
const fs = require('fs')

/*function get_data(){
    const data = fetch('http://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
    console.log(data); 
  data_stringed = JSON.stringify(data)
  fs.writeFile('dummyb.txt',data_stringed,function () {
    console.log('file written succesfully');
})
}
get_data()*/
var url = 'http://jsonplaceholder.typicode.com/posts';
async function getapi(url) {
    const response = await fetch(url);
    
    var data = await response.json();
    console.log(data);
    data_stringed = JSON.stringify(data)
    fs.writeFile('posts.txt',data_stringed,function () {
        console.log('file written succesfully');
    })
}
getapi(url)

const server = http.createServer(function(req,res){
    res.writeHead(200);
    res.end('hello zuri')
})

server.listen(8080, function(){
    console.log('server is up and running');
    
})