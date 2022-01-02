//footer  custom
function tounicode(str){
    return str.split('')
    .map(function(e){
        var byte = e.charCodeAt(0).toString(16);
        return byte.length<=4? "\\u"+(new Array(5-byte.length)).join('0')+byte: "\\u"+byte
    }).join('');
}
var bq = [
"\u0044\u006f\u006e\u0027\u0074\u0020\u006e\u0065\u0076\u0065\u0072\u0020\u0074\u0072\u0079\u0020\u0074\u006f\u0020\u006a\u0075\u0064\u0067\u0065\u0020\u006d\u0065\u0020\u0044\u0075\u0064\u0065\u002c\u0020\u0079\u006f\u0075\u0020\u0064\u006f\u006e\u0027\u0074\u0020\u006b\u006e\u006f\u0077\u0020\u0077\u0068\u0061\u0074\u0020\u0046\u0075\u0063\u006b\u0020\u0049\u0020\u0062\u0065\u0065\u006e\u0020\u0074\u0068\u0072\u006f\u0075\u0067\u0068",
"\u0049\u0074\u0027\u0073\u0020\u006f\u006e\u006c\u0079\u0020\u0061\u0066\u0074\u0065\u0072\u0020\u0077\u0065\u0027\u0076\u0065\u0020\u006c\u006f\u0073\u0074\u0020\u0065\u0076\u0065\u0072\u0074\u0068\u0069\u006e\u0067\u0020\u0074\u0068\u0061\u0074\u0020\u0077\u0065\u0027\u0072\u0065\u0020\u0066\u0072\u0065\u0065\u0020\u0074\u006f\u0020\u0064\u006f\u0020\u0061\u006e\u0079\u0074\u0068\u0069\u006e\u0067\u0021",
"\u0049\u0020\u0062\u0065\u006c\u0069\u0065\u0076\u0065\u0020\u0077\u0068\u0061\u0074\u0065\u0076\u0065\u0072\u0020\u0064\u006f\u0065\u0073\u006e\u0027\u0074\u0020\u006b\u0069\u006c\u006c\u0020\u0079\u006f\u0075\u002c\u0020\u0073\u0069\u006d\u0070\u006c\u0079\u0020\u006d\u0061\u006b\u0065\u0073\u0020\u0079\u006f\u0075\u0020\u002e\u002e\u002e\u0020\u0073\u0074\u0072\u0061\u006e\u0067\u0065\u0072",
"\u53c2\u5dee\u591a\u6001\u4e43\u5e78\u798f\u672c\u6e90",
"\u4f60\u95ee\u6211\u8981\u53bb\u5411\u4f55\u65b9\uff0c\u6211\u6307\u7740\u5927\u6d77\u7684\u65b9\u5411",
"\u81ea\u6211\u6210\u957f\u9700\u8981\u9760\u624b\u6deb",
"\u4e0d\u8981\u6362\u6211\u4e0b\u573a\uff0c\u6211\u6b7b\u540e\u591a\u7684\u662f\u65f6\u95f4\u4f11\u606f",
"\u5982\u679c\u676f\u5b50\u7684\u4f7f\u547d\u662f\u76db\u6c34\uff0c\u90a3\u4e48\u676f\u5b50\u4f1a\u5728\u6ee1\u7684\u65f6\u5019\u9ad8\u5174\uff0c\u7a7a\u7684\u65f6\u5019\u60b2\u54c0\u3002",
"\u004c\u0065\u0073\u0073\u0020\u0069\u0073\u0020\u006d\u006f\u0072\u0065\u0020\u0053\u0069\u006d\u0070\u006c\u0065\u0020\u0069\u0073\u0020\u0062\u0065\u0074\u0074\u0065\u0072\u0020\u0054\u0061\u006c\u006b\u0020\u0069\u0073\u0020\u0063\u0068\u0065\u0061\u0070",
"\u6ca1\u6709\u624d\u534e\u53bb\u9009\u62e9\u0020\u6ca1\u6709\u80c6\u91cf\u53bb\u4f5c\u6076",
"\u0057\u006f\u006f\u0064\u0065\u006e\u7237\u7237\u6559\u5bfc\u6211\u4eec\u8981\u60f3\u6253\u597d\u7403\u7684\u7b2c\u4e00\u4ef6\u4e8b\u5c31\u662f\u6574\u7406\u597d\u4f60\u7684\u889c\u5b50\uff0c\u7cfb\u7d27\u4f60\u7684\u978b\u5e26\uff5e",
"\u4e0d\u4f1a\u4e00\u5207\u91cd\u542f\u7535\u8111\u4e0d\u80fd\u89e3\u51b3\u7684\u95ee\u9898",
"\u6562\u4e8e\u8d28\u7591\u8fdd\u53cd\u76f4\u89c9\u7684\u4e8b\u7269\uff0c\u5bf9\u672a\u77e5\u7684\u4e8b\u7269\u6301\u5f00\u653e\u6001\u5ea6\u3002",
"\u603b\u662f\u60f3\u6446\u8131\u4e0e\u8fc7\u53bb\u7684\u5173\u7cfb\uff0c\u53ef\u53c8\u65e0\u529b\u5efa\u7acb\u65b0\u7684\u5173\u7cfb\uff0c\u4f1a\u4e0d\u4f1a\u54ea\u4e00\u5929\u5c31\u88ab\u0020\u0067\u0061\u0072\u0062\u0061\u0067\u0065\u0020\u0063\u006f\u006c\u006c\u0065\u0063\u0074\u0069\u006f\u006e\u0020\u4e86\u3002",
"\u4f60\u522b\u60f3\u77e5\u9053\u6211\u5230\u5e95\u662f\u8c01\u002c\u0020\u4e5f\u522b\u60f3\u770b\u5230\u6211\u7684\u865a\u4f2a",
"\u79d1\u5b66\u4e00\u5b9a\u5f88\u7231\u6d6a\u6f2b\uff0c\u56e0\u4e3a\u4ed6\u603b\u662f\u8bd5\u56fe\u63ed\u53bb\u6d6a\u6f2b\u7684\u5916\u8863\u3002",
"\u6211\u72ec\u81ea\u8d70\u8fc7\u4f60\u8eab\u65c1\u0020\u5e76\u6ca1\u6709\u8bdd\u8981\u5bf9\u4f60\u8bb2",
"\u0054\u0068\u0065\u0073\u0065\u0020\u0077\u0061\u006c\u006c\u0073\u0020\u0061\u0072\u0065\u0020\u006b\u0069\u006e\u0064\u0020\u006f\u0066\u0020\u0066\u0075\u006e\u006e\u0079\u0020\u006c\u0069\u006b\u0065\u0020\u0074\u0068\u0061\u0074\u003a\u0046\u0069\u0072\u0073\u0074\u0020\u0079\u006f\u0075\u0020\u0068\u0061\u0074\u0065\u0020\u0074\u0068\u0065\u006d\u002c\u0074\u0068\u0065\u006e\u0020\u0079\u006f\u0075\u0020\u0067\u0065\u0074\u0020\u0075\u0073\u0065\u0064\u0020\u0074\u006f\u0020\u0074\u0068\u0065\u006d\u002c\u0045\u006e\u006f\u0075\u0067\u0068\u0020\u0074\u0069\u006d\u0065\u0020\u0070\u0061\u0073\u0073\u0065\u0064\u002c\u0067\u0065\u0074\u0020\u0073\u006f\u0020\u0079\u006f\u0075\u0020\u0064\u0065\u0070\u0065\u006e\u0064\u0020\u006f\u006e\u0020\u0074\u0068\u0065\u006d\u002e\u0054\u0068\u0061\u0074\u0027\u0073\u0020\u0069\u006e\u0073\u0074\u0069\u0074\u0075\u0074\u0069\u006f\u006e\u0061\u006c\u0069\u007a\u0069\u006e\u0067\u3002",
"\u0049\u006e \u0061\u006e \u0069\u0073\u006f\u006c\u0061\u0074\u0065\u0064 \u0073\u0079\u0073\u0074\u0065\u006d\u002c\u0074\u0068\u0065 \u0065\u006e\u0074\u0072\u006f\u0070\u0079 \u0063\u0061\u006e \u006f\u006e\u006c\u0079 \u0069\u006e\u0063\u0072\u0065\u0061\u0073\u0065\u002e",
"\u5f53\u4e00\u4e2a\u60b2\u89c2\u4e3b\u4e49\u8005\u633a\u597d\u7684\uff0c\u8981\u4e48\u4f60\u662f\u5bf9\u7684\uff0c\u8981\u4e48\u7ed3\u679c\u662f\u597d\u7684\u3002",
]
function random(len){
  return Math.floor(Math.random()*len)
}
var input = document.getElementById("quote");
input.innerText = bq[random(bq.length)];