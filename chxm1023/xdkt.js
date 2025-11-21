/*************************************

项目名称：小滴课堂
下载地址：https://t.cn/A6T1XX5Z
更新日期：2024-07-03
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]

^https:\/\/api-v2\.xdclass\.net\/api\/account\/v\d\/(detail|login) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/xdkt.js

[mitm]
hostname = api-v2.xdclass.net

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.data = {
  ...yahe1023.data,
  "vipExpired" : "2099-09-09 09:09:09",
  "vipRank" : 1,
  "identityType" : "永久会员",
  "role" : "FOREVER_VIP"
};

$done({body : JSON.stringify(yahe1023)});
