var http = require ('http')

var server = http.createServer(function(req,res){
    res.writeHead(200)
    res.end('coucou les babies')
});
server.listen(8888,()=>{
    console.log('server running ')
})