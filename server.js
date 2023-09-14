const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url === "/"){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>tandzi poch</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="tandzik"><button type="submit">send</button></form></body>')
        res.write('</html>')
        return res.end();    
    }
    if(method === "POST" && url === '/message'){
        const body=[];
        req.on('data',(chunk)=>{console.log(chunk);body.push(chunk)});
        req.on('end',()=>{const parsedBody = Buffer.concat(body).toString();const message = parsedBody.split('=')[1]; fs.writeFileSync('message.txt', message);
        fs.writeFileSync('message.txt', 'Dummy data');
        res.statusCode = 302;
        res.setHeader('location', '/');
        return res.end();           
        })
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>tandzi poch</title></head>')
    res.write('<body><h1>ekelenq taaanenq</h1></body>')
    res.write('</html>')
    res.end();    
});

server.listen(3000)


