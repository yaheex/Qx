/*************************************

项目名称：钱迹-存钱记账小能手
下载地址：https://t.cn/A69ztdZy
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/qianji\.xxoojoke\.com\/vip\/configios url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/qianji.js

[mitm]
hostname = qianji.xxoojoke.com

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.data.config.userinfo.vipend = 4092599349;
yahe1023.data.config.userinfo.vipstart = 1666666666;
yahe1023.data.config.userinfo.viptype = 100;

$done({body : JSON.stringify(yahe1023)});
