/*************************************

项目名称：OtterLife
下载地址：https://t.cn/A68TbbDM
更新日期：2024-08-06
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/otter-api\.codefuture\.top\/v\d\/user\/current url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/otterlife.js

[mitm]
hostname = otter-api.codefuture.top

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.data = {
  ...yahe1023.data,
  "vipType" : "lifetime",
  "vipDeadline" : "2099-09-09T09:09:09.000Z",
  "isVip" : true
};

$done({body : JSON.stringify(yahe1023)});