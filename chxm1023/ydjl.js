/*************************************

项目名称：阅读记录 解锁VIP
下载地址：https://t.cn/A6GJPYdo

**************************************

[rewrite_local]

^https:\/\/app\.yidiansz\.com\/api\/.+\/app\/user\/info?(.*?)*$ url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/ydjl.js

[mitm]

hostname = app.yidiansz.com

*************************************/


var body = $response.body;
var yahee = JSON.parse(body);

yahee.data.member_type = 4;
yahee.data.end_date = "2099-09-09 09:09:09";
yahee.data.has_perpetual_vip = 1;
yahee.data.member_status = 4;
yahee.data.auto_renew_status = 2;
yahee.data.is_publish = 1;

$done({body : JSON.stringify(yahee)});

