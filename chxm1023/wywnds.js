/*************************************

项目名称：网易蜗牛读书
下载地址：https://t.cn/A6NBBLeU

**************************************

[rewrite_local]
^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/wywnds.js

[mitm]
hostname = p.du.163.com

*************************************/


var body=$response.body;

yahee = body.replace(/tradeEndTime\":\d+/g,'tradeEndTime":4092599349000');

$done(yahee);
