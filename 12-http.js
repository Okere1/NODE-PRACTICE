const http = require('http')  // Get access to http module
const server = http.createServer((req,res)=>{     // creates a server using the createserver method, the req in  the call back funtion is the request from the client while the res is the response from our code. res.write gives the response after which  it is ended by the res.end() method
    if(req.url === '/'){
        res.end('This is my Home Page')
    }
    else if(req.url === '/about'){
        res.end('This is our brief history')
    }
    else {
    res.end(`
     <h1> Ooops Error </h1>
     <p> We can't seem to find the page you are looking for </p>
     <a href = "/"> Back Home </a>
     `)
    }
})                                          

server.listen(5000)  // SEt the port to listen to 