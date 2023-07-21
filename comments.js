//Create web server
const http = require('http');
//Create file system
const fs = require('fs');
//Create path
const path = require('path');
//Create url
const url = require('url');
//Create querystring
const querystring = require('querystring');
//Create comment
const comments = [];
//Create server
http.createServer(function(req,res){
    //Create parsedUrl
    var parsedUrl = url.parse(req.url,true);
    //Create pathName
    var pathName = parsedUrl.pathname;
    //Create query
    var query = parsedUrl.query;
    //Create method
    var method = req.method;
    //Create filePath
    var filePath = path.join(__dirname,'/views');
    //Create fileName
    var fileName = path.join(filePath,'/index.html');
    //Create extName
    var extName = path.extname(fileName);
    //Create contentType
    var contentType = getContentType(extName);
    //Create user
    var user = '';
    //Create password
    var password = '';
    //Create comment
    var comment = '';
    //Create isLogin
    var isLogin = false;
    //Create isExist
    var isExist = false;
    //Create isRight
    var isRight = false;
    //Create isExistComment
    var isExistComment = false;
    //Create isExistUser
    var isExistUser = false;
    //Create isExistPassword

