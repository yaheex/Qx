/*************************************

项目名称：电子合同易签约
下载地址：https://t.cn/A68OiAir
更新日期：2024-08-03
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/iosdzhtyqy\.sanwubeixin\.cn\/ct\/user\/info url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/dzhtyqy.js

[mitm]
hostname = iosdzhtyqy.sanwubeixin.cn

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.data = {
  ...yahe1023.data,
  "money" : 999999,
  "isVip" : true,
  "vip_money" : 999999,
  "vip_type" : 1,
  "vip_time" : 4092599349
};

$done({body : JSON.stringify(yahe1023)});