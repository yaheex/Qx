/*************************************

项目名称：狐猴浏览器
下载地址：https://t.cn/A6WVGsM1
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/social-api-public\.lemurbrowser\.com\/api\/payment\/getVIPInfo url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/hhllq.js

[mitm]
hostname = social-api-public.lemurbrowser.com

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.data.isVIP = true;
yahe1023.data.timeExpire = 4092599349;

$done({body : JSON.stringify(yahe1023)});
