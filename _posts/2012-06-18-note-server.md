---
comments: true
date: 2012-06-18 12:16:10
layout: post
title: 使用node.js实现一个简单的静态文件服务器
wordpress_id: 549
tags:
- nodejs
- network
- code
---

最近用win比较多，好吧，这一个星期都是在win下。在win下就搞搞 js，linux下就搞搞python。会不会搞混？我觉得这两个语言还是有很多相同的地方吧。

好吧我是个三心二意的家伙，之前想用python模拟下linux下 wc命令的脚本，没什么实际意义主要是练练手，都快忘了。基本功能实现了，都没完善就放一边了。限制我使用linux就是网络原因了，只能用无线网。然后就琢磨上了  浏览器的 audio api ，也是简单的实现了下播放器的功能，就又放一边了，唉。

不知道那根筋又抽了，就又装了nodejs 。实现一个静态的文件服务器不难吧。就查了下，根据下面的资料，看别人怎么实现的，修修改改就这样可以用了。仅仅能用而已。不支持中文路径。

[用NodeJS打造你的静态文件服务器](http://cnodejs.org/topic/4f16442ccae1f4aa27001071)

[http://book.nodejs.tw/zh-tw/node_basic.html](http://book.nodejs.tw/zh-tw/node_basic.html)
想了解的话不用看我的代码，把上面两篇看完就行。



    
    
    var server,
        host = '127.0.0.1',
        port = '1337',
        url  = require('url'),
        path = require('path'),
        fs   = require('fs'),
        mime = require('./mime').types,
        http = require('http');
    
    server = http.createServer(function (request, response) {
        console.log(request.url);  /*  输出请求的url */
        var pathname = url.parse(request.url).pathname;
        /* 默认路径  */
        if (pathname == '/') {
            response.writeHead(200,{'Content-Type':'text/html'});
            response.end("<h1>Welcome to MineCraft</h1>");
        }else {
            /*  处理文件路径*/
            var realPath = "access" +pathname;
            var ext = path.extname(realPath);
            ext = ext ? ext.slice(1) : 'unknow';
            path.exists(realPath, function (exists){
            	if (!exists){  /* 无效路径 404*/
            		response.writeHead(404,{
            			'Content-Type':'text/html'
            		});
            		response.write("This request url <strong>"+pathname+"</strong> was not found.");
            		response.end();
            	}else{
            		fs.readFile(realPath,"binary", function (err, file){
            			if (err){
            				response.writeHead(500,{
            					'Content-Type':'text/html'
            				});
            				response.end(err);
            			}else {
            				var contentType = mime[ext] || "text/plain";
            				response.writeHead(200,{
            					'Content-Type':contentType
            				});
            				response.write(file,"binary");
            				response.end();
            			}
            		});
            	}
            });
       }
    });
    
    server.listen(port,host);
    console.log("Server runing at " + host + ":"+port);
    



还有区分文件类型什么的

    
    
    exports.types = {
        "css": "text/css",
        "gif": "image/gif",
        "html": "text/html",
        "ico": "image/x-icon",
        "jpeg": "image/jpeg",
        "jpg": "image/jpeg",
        "js": "text/javascript",
        "json": "application/json",
        "pdf": "application/pdf",
        "png": "image/png",
        "svg": "image/svg+xml",
        "swf": "application/x-shockwave-flash",
        "tiff": "image/tiff",
        "txt": "text/plain",
        "wav": "audio/x-wav",
        "wma": "audio/x-ms-wma",
        "wmv": "video/x-ms-wmv",
        "xml": "text/xml"
    };
    


也就了解一下，后端有难度复杂度，需要考虑的很多。
先这样吧。
