/*************************************

项目名称：记乎
软件版本：3.4.5
下载地址：https://is.gd/M1pfGl

**************************************

[rewrite_local]
^https:\/\/api\.geefoo\.cn\/v2\/account\/userinfo url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/jihu.js

[mitm]
hostname = api.geefoo.cn

*************************************/


var body = JSON.parse($response.body);

body.vip.expired_at = 4102363747;

$done({ body: JSON.stringify(body) });
