/*************************************

项目名称：柠檬轻断食
下载地址：https://t.cn/A6OOKolN




**************************************

[rewrite_local]
^https?:\/\/fast\.lmfasting\.cn\/api url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/ningmengqds.js

[mitm]
hostname = fast.lmfasting.cn

*************************************/


var body = $response.body;

body = body.replace(/\"display":\w+/g, '\"display":true');

body = body.replace(/\"is_plan":\w+/g, '\"is_plan":true');

body = body.replace(/\"need_vip":\w+/g, '\"need_vip":false');

body = body.replace(/\"is_vip":\w+/g, '\"is_vip":false');

$done({body});
