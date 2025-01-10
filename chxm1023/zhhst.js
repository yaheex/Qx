/*************************************

项目名称：字画幻术图
下载地址：https://t.cn/A6OK0wQh




**************************************

[rewrite_local]
^https?:\/\/api\.zihuaai\.com\/v\d\/users url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/zhhst.js

[mitm]
hostname = api.zihuaai.com

*************************************/


var body = $response.body;

body = body.replace(/\"isVip":\d+/g, '\"isVip":1');
body = body.replace(/\"vipExpired":\d+/g, '\"vipExpired":4092599349000');

$done({body});
