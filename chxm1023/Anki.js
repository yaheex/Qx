/*************************************

项目名称：Anki记忆卡
软件版本：1.12.1 Time：2023.8.16
下载地址：https://is.gd/ogshV8



[rewrite_local]
^https:\/\/api\.ankichinas\.com\/api\/v1\/users\/vipInfo url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/Anki.js

[mitm]
hostname = api.ankichinas.com

*************************************/


var body = JSON.parse($response.body);

body.data.is_vip = true;
body.data.vip_expire_at = 4102403992;
body.data.vip_end_at = 4102403992;
body.data.vip_day = 999; 

$done({ body: JSON.stringify(body) });
