var http = require ('http')
var url = require ("url")
var querystring = require ('querystring')
/*var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname
    console.log(page)
    res.writeHead(200, {"content-type": "text/html"});
    res.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8"/>
            <title>Le titre de ma page</title>
        </head>
        <body>
            <p> voici un paragraphe <strong>HTML</strong> !</p>
        </body>
        </html>
        `);*/
        
        
        
        
        /*
        res.writeHead(200, {"content-type": "text/plain"});
        if(page == '/')
            res.write('page d\'acceuil')
        else if (page == '/contact')
            res.write('page de contact')
        else if (page == '/affichage/1/user')
            res.write('afficher l\'utulisateur qui a l\'id 1 !')
        else {
            res.write ('404 not found !')
        }
        url.parse(req.url).query

        



        //res.write("coucou les babies")
        res.end();
})

var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    
    res.writeHead(200, {"Content-Type": "text/plain"});
    
    if ('id' in params && 'login' in params) {
        res.write('Votre ID est ' + params['id'] + ' et votre login est ' + params['login']);
    } else {
        res.write('Veuillez saisir votre ID et login');
    }
    
    res.end();
});
*/
var server = http.createServer(function(req,res) {

    var params =querystring.parse(url.parse(req.url).query);
    res.writeHead(200,{"Content-Type": "text/plain"});
    if('id' in params && 'login' in params) {
    res.write('Votre id est ' + params['id'] +
    'et votre login' +params['login']);
    }
    else{
    res.write('Veuillez saisir votre id et login !');
    }
    res.end();
    });
const routeLogger = (path) => {
    if(path=='/')
        return { status:200,message :"home page !"};
    else if(path==="/contact"){
    return { status : 200,message :"contact page !"};
    }
    else if (path==="/Affichage/1/user"){
    return { status : 400,message :"Not Found!"};
    }
    }
server.listen(8888,()=>{
    console.log('server running ')
})